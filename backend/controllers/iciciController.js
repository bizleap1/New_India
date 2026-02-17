const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const Order = require('../models/Order');
const { generateSecureHash, verifySecureHash } = require('../utils/hashGenerator');

/**
 * Native HTTPS helper to bypass axios port validation bugs
 */
const postRequest = (url, body, headers) => {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url.trim());
        const options = {
            hostname: urlObj.hostname,
            port: urlObj.port || 443,
            path: urlObj.pathname + urlObj.search,
            method: 'POST',
            headers: {
                ...headers,
                'Content-Length': Buffer.byteLength(body)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    resolve({ data: parsed, status: res.statusCode });
                } catch (e) {
                    resolve({ data: data, status: res.statusCode });
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(body);
        req.end();
    });
};

exports.initiateSale = async (req, res) => {
    try {
        const { amount, customerName, customerEmail, customerMobile } = req.body;

        const formattedAmount = parseFloat(amount || 1).toFixed(2);
        const now = new Date();
        const txnDate = now.getFullYear().toString() +
            (now.getMonth() + 1).toString().padStart(2, '0') +
            now.getDate().toString().padStart(2, '0') +
            now.getHours().toString().padStart(2, '0') +
            now.getMinutes().toString().padStart(2, '0') +
            now.getSeconds().toString().padStart(2, '0');

        const merchantTxnNo = "TXN" + Date.now();

        const payload = {
            "merchantId": (process.env.ICICI_MID || "").trim(),
            "aggregatorID": (process.env.ICICI_AGGREGATOR_ID || "").trim(),
            "merchantTxnNo": merchantTxnNo,
            "amount": formattedAmount,
            "currencyCode": "356",
            "payType": "0",
            "transactionType": "SALE",
            "customerEmailID": customerEmail || "test@gmail.com",
            "customerMobileNo": customerMobile || "9999999999",
            "customerName": customerName || "Guest User",
            "returnURL": (process.env.RETURN_URL || "").trim(),
            "txnDate": txnDate
        };

        const minifiedPayload = JSON.stringify(payload);
        const secret = (process.env.ICICI_SECRET_KEY || "").trim();
        const secureHash = generateSecureHash(payload, secret);

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("🔥 ICICI PG PAY v2 DEBUG LOGS");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("1. PAYLOAD TO HASH:", minifiedPayload);
        console.log("2. SECRET KEY USED:", secret);
        const payloadWithHash = { ...payload, secureHash };
        const minifiedPayloadWithHash = JSON.stringify(payloadWithHash);

        console.log("3. GENERATED HASH :", secureHash);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

        const initiateUrl = (process.env.ICICI_INITIATE_URL || "https://pgpayuat.icicibank.com/tsp/pg/api/v2/initiateSale").trim();

        const response = await postRequest(initiateUrl, minifiedPayloadWithHash, {
            'Content-Type': 'application/json'
        });

        console.log("ICICI API RAW RESPONSE:", JSON.stringify(response.data, null, 2));

        const { responseCode, responseDescription, redirectURI, tranCtx } = response.data;

        if (responseCode === "R1000" && redirectURI) {
            try {
                // Check if order already exists (prevents duplicate key error on retries)
                const existingOrder = await Order.findOne({ merchantTxnNo });

                if (!existingOrder) {
                    await Order.create({
                        merchantTxnNo,
                        amount: formattedAmount,
                        customerName: customerName || "Guest User",
                        customerEmail: customerEmail || "test@gmail.com",
                        customerMobile: customerMobile || "9999999999",
                        status: 'PENDING'
                    });
                    console.log("✅ Order saved successfully to MongoDB");
                } else {
                    console.log("ℹ️  Order already exists, skipping creation");
                }
            } catch (dbError) {
                console.error("❌ MongoDB Order.create() FAILED:");
                console.error("DB Error Name:", dbError.name);
                console.error("DB Error Message:", dbError.message);
                console.error("DB Error Code:", dbError.code);
                if (dbError.errors) {
                    console.error("Validation Errors:", JSON.stringify(dbError.errors, null, 2));
                }
                // Continue anyway - don't block payment redirect
            }

            const finalRedirectUrl = `${redirectURI}?tranCtx=${tranCtx}`;
            res.status(200).json({ success: true, redirectUrl: finalRedirectUrl });
        } else {
            res.status(400).json({
                success: false,
                message: responseDescription || "Initiation failed",
                code: responseCode,
                details: response.data
            });
        }

    } catch (error) {
        console.error("CRITICAL EXCEPTION:");
        console.error("Error Name:", error.name);
        console.error("Error Message:", error.message);
        console.error("Error Stack:", error.stack);
        if (error.errors) {
            console.error("Validation Errors:", JSON.stringify(error.errors, null, 2));
        }
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};

exports.handleResponse = async (req, res) => {
    try {
        console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("🔔 PAYMENT CALLBACK RECEIVED");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("📥 Request Method:", req.method);
        console.log("📥 Request Headers:", JSON.stringify(req.headers, null, 2));
        console.log("📥 Request Body:", JSON.stringify(req.body, null, 2));
        console.log("📥 Request Query:", JSON.stringify(req.query, null, 2));
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

        // Extract data from both body and query (some gateways use query params)
        const callbackData = { ...req.query, ...req.body };

        // Try multiple possible field names for transaction ID (Universal Mapping)
        const merchantTxnNo = callbackData.merchantTxnNo ||
            callbackData.orderId ||
            callbackData.order_id ||
            callbackData.merchantOrderNo ||
            callbackData.referenceNo ||
            callbackData.txnId ||
            callbackData.transaction_id ||
            callbackData.razorpay_order_id ||
            callbackData.txnid ||
            callbackData.merchant_txn_no;

        console.log("🔍 [DEBUG] Extracted unique Order ID:", merchantTxnNo);
        console.log("🔍 [DEBUG] Available keys in callback:", Object.keys(callbackData));

        // Validate that we have a transaction ID
        if (!merchantTxnNo) {
            console.error("❌ [ERROR] No transaction ID found in callback payload.");
            console.error("📦 FULL CALLBACK PAYLOAD:", JSON.stringify(callbackData, null, 2));

            // Return JSON response (some gateways need 200 status to stop retrying)
            return res.status(200).json({
                success: false,
                error: "MISSING_ORDER_ID",
                message: "No order identifier found in payment callback. Please check field names.",
                receivedFields: Object.keys(callbackData)
            });
        }

        // Look up order in database (Case-Insensitive Match)
        console.log("🔍 Looking up order in database for merchantTxnNo:", merchantTxnNo);
        const order = await Order.findOne({
            merchantTxnNo: { $regex: new RegExp(`^${merchantTxnNo}$`, "i") }
        });

        if (!order) {
            console.error("❌ [ERROR] Order NOT found in database.");
            console.error("Searched for (Case-Insensitive):", merchantTxnNo);

            // Check if there are any orders at all
            const totalOrders = await Order.countDocuments();
            console.log("📊 Total orders in database:", totalOrders);

            if (totalOrders > 0) {
                const recentOrders = await Order.find().sort({ createdAt: -1 }).limit(5).select('merchantTxnNo status createdAt');
                console.log("📋 Recent orders:", JSON.stringify(recentOrders, null, 2));
            }

            return res.status(200).json({
                success: false,
                error: "ORDER_NOT_FOUND",
                message: `Order not found for transaction ID: ${merchantTxnNo}`,
                searchedFor: merchantTxnNo,
                totalOrdersInDb: totalOrders
            });
        }

        console.log("✅ Order found:", order.merchantTxnNo);
        console.log("📊 Current order status:", order.status);

        // Determine payment status from response code
        const responseCode = callbackData.responseCode || callbackData.status || callbackData.response_code;
        const responseMessage = callbackData.responseMessage || callbackData.message || callbackData.response_message || '';

        console.log("📝 Response Code:", responseCode);
        console.log("📝 Response Message:", responseMessage);

        // Map various success codes
        const successCodes = ['0', 'R1000', 'SUCCESS', 'CAPTURED', 'APPROVED', '00'];
        const isSuccess = successCodes.includes(String(responseCode).toUpperCase());

        const newStatus = isSuccess ? 'SUCCESS' : 'FAILED';
        console.log("🎯 Determined status:", newStatus);

        // Update order with payment details
        order.status = newStatus;
        order.paymentCompletedAt = new Date();

        // Store complete raw callback data
        order.rawCallbackData = callbackData;

        // Extract and save payment details
        order.paymentDetails = {
            txnReferenceNo: callbackData.txnReferenceNo || callbackData.txnRefNo || callbackData.transaction_reference,
            bankTxnId: callbackData.bankTxnId || callbackData.bank_txn_id || callbackData.bankTransactionId,
            authIdCode: callbackData.authIdCode || callbackData.auth_code || callbackData.authCode,
            txnDate: callbackData.txnDate || callbackData.transaction_date || new Date().toISOString(),
            responseCode: responseCode,
            responseMessage: responseMessage,
            paymentMode: callbackData.paymentMode || callbackData.payment_mode || callbackData.payMode,
            cardType: callbackData.cardType || callbackData.card_type,
            cardNumber: callbackData.cardNumber || callbackData.card_number || callbackData.maskedCardNumber,
            bankName: callbackData.bankName || callbackData.bank_name,
            paymentStatus: callbackData.paymentStatus || callbackData.payment_status,
            settlementDate: callbackData.settlementDate || callbackData.settlement_date
        };

        await order.save();
        console.log("💾 Order updated successfully in database");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

        // Redirect to frontend with status
        // IMPORTANT: Use the merchantTxnNo from the FOUND order object to ensure consistency
        const finalOrderId = order.merchantTxnNo;
        const frontendUrl = (process.env.FRONTEND_URL || "http://localhost:3000").trim();
        const redirectUrl = `${frontendUrl}/events?status=${newStatus}&orderId=${finalOrderId}`;

        console.log("🔄 Redirecting to:", redirectUrl);
        res.redirect(redirectUrl);

    } catch (error) {
        console.error("\n❌ CRITICAL ERROR IN PAYMENT CALLBACK:");
        console.error("Error Name:", error.name);
        console.error("Error Message:", error.message);
        console.error("Error Stack:", error.stack);
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

        // Return JSON error response
        res.status(200).json({
            success: false,
            error: "CALLBACK_PROCESSING_ERROR",
            message: "Error processing payment callback",
            details: error.message
        });
    }
};

exports.checkStatus = async (req, res) => {
    try {
        const { merchantTxnNo } = req.params;
        const payload = {
            merchantId: (process.env.ICICI_MID || "").trim(),
            aggregatorID: (process.env.ICICI_AGGREGATOR_ID || "").trim(),
            merchantTxnNo,
            originalTxnNo: merchantTxnNo,
            transactionType: "STATUS"
        };
        const minified = JSON.stringify(payload);
        const hash = generateSecureHash(payload, (process.env.ICICI_SECRET_KEY || "").trim());

        const payloadWithHash = { ...payload, secureHash: hash };
        const minifiedWithHash = JSON.stringify(payloadWithHash);

        const statusUrl = (process.env.ICICI_STATUS_URL || "https://pgpayuat.icicibank.com/tsp/pg/api/command").trim();
        const response = await postRequest(statusUrl, minifiedWithHash, {
            'Content-Type': 'application/json'
        });
        res.status(200).json({ success: true, status: response.data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Status check failed" });
    }
};

/**
 * Get order details by merchantTxnNo
 * Used by frontend to display transaction details on success page
 */
exports.getOrderDetails = async (req, res) => {
    try {
        const { merchantTxnNo } = req.params;

        console.log("🔍 Fetching order details for:", merchantTxnNo);

        // Case-insensitive lookup for frontend display
        const order = await Order.findOne({
            merchantTxnNo: { $regex: new RegExp(`^${merchantTxnNo}$`, "i") }
        });

        if (!order) {
            console.log("❌ Order NOT found in DB for display:", merchantTxnNo);
            return res.status(404).json({
                success: false,
                message: "Order not found",
                merchantTxnNo
            });
        }

        console.log("✅ Order found, returning details");

        // Return order details
        res.status(200).json({
            success: true,
            order: {
                merchantTxnNo: order.merchantTxnNo,
                amount: order.amount,
                currencyCode: order.currencyCode,
                status: order.status,
                customerName: order.customerName,
                customerEmail: order.customerEmail,
                customerMobile: order.customerMobile,
                paymentDetails: order.paymentDetails,
                paymentCompletedAt: order.paymentCompletedAt,
                createdAt: order.createdAt,
                updatedAt: order.updatedAt
            }
        });
    } catch (error) {
        console.error("❌ Error fetching order details:", error.message);
        res.status(500).json({
            success: false,
            message: "Error fetching order details",
            error: error.message
        });
    }
};

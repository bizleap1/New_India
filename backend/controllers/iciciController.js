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
        const { secureHash, ...payload } = req.body;
        if (!secureHash) return res.status(400).send("Unauthorized");

        const order = await Order.findOne({ merchantTxnNo: payload.merchantTxnNo });
        if (!order) return res.status(404).send("Order not found");

        order.status = (payload.responseCode === "0" || payload.responseCode === "R1000") ? 'SUCCESS' : 'FAILED';
        order.paymentDetails = payload;
        await order.save();

        res.redirect(`${(process.env.FRONTEND_URL || "http://localhost:3000").trim()}/events?status=${order.status}`);
    } catch (error) {
        res.status(500).send("Error processing callback");
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

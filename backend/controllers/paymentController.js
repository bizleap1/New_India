const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');
const Payment = require('../models/Payment');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'YOUR_KEY_ID',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'YOUR_KEY_SECRET'
});

exports.createOrder = async (req, res) => {
    try {
        const { amount, currency, customerDetails, bookingDetails } = req.body;

        const options = {
            amount: amount * 100, // amount in the smallest currency unit (paise for INR)
            currency: currency || 'INR',
            receipt: `receipt_${Date.now()}`
        };

        const razorpayOrder = await razorpay.orders.create(options);

        // Save order to our database (Optional for testing Razorpay initiation)
        try {
            const newOrder = new Order({
                razorpayOrderId: razorpayOrder.id,
                amount: amount,
                currency: options.currency,
                customerDetails,
                bookingDetails
            });
            await newOrder.save();
        } catch (dbError) {
            console.warn('WARNING: Order not saved to DB (Database may be disconnected):', dbError.message);
            // We still proceed so the user can test the Razorpay initiation
        }

        res.json({
            success: true,
            order: razorpayOrder
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create order',
            error: error.message
        });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'YOUR_KEY_SECRET')
            .update(body.toString())
            .digest('hex');

        const isSignatureValid = expectedSignature === razorpay_signature;

        if (isSignatureValid) {
            // Save payment details (Optional for testing)
            try {
                const payment = new Payment({
                    razorpayOrderId: razorpay_order_id,
                    razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature,
                    verified: true
                });
                await payment.save();

                // Update order status
                await Order.findOneAndUpdate(
                    { razorpayOrderId: razorpay_order_id },
                    { status: 'paid' }
                );
            } catch (dbError) {
                console.warn('WARNING: Payment details not saved to DB:', dbError.message);
            }

            res.json({
                success: true,
                message: 'Payment verified successfully'
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Invalid signature'
            });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

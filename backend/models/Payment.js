const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    // Reference to the order (merchantTxnNo)
    orderId: {
        type: String,
        required: true,
        index: true
    },
    // ICICI's transaction ID
    transactionId: {
        type: String,
        index: true
    },
    // Amount in string format (as sent by ICICI)
    amount: {
        type: String,
        required: true
    },
    // Payment status: PENDING, SUCCESS, FAILED
    status: {
        type: String,
        enum: ['PENDING', 'SUCCESS', 'FAILED'],
        default: 'PENDING',
        index: true
    },
    // Response code from ICICI (R1000 = success)
    responseCode: {
        type: String
    },
    // Response message from ICICI
    responseMessage: {
        type: String
    },
    // Full gateway response for debugging
    gatewayResponse: {
        type: mongoose.Schema.Types.Mixed,
        default: null
    },
    // Payment method details
    paymentMode: String,
    cardType: String,
    cardNumber: String,
    bankName: String,
    // Customer details
    customerName: String,
    customerEmail: String,
    customerMobile: String,
    // Timestamps
    paymentCompletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true });

// Add compound index for common queries
paymentSchema.index({ orderId: 1, status: 1 });
paymentSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Payment', paymentSchema);

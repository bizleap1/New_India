const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    merchantTxnNo: {
        type: String,
        required: true,
        unique: true,
        index: true // Add index for faster lookups
    },
    amount: {
        type: String,
        required: true
    },
    currencyCode: {
        type: String,
        default: "356"
    },
    customerName: String,
    customerEmail: String,
    customerMobile: String,
    status: {
        type: String,
        enum: ['PENDING', 'SUCCESS', 'FAILED', 'CANCELLED'],
        default: 'PENDING',
        index: true // Index for filtering by status
    },
    paymentDetails: {
        txnReferenceNo: String,
        bankTxnId: String,
        authIdCode: String,
        txnDate: String,
        responseCode: String,
        responseMessage: String,
        // Additional payment details
        paymentMode: String, // Card, UPI, NetBanking, etc.
        cardType: String, // Visa, Mastercard, etc.
        cardNumber: String, // Masked card number
        bankName: String,
        paymentStatus: String,
        settlementDate: String
    },
    // Store complete raw callback data for debugging and tracking
    rawCallbackData: {
        type: mongoose.Schema.Types.Mixed,
        default: null
    },
    // Track when payment was completed
    paymentCompletedAt: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// Add compound index for common queries
orderSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Order', orderSchema);

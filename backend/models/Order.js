const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    merchantTxnNo: {
        type: String,
        required: true,
        unique: true
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
        default: 'PENDING'
    },
    paymentDetails: {
        txnReferenceNo: String,
        bankTxnId: String,
        authIdCode: String,
        txnDate: String,
        responseCode: String,
        responseMessage: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

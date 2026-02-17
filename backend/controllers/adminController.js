const Order = require('../models/Order');

/**
 * Fetch all payments with filtering and analytics
 * GET /api/payment/admin/all
 */
exports.getAllPayments = async (req, res) => {
    try {
        const { status, search } = req.query;
        let query = {};

        // Filter by status if provided
        if (status && status !== 'All') {
            query.status = status;
        }

        // Search by merchantTxnNo or customer details
        if (search) {
            query.$or = [
                { merchantTxnNo: { $regex: search, $options: 'i' } },
                { customerName: { $regex: search, $options: 'i' } },
                { customerEmail: { $regex: search, $options: 'i' } },
                { 'paymentDetails.bankTxnId': { $regex: search, $options: 'i' } }
            ];
        }

        const payments = await Order.find(query).sort({ createdAt: -1 });

        // Calculate Analytics Summary
        const analytics = {
            totalPayments: payments.length,
            successfulPayments: payments.filter(p => p.status === 'SUCCESS').length,
            pendingPayments: payments.filter(p => p.status === 'PENDING').length,
            failedPayments: payments.filter(p => p.status === 'FAILED').length,
            totalRevenue: payments
                .filter(p => p.status === 'SUCCESS')
                .reduce((sum, p) => sum + parseFloat(p.amount || 0), 0)
        };

        res.status(200).json({
            success: true,
            analytics,
            payments
        });
    } catch (error) {
        console.error('Error fetching payments:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error fetching payment records',
            error: error.message
        });
    }
};

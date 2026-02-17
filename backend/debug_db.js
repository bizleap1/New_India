const mongoose = require('mongoose');
require('dotenv').config();

const Order = require('./models/Order');

async function debugOrders() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        const total = await Order.countDocuments();
        console.log(`Total orders: ${total}`);

        if (total > 0) {
            const lastOrders = await Order.find().sort({ createdAt: -1 }).limit(10);
            console.log('\nLast 10 orders:');
            lastOrders.forEach(o => {
                console.log(`- ID: ${o.merchantTxnNo}, Status: ${o.status}, CreatedAt: ${o.createdAt}`);
            });
        } else {
            console.log('No orders found in database.');
        }

        await mongoose.disconnect();
    } catch (err) {
        console.error('Debug script error:', err);
    }
}

debugOrders();

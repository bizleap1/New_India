const express = require('express');
const router = express.Router();
const iciciController = require('../controllers/iciciController');
const adminController = require('../controllers/adminController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Route to initiate payment
router.post('/initiate', iciciController.initiateSale);

// Route to handle ICICI callback (POST)
router.post('/response', iciciController.handleResponse);

// Route to check transaction status
router.get('/status/:merchantTxnNo', iciciController.checkStatus);

// Route to get order details (for success page)
router.get('/order/:merchantTxnNo', iciciController.getOrderDetails);

// ADMIN PROTECTED ROUTES
router.get('/admin/all', protect, isAdmin, adminController.getAllPayments);

module.exports = router;

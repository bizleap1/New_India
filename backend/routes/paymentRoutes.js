const express = require('express');
const router = express.Router();
const iciciController = require('../controllers/iciciController');

// Route to initiate payment
router.post('/initiate', iciciController.initiateSale);

// Route to handle ICICI callback (POST)
router.post('/response', iciciController.handleResponse);

// Route to check transaction status
router.get('/status/:merchantTxnNo', iciciController.checkStatus);

module.exports = router;

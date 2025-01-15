const express = require('express');
const router = express.Router();
const { createPayment, releasePayment } = require('../controllers/paymentController');

// Route to create a new blockchain payment
router.post('/create-payment', createPayment);

// Route to release payment to the traveler
router.post('/release-payment', releasePayment);

module.exports = router;

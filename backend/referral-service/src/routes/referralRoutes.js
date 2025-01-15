const express = require('express');
const { sendReferral, trackReferral } = require('../controllers/referralController');
const router = express.Router();

// Route to send a referral
router.post('/send', sendReferral);

// Route to track the status of a referral
router.get('/track/:id', trackReferral);

module.exports = router;

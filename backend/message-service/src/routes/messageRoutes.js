const express = require('express');
const router = express.Router();

// Define message routes if necessary
router.get('/', (req, res) => {
  res.send('Messaging Service is running!');
});

module.exports = router;

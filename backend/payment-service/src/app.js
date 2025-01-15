const express = require('express');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();  // Load environment variables from .env file

const app = express();
app.use(express.json());  // Parse JSON requests

// Routes
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});

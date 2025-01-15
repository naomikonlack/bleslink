const express = require('express');
const referralRoutes = require('./routes/referralRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/referrals', referralRoutes);

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => {
  console.log(`Referral Service running on port ${PORT}`);
});

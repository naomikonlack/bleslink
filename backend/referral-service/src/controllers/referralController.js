const sendReferral = (req, res) => {
    const { email, shipmentId } = req.body;
    // Logic to send referral (e.g., via email or SMS)
    res.status(200).json({ success: true, message: 'Referral sent!' });
  };
  
  const trackReferral = (req, res) => {
    const { id } = req.params;
    // Logic to track referral status (e.g., referral status in database)
    res.status(200).json({ success: true, status: 'Referral successful!' });
  };
  
  module.exports = { sendReferral, trackReferral };
  
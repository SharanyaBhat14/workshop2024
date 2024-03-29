// Route to handle payment callback
router.post('/payment-callback', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    // Validate signature
    const hmac = crypto.createHmac('sha256', 'process.env.key_secret');
    hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
    const calculatedSignature = hmac.digest('hex');

    if (calculatedSignature === razorpay_signature) {
        // Signature matched, payment successful
        // Handle further actions like updating order status, etc.
        res.json({ status: 'success' });
    } else {
        // Signature mismatch, payment failed
        res.status(400).json({ error: 'Signature mismatch' });
    }
});

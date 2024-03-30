// const Razorpay = require ('razorpay');

// const razorpay = new Razorpay({
//     key_id: 'process.env.key_id',
//     key_secret: 'process.env.key_secret'
// });

// // Route to create a payment order
// router.post('/initiate', async (req, res) => {
//     const amount = req.body.amount; // Amount in paise (e.g., ₹100 = 10000 paise)

//     const options = {
//         amount: amount,
//         currency: 'INR',
//         receipt: 'receipt_order_1',
//         payment_capture: 1 // Auto-capture payment
//     };

//     try {
//         const response = await razorpay.orders.create(options);
//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

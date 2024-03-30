const Participant=require("../models/participantModel")

const register = async (req, res) => {
    const { teamName,m1Name,m1Email,m1PhoneNumber,m1Usn,m2Name,m2PhoneNumber,m3Name,m3PhoneNumber,m4Name,m4PhoneNumber} = req.body;
    const oldParticipant = await Participant.findOne({ m1Email });
    if (oldParticipant) {
    return res.status(401).json({ message: "User already exists !!!" });
    }

    try {
    const newParticipant = new Participant({
        teamName,
        m1Name,
        m1Email,
        m1PhoneNumber,
        m1Usn,
        m2Name,
        m2PhoneNumber,
        m3Name,
        m3PhoneNumber,
        m4Name,
        m4PhoneNumber
    });
    const student = await newParticipant.save();
    if (student) {
        return res.status(200).json({
        message:"Registered successfully !!!"
        });
    }
    } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
    }
};

const participantControllers ={
    register
}

module.exports=participantControllers;







// const Razorpay = require('razorpay');
// const Participant = require("../models/participantModel");

// const razorpay = new Razorpay({
//     key_id: 'process.env.key_id',
//     key_secret: 'process.env.key_secret'
// });

// const register = async (req, res) => {
//     // Create a new participant instance
//     const newParticipant = new Participant(req.body);

//     try {
//         // Save the participant data to the database
//         const savedParticipant = await newParticipant.save();

//         if (!savedParticipant) {
//             throw new Error('Failed to save participant data');
//         }

//         // Create Razorpay order
//         const orderOptions = {
//             amount: AMOUNT_IN_PAISE, // Amount in paise (e.g., 1000 for ₹10)
//             currency: 'INR',
//             receipt: 'receipt_order_' + savedParticipant._id // Unique receipt ID for the order
//         };

//         const razorpayOrder = await razorpay.orders.create(orderOptions);

//         // Send Razorpay order ID to the client
//         res.json({ orderId: razorpayOrder.id });
//     } catch (error) {
//         console.error(error);
//         return res.status(400).json({ message: error.message });
//     }
// };

// const verifyPayment = async (req, res) => {
//     const { orderId, paymentId, formData } = req.body;

//     try {
//         // Verify payment with Razorpay
//         const payment = await razorpay.payments.fetch(paymentId);

//         if (payment.order_id !== orderId || payment.status !== 'captured') {
//             throw new Error('Payment verification failed');
//         }

//         // If payment is successful, save the participant data to the database
//         // Get participant ID from receipt
//         const participantId = orderId.split('_')[2]; // Assuming the receipt format is "receipt_order_ParticipantID"
//         const participant = await Participant.findById(participantId);

//         if (!participant) {
//             throw new Error('Participant not found');
//         }

//         // Save participant data to database
//         // Update participant's payment status if needed
//         // Example: participant.paymentStatus = 'paid';
//         Object.assign(participant, formData); // Update participant data
//         await participant.save();

//         res.json({ message: 'Payment successful. Data saved.' });
//     } catch (error) {
//         console.error(error);
//         return res.status(400).json({ message: error.message });
//     }
// };

// module.exports = { register, verifyPayment };
// //createOrder
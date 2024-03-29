const Participant=require("../models/participantModel")

const register = async (req, res) => {
    const { name, email ,phoneNumber,usn} = req.body;
    const oldParticipant = await Participant.findOne({ email });
    if (oldParticipant) {
    return res.status(401).json({ message: "User already exists !!!" });
    }

    try {
    const newParticipant = new Participant({
        name,
        email,
        phoneNumber,
        usn
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
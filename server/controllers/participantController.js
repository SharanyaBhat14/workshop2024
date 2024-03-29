const Participant=require("../models/participantModel")

const register = async (req, res) => {
    const { teamName,m1Name,m1Email,m1PhoneNumber,m1Usn,m2Name,m2PhoneNumber,m3Name,m3PhoneNumber,m4Name,m4PhoneNumber} = req.body;
    // const oldParticipant = await Participant.findOne({ email });
    // if (oldParticipant) {
    // return res.status(401).json({ message: "User already exists !!!" });
    // }

    try {
    const newParticipant = new Participant({
        teamName,
        m1Name,m1Email,
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
const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema(
{
    teamName: {
        type: String,
        required: true,
    },
    m1Name: {
        type: String,
        required: true,
    },
    m1Email: {
        type: String,
        required: true,
        unique: true,
    },
    m1PhoneNumber:{
        type:String,
        required:true,
    },
    m1Usn:{
        type:String,
        required:true,
    },
    m2Name: {
        type: String,
        required: true,
    },
    m2PhoneNumber: {
        type: String,
        required: true,
    },
    m3Name: {
        type: String,
        required: true,
    },
    m3PhoneNumber: {
        type: String,
        required: true,
    },
    m4Name: {
        type: String,
        required: true,
    },
    m4PhoneNumber: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Participant", participantSchema);
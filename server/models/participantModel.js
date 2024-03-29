const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    usn:{
        type:String,
        required:true,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Participant", participantSchema);
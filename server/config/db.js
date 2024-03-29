const mongoose = require("mongoose");

const connectDb = async () => {
try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    console.log("MONGODB is connected".underline);
} catch (error) {
    console.log(error);
    process.exit(1);
}
};

module.exports = connectDb;
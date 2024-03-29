require("dotenv").config();
require("colors");

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 5000;

const connectDb = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/participant", require("./routes/participantRoute"));


app.use(express.static(path.join(__dirname, "../client")));
app.get("*", function (req, res) {
res.sendFile(path.join(__dirname, "../client/index.html"));
});

connectDb()
.then(() => {
    app.listen(port, () =>
    console.log(`Server is up and running on the port ${port}`.underline)
    );
})
.catch((err) => console.log(err));
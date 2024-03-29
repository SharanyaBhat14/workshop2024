const express = require("express");
const router = express.Router();
const participantControllers = require("../controllers/participantController");

router.post("/register", participantControllers.register);

module.exports = router;

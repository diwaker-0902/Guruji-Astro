const express = require("express");
const {
  assignUserToAstrologer,
} = require("../controllers/distributionController");

const router = express.Router();

// Route to assign a user to an astrologer dynamically
router.post("/assign", assignUserToAstrologer);

module.exports = router;

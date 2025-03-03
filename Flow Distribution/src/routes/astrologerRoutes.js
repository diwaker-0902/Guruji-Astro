const express = require("express");
const {
  getAstrologers,
  getAstrologerById,
  createAstrologer,
  updateAstrologer,
  deleteAstrologer,
} = require("../controllers/astrologerController");

const router = express.Router();

router.get("/", getAstrologers); // Fetch all astrologers
router.get("/:id", getAstrologerById); // Fetch a single astrologer by ID
router.post("/", createAstrologer); // Create a new astrologer
router.put("/:id", updateAstrologer); // Update an astrologer by ID
router.delete("/:id", deleteAstrologer); // Delete an astrologer by ID

module.exports = router;

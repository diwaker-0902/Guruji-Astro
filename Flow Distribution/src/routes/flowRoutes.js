const express = require("express");
const { getFlows, createFlow } = require("../controllers/flowController");

const router = express.Router();

router.get("/", getFlows); // Fetch all flows
router.post("/", createFlow); // Create a new flow

module.exports = router;

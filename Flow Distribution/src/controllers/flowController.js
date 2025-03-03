const Flow = require("../models/flow");

// Get all flows
const getFlows = async (req, res) => {
  try {
    const flows = await Flow.find();
    res.status(200).json(flows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single flow by ID
const getFlowById = async (req, res) => {
  try {
    const flow = await Flow.findById(req.params.id);
    if (!flow) return res.status(404).json({ message: "Flow not found" });
    res.status(200).json(flow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new flow
const createFlow = async (req, res) => {
  try {
    const newFlow = new Flow(req.body);
    const savedFlow = await newFlow.save();
    res.status(201).json(savedFlow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a flow
const updateFlow = async (req, res) => {
  try {
    const updatedFlow = await Flow.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFlow)
      return res.status(404).json({ message: "Flow not found" });
    res.status(200).json(updatedFlow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a flow
const deleteFlow = async (req, res) => {
  try {
    const deletedFlow = await Flow.findByIdAndDelete(req.params.id);
    if (!deletedFlow)
      return res.status(404).json({ message: "Flow not found" });
    res.status(200).json({ message: "Flow deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFlows, getFlowById, createFlow, updateFlow, deleteFlow };

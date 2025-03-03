const Astrologer = require("../models/astrologer");

// Get all of the astrologers
const getAstrologers = async (req, res) => {
  try {
    const astrologers = await Astrologer.find();
    res.status(200).json(astrologers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single astrologer by ID
const getAstrologerById = async (req, res) => {
  try {
    const astrologer = await Astrologer.findById(req.params.id);
    if (!astrologer) {
      return res.status(404).json({ message: "Astrologer not found" });
    }
    res.status(200).json(astrologer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new astrologer
const createAstrologer = async (req, res) => {
  try {
    const { name, specialization, rating, availability } = req.body;

    // Validate required fields
    if (!name || !specialization) {
      return res
        .status(400)
        .json({
          message:
            "Please provide all required fields: name and specialization",
        });
    }

    // Create and save astrologer
    const newAstrologer = new Astrologer({
      name,
      specialization,
      rating: rating ?? 0, // Default rating to 0 if we not provide
      availability: availability ?? true, // Default to true if not provided
    });

    const savedAstrologer = await newAstrologer.save();
    res.status(201).json(savedAstrologer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an astrologer
const updateAstrologer = async (req, res) => {
  try {
    const { name, specialization, rating, availability } = req.body;

    // Validate required fields
    if (!name || !specialization) {
      return res
        .status(400)
        .json({
          message:
            "Please provide all required fields: name and specialization",
        });
    }

    const updatedAstrologer = await Astrologer.findByIdAndUpdate(
      req.params.id,
      { name, specialization, rating, availability },
      { new: true, runValidators: true } // Return updated document & validate fields
    );

    if (!updatedAstrologer) {
      return res.status(404).json({ message: "Astrologer not found" });
    }

    res.status(200).json(updatedAstrologer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an astrologer
const deleteAstrologer = async (req, res) => {
  try {
    const deletedAstrologer = await Astrologer.findByIdAndDelete(req.params.id);
    if (!deletedAstrologer) {
      return res.status(404).json({ message: "Astrologer not found" });
    }
    res.status(200).json({ message: "Astrologer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAstrologers,
  getAstrologerById,
  createAstrologer,
  updateAstrologer,
  deleteAstrologer,
};

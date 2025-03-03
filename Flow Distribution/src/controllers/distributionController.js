const User = require("../models/user");
const Astrologer = require("../models/astrologer");
const Flow = require("../models/flow");
const Distribution = require("../models/distribution");

const assignUserToAstrologer = async (req, res) => {
  try {
    const { userId } = req.body;

    // Fetch all astrologers sorted by least assigned users
    let astrologers = await Astrologer.find().sort({ totalAssignedUsers: 1 });

    if (astrologers.length === 0) {
      return res.status(400).json({ message: "No astrologers available!" });
    }

    // Pick the astrologer with the least assigned users
    let selectedAstrologer = astrologers[0];

    console.log("Selected Astrologer:", selectedAstrologer);

    // Assign the astrologer to the user
    await User.findByIdAndUpdate(userId, {
      assignedAstrologer: selectedAstrologer._id,
    });

    // Update astrologer's assigned user count
    await Astrologer.findByIdAndUpdate(selectedAstrologer._id, {
      $inc: { totalAssignedUsers: 1 },
    });

    // Log the assignment in Flows model
    await Flow.create({ userId, astrologerId: selectedAstrologer._id });

    // Update Distribution model (track total assigned users)
    console.log(
      "Updating Distribution for astrologerId:",
      selectedAstrologer._id
    );

    await Distribution.findOneAndUpdate(
      { astrologerId: selectedAstrologer._id }, // Query must match schema
      {
        $set: { astrologerId: selectedAstrologer._id }, // Ensuring that astrologerId is always set
        $inc: { totalUsersAssigned: 1 },
      },
      { upsert: true, new: true, strict: false } // here we are avoiding the schema strict errors
    );

    res.status(200).json({
      message: "User assigned successfully",
      astrologer: selectedAstrologer,
    });
  } catch (error) {
    console.error("Error assigning user:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { assignUserToAstrologer };

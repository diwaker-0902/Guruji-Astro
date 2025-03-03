const mongoose = require("mongoose");

const astrologerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    availability: {
      type: Boolean, // true for online, false for offline
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Astrologer", astrologerSchema);

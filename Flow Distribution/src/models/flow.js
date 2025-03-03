const mongoose = require("mongoose");

const flowSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    astrologerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Astrologer",
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    status: {
      type: String,
      default: "pending"
    }, // Track the status of a flow
  },
  { timestamps: true } // `createdAt` and `updatedAt`
);

module.exports = mongoose.model("Flow", flowSchema);

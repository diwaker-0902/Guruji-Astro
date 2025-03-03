const mongoose = require("mongoose");

const distributionSchema = new mongoose.Schema(
  {
    flowId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flow",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      default: "pending", // e.g., 'paid', 'pending', ''failed'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Distribution", distributionSchema);

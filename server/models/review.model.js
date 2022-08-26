const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    blog_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "blogs",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("reviews", reviewSchema);

const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    text: { type: String, required: true },

    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("blogs", blogSchema);

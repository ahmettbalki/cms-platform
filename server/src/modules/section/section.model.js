const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    pageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    data: {
      type: Object,
      default: {},
    },

    order: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Section", sectionSchema);

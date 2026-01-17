const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      unique: true,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    navbarSectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      default: null,
    },

    footerSectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Site", SiteSchema);

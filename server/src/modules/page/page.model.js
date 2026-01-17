const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema(
  {
    siteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Site",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    sections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],

    seo: {
      title: String,
      description: String,
    },

    order: {
      type: Number,
      default: 0,
    },

    isHomePage: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
    type: Boolean,
    default: false,
    },
  },
  { timestamps: true }
);

PageSchema.index({ siteId: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model("Page", PageSchema);

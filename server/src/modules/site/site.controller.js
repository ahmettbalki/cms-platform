const Site = require("./site.model");
const Section = require("../section/section.model");

exports.createSite = async (req, res) => {
  try {
    const site = await Site.create({
      ...req.body,
      ownerId: req.user.userId,
    });

    res.status(201).json({ success: true, data: site });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


exports.attachNavbar = async (req, res) => {
  try {
    const { siteId, sectionId } = req.body;

    const section = await Section.findById(sectionId);
    if (!section || section.type !== "navbar") {
      return res.status(400).json({
        success: false,
        message: "Invalid navbar section",
      });
    }

    const site = await Site.findByIdAndUpdate(
      siteId,
      { navbarSectionId: sectionId },
      { new: true }
    );

    res.json({ success: true, data: site });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.attachFooter = async (req, res) => {
  try {
    const { siteId, sectionId } = req.body;

    const section = await Section.findById(sectionId);
    if (!section || section.type !== "footer") {
      return res.status(400).json({
        success: false,
        message: "Invalid footer section",
      });
    }

    const site = await Site.findByIdAndUpdate(
      siteId,
      { footerSectionId: sectionId },
      { new: true }
    );

    res.json({ success: true, data: site });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


exports.getMySites = async (req, res) => {
  try {
    const sites = await Site.find({ ownerId: req.user.userId });
    res.json({ success: true, data: sites });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

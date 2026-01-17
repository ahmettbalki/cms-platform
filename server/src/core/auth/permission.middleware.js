const Site = require("../../modules/site/site.model");

module.exports = (allowedRoles = []) => {
  return async (req, res, next) => {
    const userId = req.user.userId;
    const siteId = req.params.id || req.body.siteId;

    const site = await Site.findById(siteId);
    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }

    let role = null;

    if (site.ownerId.toString() === userId) {
      role = "owner";
    } else if (site.admins.includes(userId)) {
      role = "admin";
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({
        success: false,
        message: "Permission denied",
      });
    }

    req.siteRole = role;
    next();
  };
};

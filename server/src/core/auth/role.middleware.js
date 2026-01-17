const ApiError = require("../ApiError");
const Site = require("../../modules/site/site.model");

module.exports = (allowedRoles = []) => {
  return async (req, res, next) => {
    const userId = req.user.userId;
    const siteId =
      req.body.siteId || req.params.siteId || req.query.siteId;

    if (!siteId) {
      throw new ApiError(400, "SiteId is required for role check");
    }

    const site = await Site.findById(siteId);

    if (!site) {
      throw new ApiError(404, "Site not found");
    }

    // OWNER her şeye yetkili
    if (site.ownerId.toString() === userId) {
      return next();
    }

    const member = site.members.find(
      (m) => m.userId.toString() === userId
    );

    if (!member || !allowedRoles.includes(member.role)) {
      throw new ApiError(403, "Permission denied");
    }

    next();
  };
};

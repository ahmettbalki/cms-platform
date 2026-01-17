const Site = require("../site/site.model");
const Page = require("../page/page.model");
const Section = require("../section/section.model");
const ApiResponse = require("../../core/ApiResponse");
const ApiError = require("../../core/ApiError");
const asyncHandler = require("../../core/asyncHandler");

exports.getSiteBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;


  const site = await Site.findOne({ slug, status: "published" });
  if (!site) {
    throw new ApiError(404, "Site not found");
  }

 
  const pages = await Page.find({
    siteId: site._id,
    status: "published",
  }).sort({ order: 1 });


  const pageIds = pages.map(p => p._id);

  const sections = await Section.find({
    pageId: { $in: pageIds },
  }).sort({ order: 1 });


  const pagesWithSections = pages.map(page => ({
    ...page.toObject(),
    sections: sections.filter(
      s => s.pageId.toString() === page._id.toString()
    ),
  }));

  return ApiResponse.success(res, {
    site,
    pages: pagesWithSections,
  });
});

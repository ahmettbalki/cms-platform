const Section = require("./section.model");
const Page = require("../page/page.model");
const ApiResponse = require("../../core/ApiResponse");
const ApiError = require("../../core/ApiError");
const asyncHandler = require("../../core/asyncHandler");
const SectionService = require("../../core/section/section.service");


exports.createSection = asyncHandler(async (req, res) => {
  const { pageId, type, data } = req.body;

  const page = await Page.findById(pageId);
  if (!page) {
    throw new ApiError(404, "Page not found");
  }

  const lastSection = await Section.find({ pageId })
    .sort({ order: -1 })
    .limit(1);

  const order = lastSection.length ? lastSection[0].order + 1 : 0;

  const section = await SectionService.createSection({
    pageId,
    type,
    data,
    order,
  });

  return ApiResponse.created(res, section, "Section created");
});

exports.reorderSections = asyncHandler(async (req, res) => {
  const { pageId, sections } = req.body;

  if (!pageId || !Array.isArray(sections)) {
    throw new ApiError(400, "Invalid payload");
  }

  await SectionService.reorderSections(pageId, sections);

  return ApiResponse.success(res, null, "Sections reordered");
});

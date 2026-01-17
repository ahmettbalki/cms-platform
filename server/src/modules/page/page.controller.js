const Page = require("./page.model");
const ApiResponse = require("../../core/ApiResponse");
const ApiError = require("../../core/ApiError");
const asyncHandler = require("../../core/asyncHandler");


exports.createPage = asyncHandler(async (req, res) => {
  const { siteId } = req.params;
  const userId = req.user.userId;

  const { title, slug, content, status } = req.body;

  if (!title || !slug) {
    throw new ApiError(400, "Title and slug are required");
  }

  const existingPage = await Page.findOne({ siteId, slug });
  if (existingPage) {
    throw new ApiError(400, "Slug already exists in this site");
  }

  const page = await Page.create({
    siteId,
    title,
    slug,
    content,
    status,
    createdBy: userId,
  });

  return ApiResponse.created(res, page, "Page created");
});


exports.getPagesBySite = asyncHandler(async (req, res) => {
  const { siteId } = req.params;

  const pages = await Page.find({ siteId }).sort({ createdAt: -1 });

  return ApiResponse.success(res, pages, "Pages fetched");
});


exports.getPageById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const page = await Page.findById(id);

  if (!page) {
    throw new ApiError(404, "Page not found");
  }

  return ApiResponse.success(res, page, "Page fetched");
});


exports.updatePage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const page = await Page.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!page) {
    throw new ApiError(404, "Page not found");
  }

  return ApiResponse.success(res, page, "Page updated");
});

exports.deletePage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const page = await Page.findByIdAndDelete(id);

  if (!page) {
    throw new ApiError(404, "Page not found");
  }

  return ApiResponse.success(res, null, "Page deleted");
});

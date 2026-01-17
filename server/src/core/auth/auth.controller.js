const authService = require("./auth.service");
const ApiResponse = require("../../core/ApiResponse");
const asyncHandler = require("../../core/asyncHandler");

exports.register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body);
  ApiResponse.created(res, result, "User registered");
});

exports.login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);
  ApiResponse.success(res, result, "Login successful");
});

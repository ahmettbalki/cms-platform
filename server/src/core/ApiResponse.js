class ApiResponse {
  static success(res, data, message = "Success", statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static created(res, data, message = "Created") {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }
}

module.exports = ApiResponse;

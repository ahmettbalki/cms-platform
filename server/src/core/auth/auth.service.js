const bcrypt = require("bcryptjs");
const User = require("./user.model");
const ApiError = require("../../core/ApiError");
const { signToken } = require("../../core/auth/token");

exports.register = async (data) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) {
    throw new ApiError(400, "Email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    email: data.email,
    password: hashedPassword,
    name: data.name,
  });

  const token = signToken({ userId: user._id });

  return { user, token };
};

exports.login = async (data) => {
  const user = await User.findOne({ email: data.email }).select("+password");
  if (!user) {
    throw new ApiError(400, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throw new ApiError(400, "Invalid credentials");
  }

  const token = signToken({ userId: user._id });

  return { user, token };
};

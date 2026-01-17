const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./core/auth/auth.routes");
const ApiError = require("./core/ApiError");
const siteRoutes = require("./modules/site/site.routes");
const pageRoutes = require("./modules/page/page.routes");
const sectionRoutes = require("./modules/section/section.routes");
const publicRoutes = require("./modules/public/public.routes");




app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sites", siteRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/public", publicRoutes);



app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running 🚀" });
});

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

module.exports = app;

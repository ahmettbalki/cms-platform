const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running 🚀" });
});

module.exports = app;

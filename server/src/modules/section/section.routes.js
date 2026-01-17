const express = require("express");
const router = express.Router();

const sectionController = require("./section.controller");
const authMiddleware = require("../../core/auth/auth.middleware");


router.post(
  "/",
  authMiddleware,
  sectionController.createSection
);

router.patch(
  "/reorder",
  authMiddleware,
  sectionController.reorderSections
);

module.exports = router;

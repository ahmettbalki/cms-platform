const express = require("express");
const router = express.Router();
const controller = require("./public.controller");

router.get("/sites/:slug", controller.getSiteBySlug);

module.exports = router;

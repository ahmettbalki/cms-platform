const router = require("express").Router();
const controller = require("./site.controller");
const auth = require("../../core/auth/auth.middleware");
const permission = require("../../core/auth/permission.middleware");

router.post("/", auth, controller.createSite);

router.get("/my", auth, controller.getMySites);

router.post(
  "/attach-navbar",
  auth,
  permission("owner"),
  controller.attachNavbar
);

router.post(
  "/attach-footer",
  auth,
  permission("owner"),
  controller.attachFooter
);

module.exports = router;

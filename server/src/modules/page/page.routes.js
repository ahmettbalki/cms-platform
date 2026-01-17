const express = require("express");
const router = express.Router({ mergeParams: true });

const pageController = require("./page.controller");
const auth = require("../../core/auth/auth.middleware");
const role = require("../../core/auth/role.middleware");


router.get(
  "/",
  auth,
  role(["ADMIN", "EDITOR"]),
  pageController.getPagesBySite
);


router.post(
  "/",
  auth,
  role(["ADMIN", "EDITOR"]),
  pageController.createPage
);


router.get(
  "/:id",
  auth,
  role(["ADMIN", "EDITOR"]),
  pageController.getPageById
);


router.put(
  "/:id",
  auth,
  role(["ADMIN", "EDITOR"]),
  pageController.updatePage
);


router.delete(
  "/:id",
  auth,
  role(["ADMIN"]),
  pageController.deletePage
);

module.exports = router;

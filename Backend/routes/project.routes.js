const express = require("express");
const controller = require("../controllers/project.controller");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:projectId", controller.getById);
router.get("/club/:clubId", controller.getByClub);
router.get("/tag/:tagId", controller.getByTag);

router.post("/:projectId", controller.editById);

module.exports = router;

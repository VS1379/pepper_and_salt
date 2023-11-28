const express = require("express");
const router = express.Router();
const controller = require("../controllers/detalleMenuController");

router.get("/", controller.detalleMenu);

router.get("/:id", controller.detalleMenuId);

module.exports = router;

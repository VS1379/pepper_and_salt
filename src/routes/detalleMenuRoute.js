const express = require("express");
const route = express.Router();
const { detalleMenu } = require("../controllers/detalleMenuController");

route.get("/detalleMenu", detalleMenu);

module.exports = route;

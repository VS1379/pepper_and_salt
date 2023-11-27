const express = require("express");
const route = express.Router();
const { detalleMenu } = require("../controllers/detalleMenuController");

route.get("/", detalleMenu);
route.get("/detalleMenu/", detalleMenu);
route.get("/detalleMenu/id ", detalleMenu);

module.exports = route;

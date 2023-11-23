const express = require("express")
const route = express.Router();
const {index} = require("../controllers/indexController")

route.get("/", index);
route.get("/index", index);

module.exports = route;
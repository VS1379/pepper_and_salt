const listaplatos = require("../database/listaplatos")
const controller = {
  detalleMenu: (req, res) => {
    res.render("detalleMenu");
  },
  detalleMenu: (req, res) => {
    res.render("detalleMenu", listaplatos);
  },
};
module.exports = controller;

const listaPlatos = require("../database/listaplatos");
const controller = {
  detalleMenu: (req, res) => {
    res.render("detalleMenu");
  },
  detalleMenuId: (req, res) => {
    const plato = listaPlatos.find((product) => product.id == req.params.id);
    if (plato) {
      return res.render("detalleMenu", { plato });
    }
    return res.send("El producto no existe");
  },
};
module.exports = controller;

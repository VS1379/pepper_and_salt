const platos = require("../database/listaplatos");

const controller = {
  index: (req, res) => {
    res.render("index", { platos });
  },
};
module.exports = controller;

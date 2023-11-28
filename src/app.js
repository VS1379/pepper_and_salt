const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRoutes");
const detalleMenuRouter = require("./routes/detalleMenuRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/detalleMenu", detalleMenuRouter);

const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Server Runing in http://localhost:${port}`);
});

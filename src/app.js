const express = require("express");
const path = require("path");
const indexRoute = require("./routes/indexRoute");

const app = express();
const port = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, "../public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Server Runing in http://localhost:${port}`);
});

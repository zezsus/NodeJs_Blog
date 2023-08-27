const path = require("path");
const express = require("express");
const morgan = require("morgan");
var handlebars = require("express-handlebars");
const app = express();
const port = 8080;

//Http loger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views\\"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("PATH: ", path.join(__dirname, "resources/views"));
});

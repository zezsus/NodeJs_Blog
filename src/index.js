const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const sass = require("node-sass");
const app = express();
const port = 8080;

const route = require("./routes");
const db = require("./config/db");

//connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

//Http loger
app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("PATH: ", path.join(__dirname, "resources/views"));
});

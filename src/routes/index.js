const newRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./courses");
const meRouter = require("./me");

function route(app) {
  app.use("/news", newRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);

  app.use("/:slug", courseRouter);

  app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("");
  });
}
module.exports = route;

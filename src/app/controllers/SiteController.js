const Course = require("../models/Course");

class SiteController {
  //[GET] /home
  async home(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
      console.log(courses);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  // home(req, res) {
  //   res.render("home");
  // }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

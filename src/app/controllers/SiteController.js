const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //[GET] /home
  async home(req, res, next) {
    try {
      await Course.find({})
        .then((courses) => {
          res.render("home", {
            courses: mutipleMongooseToObject(courses),
          });
        })
        .catch(next);
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

const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  //[GET] me/store/courses
  storeCourses(req, res, next) {
    Course.find({})
      .then((course) => {
        res.render("me/store-course", {
          course: mutipleMongooseToObject(course),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();

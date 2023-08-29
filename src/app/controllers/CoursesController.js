const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CoursesController {
  //[GET] /courses/:slug
  async show(req, res, next) {
    await Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
}

module.exports = new CoursesController();

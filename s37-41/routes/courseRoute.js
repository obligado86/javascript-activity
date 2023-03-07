const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");
// route for creating a course

router.post("/", auth.verify, (req, res) => {
	courseController.addCourse(req.body).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));
});



module.exports = router;
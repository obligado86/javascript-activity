const express = require("express");
const router = express.Router();
const auth = require("../auth");

const courseController = require("../controllers/courseController");
// route for creating a course

router.post("/", auth.verify, (req, res) => {
	const verifyAdmin = auth.decode(req.headers.authorization).isAdmin;
	courseController.addCourse(req.body, verifyAdmin).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));
});

// retrieving all the courses

router.get("/all", auth.verify, (req, res) => {
	const verifyAdmin = auth.decode(req.headers.authorization)
	if (verifyAdmin.isAdmin){
		courseController.getAllCourses().then(resultFromController => res.send(resultFromController))
	} else {
		return res.send(false);
	}
});

router.get("/", (req, res) => {
	courseController.getAllActive().then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));
});

router.get("/:courseId", (req, res) => {
	console.log(req.params);
	courseController.getCourse(req.params).then(resultFromController => res.send(resultFromController));
});

router.put("/:courseId", auth.verify, (req, res) => {
	const verifyAdmin = auth.decode(req.headers.authorization);
	if(verifyAdmin.isAdmin){
		courseController.updateCourse(req.params, req.body).then(resultFromController => res.send(resultFromController))
	} else {
		res.send(false);
	}
});

// Update a course
		/*
			Steps:
			1. Create a variable "updatedCourse" which will contain the information retrieved from the request body
			2. Find and update the course using the course ID retrieved from the request params property and the variable "updatedCourse" containing the information from the request body
		*/
		// Information to update a course will be coming from both the URL parameters and the request body

router.patch("/:courseId/archive", auth.verify, (req, res) => {
	const verifyAdmin = auth.decode(req.headers.authorization);
	if(verifyAdmin.isAdmin){
		courseController.archiveCourse(req.params, req.body).then(resultFromController => res.send(resultFromController))
	} else {
		res.send(false);
	}
});


module.exports = router;
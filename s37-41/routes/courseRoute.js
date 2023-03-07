const express = require("express");
const router = express.Router();
const auth = require("../auth");

const courseController = require("../controllers/courseController");
// route for creating a course

router.post("/", auth.verify, (req, res) => {
	const VerifyAdmin = auth.decode(req.headers.authorization).isAdmin;
	courseController.addCourse(req.body, VerifyAdmin).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));
});



module.exports = router;
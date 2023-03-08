const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")
const auth = require("../auth");

router.post("/checkEmail", (req, res) => {
	// The full route to access this is "http://localhost:4000/users/checkEmail" where the "/users" was defined in our "index.js" file
	// The "then" method uses the result from the controller function and sends it back to the frontend application via the "res.send" method
	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err))
});

router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err))
});

router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));
});

router.get("/details", (req, res) => {
	/*userController.getProfile(req.body).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));*/

	// Uses the "decode" method defined in the "auth.js" file to retrieve the user information from the token passing the "token" from the request header as an argument
	const userData = auth.decode(req.headers.authorization);
	userController.getProfile({userId: userData.id}).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err))
});

router.post("/enroll", auth.verify, (req, res) => {
	let data = {
		userId: auth.decode(req.headers.authorization).id,
		courseId: req.body.courseId
	}
	const verifyAdmin = auth.decode(req.headers.authorization);
	if(verifyAdmin.isAdmin){
		res.send(false);
	} else {
		userController.enroll(data).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));
	}
	
});
// routes for user to endroll

module.exports = router;
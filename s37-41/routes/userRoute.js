const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController")

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

router.post("/details", (req, res) => {
	userController.getProfile(req.body).then(resultFromController => res.send(resultFromController)).catch(err => res.send(err));
})

module.exports = router;
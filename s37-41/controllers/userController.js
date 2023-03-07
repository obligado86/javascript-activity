// The "User" variable is defined using a capitalized letter to indicate that what we are using is the "User" model for code readability
const User = require("../models/User");
const auth = require("../auth");
const bcrypt = require("bcrypt");
// Check if the email already exists
/*
	Steps: 
		1. Use mongoose "find" method to find duplicate emails
		2. Use the "then" method to send a response back to the frontend appliction based on the result of the "find" method
*/

module.exports.checkEmailExists = (reqBody) => {
	// The result is sent back to the frontend via the "then" method found in the route file
	return User.find({email: reqBody.email}).then(result => {
		// The "find" method returns a record if a match is found
		if(result.length > 0){
			return true;
		} else {
			// No duplicate email found
			// The user is not yet registered in the database
			return false;
		}
	}).catch(err => err);
};

// User registration
		/*
			Steps:
			1. Create a new User object using the mongoose model and the information from the request body
			2. Make sure that the password is encrypted
			3. Save the new User to the database
		*/
module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		mobileNo: reqBody.mobileNo,
		// 10 is the value provided as the number of "salt" rounds that the bcrypt algorithm will run in order to encrypt the password
		password: bcrypt.hashSync(reqBody.password, 10)
	});

	return newUser.save().then(user => {
		if(user){
			return true;
		} else {
			return false;
		}
	}).catch(err => err)
};

// User authentication
	/*
		Steps:
		1. Check the database if the user email exists
		2. Compare the password provided in the login form with the password stored in the database
		3. Generate/return a JSON web token if the user is successfully logged in and return false if not
	*/

module.exports.loginUser = (reqBody) => {
	// The "findOne" method returns the first record in the collection that matches the search criteria
	// We use the "findOne" method instead of the "find" method which returns all records that match the search criteria
	return User.findOne({email: reqBody.email}).then(result => {
		if(result == null){
			return false;
		} else {
			// Creates the variable "isPasswordCorrect" to return the result of comparing the login form password and the database password
			// The "compareSync" method is used to compare a non encrypted password from the login form to the encrypted password retrieved from the database and returns "true" or "false" value depending on the result
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);
			if(isPasswordCorrect){
				// Generate an access token
				// Uses the "createAccessToken" method defined in the "auth.js" file
				// Returning an object back to the frontend application is common practice to ensure information is properly labeled and real world examples normally return more complex information represented by objects
				return {access: auth.createAccessToken(result)}
			} else {
				return false;
			}
		}
	}).catch(err => err);
};

module.exports.getProfile = (reqBody) => {
	return User.findById(reqBody.id).then(result => {
		if(!result){
			return false;
		} else {
			let userDetails = {
				"_id": result._id,
				"firstName": result.firstName,
				"lastName": result.lastName,
				"email": result.email,
				"password": "",
				"isAdmin": result.isAdmin,
				"mobileNo": result.mobileNo,
				"enrollments": result.enrollments,
				"__v": result.__v
			}
			return userDetails;
		}
	}).catch(err => err);
};
const Course = require("../models/Course");
const auth = require("../auth");
// Create a new course
		/*
			Steps:
			1. Create a new Course object using the mongoose model and the information from the request body and the id from the header
			2. Save the new Course to the database
		*/
module.exports.addCourse = (reqBody, isAdmin) => {
	if(!isAdmin) {
		return Promise.reject("Not Admin");
	} else {
		let newCourse = new Course({
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price
		});
		return newCourse.save().then(course => true).catch(err => err);
	}
}
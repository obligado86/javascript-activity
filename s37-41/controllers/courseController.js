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
		return Promise.reject(false);
	} else {
		let newCourse = new Course({
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price
		});
		return newCourse.save().then(course => true).catch(err => err);
	}
}

module.exports.getAllCourses = () => {
	return Course.find({}).then(result => result).catch(err => err);
};

module.exports.getAllActive = () => {
	return Course.find({isActive: true}).then(result => result).catch(err => err);
};

module.exports.getCourse = (reqParams) => {
	return Course.findById(reqParams.courseId).then(result => {
		return result
	}).catch(err => err);
};

module.exports.updateCourse = (reqParams, reqBody) => {
	let updateCourse = {
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price
	};
	return Course.findByIdAndUpdate(reqParams.courseId, updateCourse).then(course => true).catch(err => err);
};

module.exports.archiveCourse = (reqParams) => {
	let archiveCourse = {
		isActive: false
	}
	return Course.findByIdAndUpdate(reqParams.courseId, archiveCourse).then(course => true).catch(err => err);
};

// Archive a course
// In managing databases, it's common practice to soft delete our records and what we would implement in the "delete" operation of our application
// The "soft delete" happens here by simply updating the course "isActive" status into "false" which will no longer be displayed in the frontend application whenever all active courses are retrieved
// This allows us access to these records for future use and hides them away from users in our frontend application

// There are instances where hard deleting records is required to maintain the records and clean our databases
// The use of "hard delete" refers to removing records from our database permanently
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

module.exports.archiveCourse = (reqParams, reqBody) => {
	let archiveCourse = {
		isActive: reqBody.isActive
	}
	return Course.findByIdAndUpdate(reqParams.courseId, archiveCourse).then(course => true).catch(err => err);
}
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	name : {
		type : String,
		required : [true, "Course is required"]
	},
	decription : {
		type : String,
		required : [true, "course discription is required"]
	},
	price: {
		type : Number,
		required : [true, "Price is required"]
	},
	isActive : {
		type : Boolean,
		default : true
	},
	createdOn : {
		type : Date,
		default : new Date()
	},
	endrollees : [
		{
			userId : {
				type : String,
				required : [true, "UserId is required"]
			},
			endrolledon : {
				type: Date,
				default: new Date()
			}
		}
	]
});

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "firstName is required"]
	},
	lastName: {
		type: String,
		required: [true, "lastName is required"]
	},
	email: {
		type: String,
		required: [true, "email is required"]
	},
	password: {
		type: String,
		required: [true, "password is required"]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	mobileNo: {
		type: String,
		required: [true, "mobileNo is required"]
	},
	endrollments: [{
		courseId: {
			type: String,
			required: [true, "courseId is required"]
		},
		endrolledOn: {
			type: Date,
			default: new Date()
		},
		status: {
			type: String,
			default: "Endrolled"
		}
	}]
})

module.exports = mongoose.model("Course", courseSchema);


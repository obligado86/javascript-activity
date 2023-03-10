const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	name : {
		type : String,
		required : [true, "Course is required"]
	},
	description : {
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
	enrollees : [
		{
			userId : {
				type : String,
				required : [true, "UserId is required"]
			},
			enrolledOn : {
				type: Date,
				default: new Date()
			}
		}
	]
});


module.exports = mongoose.model("Course", courseSchema);


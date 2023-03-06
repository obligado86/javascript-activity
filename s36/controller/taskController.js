// Uses the "require" directive to allow access to the "Task" model which allows us to access Mongoose methods to perform CRUD functions
		// Allows us to use the contents of the "task.js" file in the "models" folder
// Controller function for getting all the tasks
		// Defines the functions to be used in the "taskRoute.js" file and exports these functions
const Task = require("../models/Task");

module.exports.getAllTasks = () => {
	// The "return" statement, returns the result of the Mongoose method "find" back to the "taskRoute.js" file which invokes this function when the "/tasks" routes is accessed
			// The "then" method is used to wait for the Mongoose "find" method to finish before sending the result back to the route and eventually to the client/Postman
	return Task.find({}).then(result => {

		// The "return" statement returns the result of the MongoDB query to the "result" parameter defined in the "then" method
		return result;
	}).catch(err => err);
}

module.exports.createNewTask = (reqBody) => {
	let newTask = new Task({
		name: reqBody.name
	})
	return newTask.save().then((task, error) => {
		if (error) {
			console.log(error);
			return false;
		} else {
			return task;
		}
	})
}


module.exports.deleteTask = (taskId) => {
	return Task.findByIdAndRemove(taskId).then(task => task).catch(error => error);
}

module.exports.updateTask = (taskId, newContent) => {
	return Task.findById(taskId).then((result, err) => {
		if(err){
			console.log(err);
			return err;
		} 
		result.name = newContent.name;

		return result.save().then((updatedTask, saveErr) => {
			if(saveErr) {
				console.log(saveErr);
				return false
			} else {
				return updatedTask;
			}
		})
	})
}

module.exports.getSpecificTask = (taskId) => {
	return Task.findById(taskId).then(task => task).catch(err => err)
}

module.exports.updateStatus = (taskId, newStatus) => {
	return Task.findById(taskId).then((result, err) => {
		if(err){
			console.log(err);
			return err;
		}
		result.status = newStatus.status;

		return result.save().then((updatedTask, saveErr) => {
			if(saveErr) {
				console.log(saveErr);
				return false
			} else {
				return updatedTask
			}
		})
	})
}
// Contains all the endpoints for our application
		// We separate the routes such that "app.js" only contains information on the server
		// We need to use express' Router() function to achieve this

const express = require("express");
const router = express.Router();

const taskController = require("../controller/taskController");
// Creates a Router instance that functions as a middleware and routing system
		// Allows access to HTTP method middlewares that makes it easier to create routes for our application
// The routes are responsible for defining the URIs that our client accesses and the corresponding controller functions that will be used when a route is accessed
		// They invoke the controller functions from the controller files
		// All the business logic is done in the controller

		// Route to get all the tasks
		// This route expects to receive a GET request at the URL "/tasks"
		// The whole URL is at "http://localhost:4000/tasks" this is because of the "/tasks" defined in the "index.js"

router.get("/", (req, res) => {
	taskController.getAllTasks().then(resultFromController => res.send(resultFromController));
});

router.post("/", (req, res) => {
	taskController.createNewTask(req.body).then(resultFromController => res.send(resultFromController));
});

// Route to delete a task
// This route expects to receive a DELETE request at the URL "/tasks/:id"
// The whole URL is at "http://localhost:3001/tasks/:id"
// The task ID is obtained from the URL is denoted by the ":id" identifier in the route
// The colon (:) is an identifier that helps create a dynamic route which allows us to supply information in the URL
// The word that comes after the colon (:) symbol will be the name of the URL parameter
// ":id" is a wildcard where you can put any value, it then creates a link between "id" parameter in the URL and the value provided in the URL
	// Ex. 
		// If the route is localhost:3000/tasks/1234
		// "1234" is assigned to the "id" parameter in the URL
router.delete("/:id", (req, res) => {
	taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));
})

router.put("/:id", (req, res) => {
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})

router.get("/", (req, res) => {
	taskController.getSpecificTask(req.params.id).then(resultFromController => res.send(resultFromController));
});

router.put("/:id", (req, res) => {
	taskController.updateStatus(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
});

module.exports = router;
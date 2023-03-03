// Use the "require" directive to load the express module/package
// A "module" is a software component or part of a program that contains one or more routines
// This is used to get the contents of the express package to be used by our application
// It also allows us access to methods and functions that will allow us to easily create a server

const express = require("express");

// Create an application using express
// This creates an express application and stores this in a constant called app
// In layman's terms, app is our server
const app = express();

// For our application server to run, we need a port to listen to
const port = 4000;

// Setup for allowing the server to handle data from requests
// Allows your app to read json data
// Methods used from express JS are middlewares
// Middleware is software that provides common services and capabilities to applications outside of what’s offered by the operating system
// API management is one of the common application of middlewares.
app.use(express.json());
// Allows your app to read data from forms
// By default, information received from the url can only be received as a string or an array
// By applying the option of "extended:true" this allows us to receive information in other data types such as an object which we will use throughout our application
app.use(express.urlencoded({extended: true}));

// ======================= routes ==================== //
// Express has methods corresponding to each HTTP method
// This route expects to receive a GET request at the base URI "/"
// The full base URI for our local application for this route will be at "http://localhost:3000"
// This route will return a simple message back to the client
app.get("/", (req,res) => {
	res.send("Hello World");
});

// This route expects to receive a POST request at the URI "/hello"
app.post("/hello", (req, res) => {
	// req.body contains the contents/data of the request body
	// All the properties defined in our Postman request will be accessible here as properties with the same names
	res.send(`Hello there ${req.body.firstName} ${req.body.lastName}`)
});

// An array that will store user objects when the "/signup" route is accessed
		// This will serve as our mock database
let users = [];

// This route expects to receive a POST request at the URI "/signup"
// This will create a user object in the "users" variable that mirrors a real world registration process
app.post("/signup", (req, res) => {
	console.log(req.body);

	if(req.bodyusername !== "" && req.body.password !== ""){
		users.push(req.body);
		res.send(`User ${req.body.username} sucessfully registered!`);
	} else {
		res.send("please input both username and password.")
	}
});

app.put("/change-paswword", (req, res) => {
	let message;

	for(let i = 0; i < users.length; i++){
		// If the username provided in the client/Postman and the username of the current object in the loop is the same
		if(req.body.username == users[i].username){
			users[i].password == req.body.password;

			message = `User ${req.body.username}'s password has been updated`;
			// Breaks out of the loop once a user that matches the username provided in the client/Postman is found
			break;
		} else {
			// Changes the message to be sent back by the response
			message = "User does not exist."
		}
	}
	// Sends a response back to the client/Postman once the password has been updated or if a user is not found
	res.send(message);
});

/*app.put("/change-paswword", (req, res) => {
	let message;

	users.forEach((user) => {
	    // If the username provided in the client/Postman and the username of the current object in the loop is the same
	    if (req.body.username === user.username) {
	      // Changes the password of the user found by the loop into the password provided in the client/Postman
	      user.password = req.body.password;

	      // Changes the message to be sent back by the response
	      message = `User ${req.body.username}'s password has been updated.`;
	    } else {
	    	// Changes the message to be sent back by the response
	    	message = "User does not exist.";
	    }
});*/

app.get("/home", (req,res) => {
	res.send("Welcome to the homepage");
});

app.get("/users", (req,res) => {
	res.send(users = [{username: "johndoe", password: "johndoe1234"}]);
});

users = [
{
	username: "johndoe",
	password: "johndoe1234"
},
{
	username: "ben",
	password: "benbagamo"
}
]
app.delete("/delete-user", (req,res) => {
	let message;

	for(let i = 0; i < users.length; i++){
		// If the username provided in the client/Postman and the username of the current object in the loop is the same
		if(req.body.username == users[i].username){
			users.splice(users[i], 1)

			message = `User ${req.body.username} has been deleted`;
			// Breaks out of the loop once a user that matches the username provided in the client/Postman is found
			break;
		} else if(req.body.username == "") {
			// Changes the message to be sent back by the response
			message = "User does not exist."
		} else {
			message = "No user found."
		}
	}
	// Sends a response back to the client/Postman once the password has been updated or if a user is not found
	res.send(message + users);
});



app.listen(port, () => console.log(`Server running at port:${port}`));
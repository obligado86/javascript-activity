const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose

const port = 4000;
const app = express();

//connecting to mongodb atlas
// Connect to the database by passing in your connection string, remember to replace the password and database names with actual values
		// Due to updates in Mongo DB drivers that allow connection to it, the default connection string is being flagged as an error
		// By default a warning will be displayed in the terminal when the application is run, but this will not prevent Mongoose from being used in the application
		// { newUrlParser : true } allows us to avoid any current and future errors
mongoose.connect("mongodb+srv://admin:admin123@batch-253-josephobligad.yq72isf.mongodb.net/?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"))
// If a connection error occurred, output in the console
		// console.error.bind(console) allows us to print errors in the browser console and in the terminal
		// "connection error" is the message that will display if an error is encountered

db.once("open", () => console.log("We're now connected to the cloud database: MongoDB Atlas!"));

//========================= mongoose schema =============
// Schemas determine the structure of the documents to be written in the database
		// Schemas act as blueprints to our data
		// Use the Schema() constructor of the Mongoose module to create a new Schema object
		// The "new" keyword creates a new Schema
const taskSchema = new Schema({
	name: String,
	status: {
		type: String,
		default: "pending"
	}
})

const userSchema = new Schema({
	username: String,
	password: String
})
const User = mongoose.model("User", userSchema);
// =================== models ===================
// Uses schemas and are used to create/instantiate objects that correspond to the schema
		// Models use Schemas and they act as the middleman from the server (JS code) to our database

// The variable/object "Task"can now used to run commands for interacting with our database
// "Task" is capitalized following the MVC approach for naming conventions
// Models must be in singular form and capitalized
// The first parameter of the Mongoose model method indicates the collection in where to store the data
// The second parameter is used to specify the Schema/blueprint of the documents that will be stored in the MongoDB collection
// Using Mongoose, the package was programmed well enough that it automatically converts the singular form of the model name into a plural form when creating a collection in postman
const Task = mongoose.model("Task", taskSchema);

// Setup for allowing the server to handle data from requests
// Allows your app to read json data
app.use(express.json());
// Allows your app to read data from forms
app.use(express.urlencoded({extended: true}));

// ===================== creation of todo list routes ===
// Business Logic
/*
1. Add a functionality to check if there are duplicate tasks
	- If the task already exists in the database, we return an error
	- If the task doesn't exist in the database, we add it in the database
2. The task data will be coming from the request's body
3. Create a new Task object with a "name" field/property
4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
*/

app.post("/task", (req, res) => {
	// Check if there are duplicate tasks
	// "findOne" is a Mongoose method that acts similar to "find" of MongoDB
	// findOne() returns the first document that matches the search criteria
	// If there are no matches, the value of result is null
	// "err" is a shorthand naming convention for errors
	Task.findOne({name: req.body.name}).then(result => {
		/*if(err) {
			return console.log(err)
		}
		console.log(result)*/
		if(result != null && result.name == req.body.name) {
			return res.send("Duplicate task found")
		} else {
			// creates a new task and save it to the database
			let newTask = new Task({
				name: req.body.name
			});
/*
			newTask.save().then((saveTask, err) => {
				if(err){
					return console.log(err);
				} else {
					return res.status(201).send('New task created');
				}
			});*/

			//.then and .catch chain:
			//.then() is used to handle the proper result/returned value of a function. If the function properly returns a value, we can run a separate function to handle it.
			//.catch() is used to handle/catch the error from the use of a function. So that if there is an error, we can properly handle it separate from the result.

			newTask.save()
				.then(result => res.send(result))
				.catch(error => res.send(error));
		}
	}).catch(error => res.send(error));
})


app.get("/task", (req, res) => {
	Task.find({})
	.then(result => res.send(result))
	.catch(error => res.send(error))
});


/*app.post("/signup", (req, res) => {
	const { body } = req;
	console.log(body)
	User.create(body).then(result => res.send("user added"));
	/*User.findone({username: req.body.username, req.b})
	.then(result => res.send(result))
	.catch(error => res.send(error))
});*/

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  //check if duplicate
  //!username = not username or username === null or fals undefined
  User.findOne({ username, password })
    .then((result) => {
      if ((req.body.username === "" || req.body.username === undefined) || (req.body.password === "" || req.body.password === undefined)) {
          return res.send(400, "BOTH username and Password must be provided.");
      } else if (result) {
        return res.send(400, "Duplicate username found");
      } else {
        User.create({ username, password });
        return res.send(201, "New user registered");
      }
    })
    .catch((error) => res.send(404, error));
});


app.listen(port, () => {
	console.log(`server running at localhost:${port}`)
});

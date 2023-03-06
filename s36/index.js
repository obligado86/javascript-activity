const express = require("express");
const mongoose = require("mongoose");

const taskRoute = require("./routes/taskRoute");

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://admin:admin123@batch-253-josephobligad.yq72isf.mongodb.net/s36?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"))
// If a connection error occurred, output in the console
		// console.error.bind(console) allows us to print errors in the browser console and in the terminal
		// "connection error" is the message that will display if an error is encountered

db.once("open", () => console.log("We're now connected to the cloud database: MongoDB Atlas!"));

// This allows us to use all the routes defined in "taskRoute.js"
app.use("/tasks", taskRoute);

if(require.main === module){
	app.listen(port, () => console.log(`server running at local port ${port}`));
}

module.exports = app;
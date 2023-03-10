const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const courseRoute = require("./routes/courseRoute");

const app = express();
const port = process.env.PORT || 4000;
const db = mongoose.connection

mongoose.connect("mongodb+srv://admin:admin123@batch-253-josephobligad.yq72isf.mongodb.net/courseBookingAPI?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

db.once("open", () => console.log("now connected to mongodb atlas."))

app.use(express.json());
app.use(express.urlencoded({extend: true}));
// Defines the "/users" string to be included for all user routes defined in the "user" route file
app.use("/users", userRoute);
// Defines the "/courses" string to be included for all course routes defined in the "course" route file
app.use("/courses", courseRoute);

if(require.main === module){
	app.listen(port, () => {
		console.log(`api is now online on port ${port}`)
	});
}

module.exports = app;
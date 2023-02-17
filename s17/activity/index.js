//console.log("hello world!")

/*
	//Note: strictly follow the variable names and function names.

	1. Create a function named printUserInfo() which is able to display a user's to fullname, age, location and other information.
		-invoke the function to display information similar to the expected output in the console.
		-check your spelling
*/
	//first function here:

function prinUserInfo() {
	let fullName = "john Doe";
	let age = 25;
	let location = "123 street, Quezon City";
	let cat = "joe";
	let dog = "Danny";
	console.log("hello I'm " + fullName + ".");
	console.log("I am " + age + " years old.");
	console.log("I live in " + location);
	console.log("I have a cat named " + cat + ".");
	console.log("I have a dog named " + dog + ".");
}
// prinUserInfo();

/*
	2. Create a function named printFiveBands which is able to display 5 bands/musical artists.
		-invoke the function to display information similar to the expected output in the console.
		-check your spelling
	
*/
	//second function here:

	function printMyFiveBands() {
		let faveBands = ["The Beatles", "Talor Swift", "The Eagles", "Rivermaya", "Eraserheads"];
		console.log(faveBands[0]);
		console.log(faveBands[1]);
		console.log(faveBands[2]);
		console.log(faveBands[3]);
		console.log(faveBands[4]);
	}

	// printMyFiveBands();

/*
	3. Create a function named printFiveMovies which is able to display the name of 5 movies.
		-invoke the function to display information similar to the expected output in the console.
		-check your spelling
	
*/
	
	//third function here:
	function printMyFiveMovies() {
		let faveMovies = ["Lion King", "Howl's Moving Castle", "Meet the Robinsons", "School of Rock", "Spirited Away"];
		console.log(faveMovies[0]);
		console.log(faveMovies[1]);
		console.log(faveMovies[2]);
		console.log(faveMovies[3]);
		console.log(faveMovies[4]);
	}

	// printMyFiveMovies();

/*
	4. Debugging Practice - Debug the following codes and functions to avoid errors.
		-check the variable names
		-check the variable scope
		-check function invocation/declaration
		-comment out unusable codes.
		-check your spelling

		-invoke the function to display information similar to the expected output in the console.
*/

function printFriends(){
	let friend1 = "Eugene"; 
	let friend2 = "Dennis"; 
	let friend3 = "Vincent";

	console.log("These are my friends:");
	console.log(friend1); 
	console.log(friend2); 
	console.log(friend3); 
};

//printFriends();

/*console.log(friend1);
console.log(friend2);*/








//Do not modify
//For exporting to test.js
try{
	module.exports = {
		printUserInfo,
		printMyFiveBands,
		printMyFiveMovies,
		printFriends
	}
} catch(err){

}
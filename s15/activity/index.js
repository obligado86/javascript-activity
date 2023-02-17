console.log("Hello World");

/*
	1. Create variables to store to the following user details:

	-first name - String
	-last name - String
	-age - Number
	-hobbies - Array
	-work address - Object

		-The hobbies array should contain at least 3 hobbies as Strings.
		-The work address object should contain the following key-value pairs:

			houseNumber: <value>
			street: <value>
			city: <value>
			state: <value>

	Log the values of each variable to follow/mimic the output.

	Note:
		-Name your own variables but follow the conventions and best practice in naming variables.
		-You may add your own values but keep the variable names and values Safe For Work.
*/

	//Add your variables and console log for objective 1 here:

	let firstName = "Joseph"; 
	let lastName = "Obligado";
	let age = 18;
	let hobbies = ["coding", "cooking", "sleeping"];
	let workAddress = {
		houseNumber: "1321",
		street: "Tisa",
		city: "Cebu City",
		state: "Central Visayas"
	}
	console.log("first name: " + firstName);
	console.log("last name: " + lastName);
	console.log("age: " + age);
	console.log("hobbies:");
	console.log(hobbies);
	console.log("work Address:");
	console.log(workAddress);
	


/*			
	2. Debugging Practice - Identify and implement the best practices of creating and using variables 
	   by avoiding errors and debugging the following codes:

			-Log the values of each variable to follow/mimic the output.
*/	

	let fullName = "Steve Rogers";
	console.log("My full name is" + fullName);

	age = 40;
	console.log("My current age is: " + age);
	
	let friends = ["Tony","Bruce", "Thor", "Natasha", "Clint", "Nick"];
	console.log("My Friends are: ")
	console.log(friends);

	let profile = {

		username: "captain_america",
		fullName: "Steve Rogers",
		age: 40,
		isActive: false,

	};
	console.log("My Full Profile: ")
	console.log(profile);

	fullName = "Bucky Barnes";
	console.log("My bestfriend is: " + fullName);

	const lastLocation = "Arctic Ocean";
	// lastLocation = "Atlantic Ocean";
	console.log("I was found frozen in: " + lastLocation);

console.log("hello World");

//Do not modify
    //For exporting to test.js
    try{
        module.exports = {
            firstName, lastName, age, hobbies, workAddress,
            fullName, currentAge, friends, profile, fullName2, lastLocation
        }
    } catch(err){
    }
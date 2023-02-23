// console.log("hello world");

// JSON Object

/*
	- JSON stands for JavaScript Object Notation
	- JSON is also used in other programming languages hence the name JavaScript Object Notation
	- Core JavaScript has a built in JSON object that contains methods for parsing JSON objects and converting strings into JavaScript objects
	- JavaScript objects are not to be confused with JSON
	- JSON is used for serializing different data types into bytes
	- Serialization is the process of converting data into a series of bytes for easier transmission/
/transfer of information
	- A byte is a unit of data that is eight binary digits (1 and 0) that is used to represent a character (letters, numbers or typographic symbols)
	- Bytes are information that a computer processes to perform different tasks
			-- machine language
	- Uses double quotes for property names
	- Syntax
		{
			"propertyA": "valueA",
			"propertyB": "valueB",
		}
*/

// JSON Objects

/*{
	"city": "Quezon City",
	"province": "Metro Manila",
	"country": "Philippines"
}*/

//JSON Arrays

/*"cities": [
	{"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
	{"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
	{"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
]*/

//JSON methods
// JSON Object contains methods for parsing and converting data into a stringified JSON data format.


// Converting Data into Stringified JSON (JS Object to JSON Data Format)
	// JSON.stringify()

let batchesArr = [
		{batchName: "Batch 253"},
		{batchName: "Batch 243"}
	]

console.log(batchesArr);

// The stringify method is used to convert JS objects into string/JSON Data Format
// Before sending data, it converts as array or an object to its string equivalent
console.log("result form stringyfy() method:");
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
	name: 'John',
	age: 31,
	address: {
		city: "Cebu City",
		country: "Philippines"
	}
});

console.log(data);

/*let firstName = prompt("what is your first name?");
let lastName = prompt("what is your last name?");
let age = prompt("what is your age?");
let address = {
	city: prompt("which city do you live in?");
	country: prompt("which country does your city belong to?");
};

let otherData = JSON.stringify({
		firstName: firstName,
		lastName: lastName,
		age: age,
		address: address
});

console.log(otherData);*/

// Converting stringifies JSON Data Format into JS Objects

// JSON.parse()

let batchesJSON = `[
	{
		"batchName": "batch 253"
	},
	{
		"batchName": "batch 243"
	}

]`

console.log(batchesJSON);

// Upon receiving data, the JSON text can be converted to JS Object/s so that we can use it in out program/app.
console.log("result from parse() method:");
console.log(JSON.parse(batchesJSON));

let stringifiedObject = `{
	"name": "john",
	"age": 31,
	"address": {
		"province": "Bulacan",
		"country": "Phippines"
	}
}`

console.log(stringifiedObject);
/*console.log(JSON.parse(stringifiedObject));*/


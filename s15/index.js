// coments: 

// comments are part of the code ingnored by the language

/*

this is still a comment
there are two types of comment single slash .
and multi-line comment with slash and two asterisks

*/

console.log("hello batch 253!");

/*
		Important Note:
			- The "script" tag is commonly placed at the bottom of the HTML file right before the closing "body" tag.
			- The reason for this is because Javascript's main function in frontend development is to make our websites and applications interactive.
			- In order to achieve this, JavaScript selects/targets specific HTML elements in our application and performs a certain output.
			- It is added last to allow all HTML and CSS resources to load first before applying any JavaSc
			- Placing the "script" tag at the top the the file might result in errors because since the HTML elements have not yet been loaded when the JavaScript loads, it does not have any valid HTML elements to target/select.
*/

/*

syntax- this is the grammar of language
statement - this is the command or instructions for the computer

*/

// [section] variables

// it is used to contain data any information that is used by an application is stored in what we call a memory

/*
	when we create variables certain portion of a device's memory is given a "name" that we call variable
	this makes it easier for us associate information stored in our devices to actual "names" about information.
	the name of a variables is called "identifier".


*/

// Declaring variables:

		// Declaring variables - tells our devices that a variable name is created and is ready to store data
		// Declaring a variable without giving it a value will automatically assign it with the value of "undefined", meaning the variable's value was "not defined".

/*

syntax:
	let/const variableName

*/

//let is a keyword that is usually used in declaring a variable.

let feelings = true; 

// console.log(feelings);

// console.log(hello);

/*
    Guides in writing variables:
        1. Use the 'let' keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
        2. Variable names should start with a lowercase character, use camelCase for multiple words.
        3. For constant variables, use the 'const' keyword.
        4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.

        Best practices in naming variables:

        		1. When naming variables, it is important to create variables that are descriptive and indicative of the data it contains.

        			let firstName = "Michael"; - good variable name
        			let pokemon = 25000; - bad variable name
        2. When naming variables, it is better to start with a lowercase letter. We usually avoid creating variable names that starts with capital letters. Because there are several keywords in JS that start in capital letter.

        			let FirstName = "Michael"; - bad variable name
        			let firstName = "Michael"; - good variable name
        3. Do not add spaces to your variable names. Use camelCase for multiple words, or underscores.

        			let first name = "Mike";

        		camelCase is when we have first word in small caps and the next word added without space but is capitalized:

        			lastName emailAddress mobileNumber
        Underscores sample:

        		let product_description = "lorem ipsum"
        		let product_id = "250000ea1000"

*/


// initializing variables

// Initializing variables - the instance when a variable is given it's initial/starting value
		// Syntax
		    // let/const variableName = value;
let productName = "desktop computer";
console.log(productName);

let productPrice =18999;
console.log(productPrice)

const interest = 3.539;

//let variable cannot be re-declared within its scope.
let friend = "Owen";
friend = "basha"; // re-assign/redeclared variable

console.log(friend);

// interest = 3.14159265;
console.log(interest); //Uncaught TypeError: Assignment to constant variable.

//while const cannot be updated or re-declared
		// Values of constants cannot be changed and will simply return an error

// const friend = "casper" this will caught error;

console.log(friend);
//this is a declaration of variable since it has no value yet,
let supplier;

// this is still an initialization of variable since it is the first time assigning its value.
supplier = "john";
// this is consider as reassignment because its initial value was already declared,
supplier = "ben"

// constants connot be declaired without initialization.


const pi = 3.141;
console.log(pi);

var pokemon = "pikachu";
//There are issues associated with variables declared with var, regarding with hoisting.
//In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
//Hoisting is JavaScript's default behavior of moving declarations to the top.
console.log(pokemon);


/*a = 5;
console.log(a);
var a;*/

/*let outerVar = "hello churba";

{
	let innerVar = "hello there";
};

console.log(outerVar);
console.log(innerVar);*/

console.log(supplier, productPrice, interest);


// [section] data types

// Strings
		// Strings are a series of characters that create a word, a phrase, a sentence or anything related to creating text
		// Strings in JavaScript can be written using either a single (') or double (") quote
		// In other programming languages, only the double quotes can be used for creating strings

let country = "philippines";
let province = 'metro manila';

// Concatenating strings
		// Multiple string values can be combined to create a single string using the "+" symbol

let fullAddress = province + ', ' + country;
console.log(fullAddress);

let greeting = "i live in the " + country;

console.log(greeting);

console.log("my name is " + "Joseph " + greeting);


//  (\) escape character - in combination with other characters can produce 
let mailAddress = "metro manila\n\nPhilippines";
console.log(mailAddress);

let message = "John's is having a leave";
message = 'john\'s is about to go';
console.log(message);

message = "john says \"Hello!\"";

console.log(message);

// [section] Numbers

let headcount = 26;
// Integer/whole number

console.log(headcount);

let grade = 98.7;
// decimal number/float/fractions
console.log(grade);

let planetDistance = 2e10
//exponential notation
console.log(planetDistance);


// data type number will become a string once it is combined/ connected with string.
console.log("john's grade is " + grade);

// boolean 
// Boolean values are normally used to store values relating to the state of certain things
// This will be useful in further discussions about creating logic to make our application respond to certain scenarios

let isMarried = false;
let inGoodConduct = true;
console.log(isMarried);
console.log("is good? " + inGoodConduct);

// arrays
// array are a special kind of data type that's used to store multiple values
// arrays can store different data types but is normally use to store similar data types

/*

syntax let/const arrayName = [elementa, elementb, elementc, ...];

*/

let grades = [98.2, 91, 92, 82];
console.log(grades);

// different data types
		// storing different data types inside an array is not recommended because it will not make sense to in the context of programming

let details = ["john", "jane", 32, true];
console.log(details);



// Objects are another special kind of data type that's used to mimic real world objects/items
		// They're used to create complex data that contains pieces of information that are relevant to each other
		// Every individual piece of information is called a property of the object


/*
sytax:
let/const objectName = {
	propertya: value;
	propertyb: value;
	...
}

*/
let person = {
//key value pair
	fullName: "Bilbo",
	age: 90,
	isMarried: false,
	contact: ["0926 000 0000", "8134 4109"],
	address: {
		houseNumber: '123',
		city: "shire"
	}
}

console.log(person);

let myGrades = {
	firstGrading: 92.9,
	secondGrading: 89.2,
	thirdGrading: 86.9,
	forthGradin: 93.2,
};
console.log(myGrades);

//type of operator is used to determine the type of date or the value of a variable, its output a string.

console.log(typeof myGrades);
//array is a spacial type of object with methods and function to manipulate it
console.log(typeof grades);

const anime = ["naruto", "one piece", "onepunch man"];
// anime = ["spyxfamily"];
anime[0] = ["demon slayer"];
console.log(anime);

//null 
// It is used to intentionally express the absence of a value in a variable declaration/initialization
// null simply means that a data type was assigned to a variable but it does not hold any value/amount or is nullified

let spouse = null, myNumber = 0, myString = '';

console.log(spouse, myNumber, myString);

// Using null compared to a 0 value and an empty string is much better for readability purposes
// null is also considered as a data type of it's own compared to 0 which is a data type of a number and single quotes which are a data type of a string

// undefined
//represents the state of a variable that has been declared but without an assigned value

console.log("Feeling are ", feelings);
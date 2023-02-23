//console.log("hello world");

// ES6 Update

// exponent operator

const firstNum = 8 ** 2; // ES6 update
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);

//template literals

/*

	. allows to write strings without using the concatenation operator (+)
	. great help with code readability

*/

let name = "john";

// pre-template literal

let message = "hello " + name;
console.log("message without template leterals " + message);

//strings using template literals
//uses backtics (``)

message = `hello ${name}! welcome`;
console.log(message);

// multiline using template literals
const anotherMessage = `${name} attended a math competition. ${firstNum + 2}`;
console.log(anotherMessage);

/*
			- Template literals allow us to write strings with embedded JavaScript expressions
			- expressions are any valid unit of code that resolves to a value
			- "${}" are used to include JavaScript expressions in strings using template literals
*/

const interestRate = .1;
const principal = 1000
console.log(`the interest on your saving account is: ${principal * interestRate}`);


// array descructuring

/*

	- Allows to unpack elements in arrays into distinct variables
	- Allows us to name array elements with variables instead of using index numbers
	- Helps with code readability

	Syntax:
		let/const [variableName1, variableName2, variableName3] = arrayName;

*/

const fullName = ["juan", "dela", "cruz"];

console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(`hello ${fullName[0]} ${fullName[1]} ${fullName[2]}`);

// array destructuring

const [firstName, middleName, lastName] = fullName

console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`hello ${firstName} ${middleName} ${lastName}! Its nice to meet you`);
console.log(`hello ${fullName.join(" ")}! Its nice to meet you`);

// object destructuring
/*

	- Allows to unpack properties of objects into distinct variables
	- Shortens the syntax for accessing properties from objects

	syntax:
		let/const {propertyName, propertyName, propertyName} = objectName;

*/

const person = {
	givenName: "John",
	maidenName: "D",
	surName: "gonner"
};

console.log(person.givenName);
console.log(person.maidenName);
console.log(person.surName);


console.log(`hello ${person.givenName} ${person.maidenName} ${person.surName}! welcome`);

const {givenName, maidenName, surName} = person;

console.log(givenName);
console.log(maidenName);
console.log(surName);

console.log(`hello ${givenName} ${maidenName} ${surName}! welcome`);


// function deconstructure

/*

	passing the values using destructured properties of the object (function)

		function funcName({propertyName, propertyName, PropertyName}){
			return statement (parameters)
		}
		
		funcName(object)
*/
function getFullName({ givenName, maidenName, surName }){
	console.log(`${givenName} ${maidenName} ${surName}`)
}

getFullName(person);


// arrow functions
/*

	- Compact alternative syntax to traditional functions
	- Useful for code snippets where creating functions will not be reused in any other portion of the code
	- Adheres to the "DRY" (Don't Repeat Yourself) principle where there's no longer need to create a function and think of a name for functions that will only be used in certain code snippets
	- Arrow functions also have implicit return which means we don't need to use the "return" keyword

	Syntax:
        let/const variableName = (parameterA, parameterB) => {
            statement
        }

        or (if single-line no need for curly brackets)

        let/const variableName = () => expression;

*/

// pre arrow function
function printFullName(firstName, lastName){
	console.log(`${firstName} ${lastName}`);
}

printFullName("john", "smith");

// arrow function (=>)
const printName = (firstName, lastName) => {
	console.log(`${firstName} ${lastName}`)
}

printName("jane", "smith");

const hello = () => {
	console.log("hello");
}

hello();

const sum = (x,y) => x + y;

let total = sum(1,1);
console.log(total);

person.talk = () => "HI!!! how are you?";

console.log(person.talk());

// function with default argument value

const greet = (name = "user") => {
	return `Good morning, ${name}!`;
};

console.log(greet());
console.log(greet("ariana"));

// class-based object blueprints

/*

	allow the creation/instantation of object using classes as blueprints

	Syntax:
		class className {
			constructor (objectPropertyA = objectPropertyB){
				this.objectPropertyA = objectPropertyA;
				this.objectPropertyB = objectPropertyB;
			}
		}

*/

class Car {
	constructor(brand, model, year){
		this.brand = brand;
		this.model = model;
		this.year = year;
	}
}

const mycar = new Car();
console.log(mycar);

//values of properties may be assigned after creation/instantiation of an object
mycar.brand = "ford";
mycar.model = "ranger raptor";
mycar.year = 2021;

console.log(mycar);

const myNewCar = new Car("toyota", "vios", 2022);

console.log(myNewCar);
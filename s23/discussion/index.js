//console.log("hello");

// Objects

/*

	Is a data type that is used to represent real world objects. it is also a collection of related data and/or functionalities.

	object literals

	one of the methods in creating objects

	syntax:
		let objectName = {
			keyA/propertyA: valueA,
			keyB/propertyB; valueB
		}

*/

let cellphone = {
	name: "Nokia 3210",
	manufactureDate: 1999
};

console.log("result in creating object using object literals: ");
console.log(cellphone);
console.log(typeof cellphone);


console.log("=======================================");
//creating object using a constructor function (object Constructor)

/*

	creates a reusable function to create several objects that have the same data structure, this is useful for creating multiple instances/copies of an object.

	Note: when creating an object using constructor function the naming convention will on pascalCase
	
	Syntax: 
		function objectName(valueA, valueB){
			this.keyA = valueA,
			this.keyB = valueB
		}

		let variableName = new Function objectName(valueA, valueB);
		console.log(variableName);

		note: do not forget the "new" keyword/reserved word when creating a new object.

*/


function Laptop(brand, manufactureDate){
	this.brand = brand,
	this.manifactureDate = manufactureDate
};

let laptopJohn = new Laptop("lenovo", 2008);
console.log("result of creating objects using constructor function:");
console.log(laptopJohn);

let laptopOwen = new Laptop("Macbook Air", [2020, 2021]);
console.log("result of creating objects using constructor function:");
console.log(laptopOwen);

let laptop = Laptop("Macbook", [2020, 2021]);
console.log("result of creating objects using constructor function:");
console.log(laptop);

// create emty objects as placeholder

let computer = {};
let myComputer = new Object();
console.log(computer);
console.log(myComputer);

/*
	Mini Activity:
		- Create an object constructor function to produce 2 objects with 3 key-value pairs.
		- Log the 2 new objects in the console and send SS in our batch hangout.
*/

function shoes(brand, manufactureDate, style){
	this.brand = brand,
	this.manifactureDate = manufactureDate;
	this.style = style
};

let nikeShoes = new shoes("Nike", 2023, "highCut");
console.log(nikeShoes);
let adidasShoes = new shoes("addidas", 2022, "lowcut");
console.log(adidasShoes);


console.log("=======================================");
// accessing object property

console.log("result from dot notation " + laptopJohn.brand);
console.log("result from square bracket notation " + laptopJohn["brand"]);


// accessing array objects
let deviceArr = [laptopJohn, laptopOwen];
console.log(deviceArr);

//dot notation
console.log(deviceArr[0].brand);
// square bracket notation
console.log(deviceArr[0]["manifactureDate"]);

// initializing/ adding/deleting/reassigning object properties

// crud operations

//initializing object

let car = {};
console.log(car);

// adding object

// using dot notation
car.name = "Honda civic";
console.log("result in adding properties using dot notation:")
console.log(car);

//using square bracket notation for adding object properties
/*
		    - While using the square bracket will allow access to spaces when assigning property names to make it easier to read, this also makes it so that object properties can only be accesssed using the square bracket notation
		    - This also makes names of object properties to not follow commonly used naming conventions for them
		*/

car["manufacture date"] = 2019;
console.log(car["manufacture date"]);
console.log(car["Manufacture date"]); // undefined must be same with the declaired name
console.log(car.manifactureDate);

console.log("result from adding properties using squre braket notation:");

console.log(car);
console.log("================deleting==============");
// deleting object properties

delete car["manufacture date"];
console.log("result from deleting properties");
console.log(car);

// reassinging object properties (updating)

console.log("================reassinging==============");

car.name = "Tesla";
console.log("result form reassigning properties:");
console.log(car);

// object methods

/*

	This method is a function which is stored in an object property. Ther are also functions and one of the key difference that they have is that methods are functions related to a specific object.

*/

let person = {
	name: "Pedro",
	age: "25",
	talk: function(){
		console.log("hello! ako si " + this.name)
	}
};

console.log(person);
console.log("result for object method");
person.talk();

person.walk = function(){
	console.log(this.name + " have walked 25 steps forward");
};

person.walk();

let friend = {
	firstname: "maria",
	lastName: "dela cruz",
	address: {
		city: "austin, texas",
		country: "US"
	},
	emails: ["maria143@gmail.com", "maria_bossxz@mail.com"],
	introduce: function(){
		console.log("hello! My name is " + this.firstname + " " + this.lastName + "." + " I live in " + this.address.city + ", " + this.address.country + ".");
	}
};

friend.introduce();

let myPokemon = {
	name: "Charizard",
	level: 3,
	health: 100,
	attack: 50,
	tackle: function(){
		console.log("this pokemon tackled targeted pokemon");
		console.log("targetPokemon's health is now reduced to _targetPokemonhealth_");
	},
	faint: function(){
		console.log("pokemon fainted.");
	}
}

console.log(myPokemon);

// creating an object constructor instead wil healp with this process
function Pokemon(name, level){
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;

	//methods

	this.tackle = function(target){
		console.log(this.name + " tackled " + target.name);
		console.log(target.name + "'s health is now reduced to " + target.health);
	};
	this.faint = function(){
		console.log(this.name + " fainted.");
	}
}

//creates new instances of the "pokemon" object each with thie unique properties

let pikachu = new Pokemon("pikachu", 16);
let charmander = new Pokemon("Charmander", 8);

pikachu.tackle(charmander);
 


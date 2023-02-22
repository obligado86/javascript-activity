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
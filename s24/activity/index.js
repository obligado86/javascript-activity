//console.log("hello everyone!");

// Exponent Operator
let getCube = 2 ** 3;
// Template Literals
console.log(`The cube of 2 is ${getCube}`);
// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];
const [houseNumber, street, state, zipCode] = address
console.log(`I live at ${houseNumber} ${street} ${state} ${zipCode}`);
// Object Destructuring
const animal = {
	name: "Lolong",
	species: "saltwater crocodile",
	weight: "1075 kgs",
	measurement: "20 ft 3 in"
}

const {name, species, weight, measurement} = animal;
console.log(`${name} was a ${species}, He weighed at ${weight} with a mesurement of ${measurement}`);

// Arrow Functions
let numbers = [1, 2, 3, 4, 5];
let listNumber = () => numbers.forEach(function(nums){
	console.log(nums);
});
console.log(listNumber());
let reduceNumber = () => numbers.reduce(function(acc, curr){
	return acc + curr;
})  
	
console.log(reduceNumber());

// Javascript Classes

class Dog {
	constructor(name, age, breed){
		this.name = name;
		this.age = age;
		this.breed = breed;
	}
}

const dog = new Dog();

dog.name = "Frankie";
dog.age = 5;
dog.breed = "Miniture Dachshund";

console.log(dog);

//Do not modify
//For exporting to test.js
try {
	module.exports = {
		getCube,
		houseNumber,
		street,
		state,
		zipCode,
		name,
		species,
		weight,
		measurement,
		reduceNumber,
		Dog
	}	
} catch (err){

}
// console.log("Hello World");

//Follow the property names and spelling given in the google slide instructions.

// Create an object called trainer using object literals

let trainer = {}

// Initialize/add the given object properties and methods

// Properties
trainer.name = "Ash Ketchum";
trainer.age = 10;
trainer.pokemon = ["Pikachu", "Charizard", "Squirtle", "Bulbasaur"];
trainer.frends = {
	hoenn: ["May", "Max"],
	kanto: ["Brock", "Misty"]
}

// Methods

trainer.talk = function(){
		return "Pikachu! I choose you!";
	}

// Check if all properties and methods were properly added

console.log(trainer);

// Access object properties using dot notation

console.log("Result of dot notation:");
console.log(trainer.name);

// Access object properties using square bracket notation

console.log("Result of square bracket notation:");
console.log(trainer["pokemon"])

// Access the trainer "talk" method

console.log("result of talk method")
console.log(trainer.talk());

// Create a constructor function called Pokemon for creating a pokemon

function Pokemon(name, level){
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;
	this.tackle = function(target){
		console.log(this.name + " tackled " + target.name);
		let reduceHealth = target.health - this.attack;
		target.health = reduceHealth;
		if (reduceHealth <= 0){
			console.log(target.name + "'s health is now reduced to " + target.health);
			return target.faint();
		} else {
			console.log(target.name + "'s health is now reduced to " + target.health);
		}
	};
	this.faint = function(){
		console.log(this.name + " fainted")
	}
}


// Create/instantiate a new pokemon

let mewtwo = new Pokemon("Mewtwo", 99);
console.log(mewtwo);

// Create/instantiate a new pokemon

let charizard = new Pokemon("Charizard", 78);
console.log(charizard);

// Create/instantiate a new pokemon

let garadose = new Pokemon("Garadose", 72);
console.log(garadose);

// Invoke the tackle method and target a different object

mewtwo.tackle(charizard);
console.log(charizard);

// Invoke the tackle method and target a different object

garadose.tackle(mewtwo);
console.log(mewtwo);

mewtwo.tackle(charizard);
console.log(charizard);

//Do not modify
//For exporting to test.js
try{
	module.exports = {
		trainer,
		Pokemon 
	}
} catch(err) {

}
// console.log("hello on the other side.")

// LOOPS

// while loop

/*

- A while loop takes in an expression/condition
		- Expressions are any unit of code that can be evaluated to a value
		- If the condition evaluates to true, the statements inside the code block will be executed
		- A statement is a command that the programmer gives to the computer
		- A loop will iterate a certain number of times until an expression/condition is met
		- "Iteration" is the term given to the repetition of statements

		Syntax:

		while(expression/condition){
			statement;
		}

*/
console.log("=================while loop============")
let count = 5;

//while the value of the count is not equal to 0
while(count !== 0){

	//the current value of count is printed out
	console.log("while " + count);
	count--
	console.log(count)
}

let i = 0
while(i <= 3){
	console.log("count " + i);
	i++
}

console.log("=================do while loop============")

// DO WHILE LOOP

/*
	- A do-while loop works a lot like the while loop. But unlike while loops, do-while loops guarantee that the code will be executed at least once.

	syntax

		do {
			statement
		} while (expresion/condition)
*/

let number = Number(prompt("give me a number"));

do {
	// the current value of a number is printed out
	console.log("do while: " + number);

	// increses the value of number by 1 after every iteration to stop the loop it reaches 10 or greater
	// number = number + 1
	number += 1
} while (number < 10)

// ====================================
console.log("==============for loop==================")
//for loop

/*
		- A for loop is more flexible than while and do-while loops. It consists of three parts:
		    1. The "initialization" value that will track the progression of the loop.
		    2.  The "expression/condition" that will be evaluated which will determine whether the loop will run one more time.
		    3. The "finalExpression" indicates how to advance the loop.

		    syntax:
		    	for(initialization/initial value; expression/condition; iteration)
	*/

for (let n = 0; n <= 10; n++){

	// the current value of n is printed out
	console.log(n);
}


let myString = "IAmADeveloper";

console.log(myString.length);

/*console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);*/

for(let x = 0; x < myString.length; x++){
	console.log(myString[x]);
}

let givenName = "Joseph";

let vowel = 1

for(let y = 0; y < givenName.length; y++){
	if(
		givenName[y] == "a" ||
		givenName[y] == "e" ||
		givenName[y] == "i" ||
		givenName[y] == "o" ||
		givenName[y] == "u"
		){
		console.log(vowel++);
	}
}

for(let j = 0; j < givenName.length; j++){
	// If the character of your name is a vowel letter, instead of displaying the character, display "*"
	// The ".toLowerCase()" function/method will change the current letter being evaluated in a loop to a lowercase letter ensuring that the letters provided in the expressions below will match
	if(
		givenName[j].toLowerCase() == "a" ||
		givenName[j].toLowerCase() == "e" ||
		givenName[j].toLowerCase() == "i" ||
		givenName[j].toLowerCase() == "o" ||
		givenName[j].toLowerCase() == "u"

	){
		// if the letter in the name is a vowel it will print the *
		console.log("*");
	} else {
		// print in the console all non-vowel characters in the name
		console.log(givenName[j]);
	}
}

console.log("==============continue break=============");

for (count = 0; count <= 20; count++){
	if(count % 2 === 0){
		continue;
	}
	console.log("continue and break: " + count)

	if(count > 10){
		break;
	}
}

console.log("=========================");

let name = "alejandro";

for(let k = 0; k < name.length; k++){
	console.log(name[k]);

	if(name[k].toLowerCase() === "a"){
		console.log("continue to next iteration");
		continue;
	}

	if(name[k] == "d"){
		break;
	}
}
// console.log("hello dear");

// console.log("Hello World");

//Objective 1
// Create a function called printNumbers() that will loop over a number provided as an argument.
	//In the function, add a console to display the number provided.
	//In the function, create a loop that will use the number provided by the user and count down to 0
		//In the loop, create an if-else statement:

			// If the value provided is less than or equal to 50, terminate the loop and show the following message in the console:
				//"The current value is at " + count + ". Terminating the loop."

			// If the value is divisible by 10, skip printing the number and show the following message in the console:
				//"The number is divisible by 10. Skipping the number."

			// If the value is divisible by 5, print the number.


function printNumbers(num) {
	console.log("The number you provided is " + num);
	for (let count = num; count > 0; count--){
		if(count <= 50){
			console.log("The current value is at " + count + ". terminating the loop")
			break;
		}

		if(count % 10 === 0){
			console.log("the number is devisibleby 10. Skipping the number.")
			continue;
		}

		if(count % 5 === 0){
			console.log(count)
			continue
		}

	}
}

console.log(printNumbers(100));

//Objective 2
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = "";

//Add code here
for (filteredString = 0; filteredString < string.length; filteredString++){
	if(
		string[filteredString] == "a" ||
		string[filteredString] == "e" ||
		string[filteredString] == "i" ||
		string[filteredString] == "o" ||
		string[filteredString] == "u"
		){
	} else {
		console.log(string[filteredString]);
	} 
}




//Do not modify
//For exporting to test.js
try {
    module.exports = {
       printNumbers, filteredString
    }
} catch(err) {

}
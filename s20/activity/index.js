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
	for (let count = num; count >= 0; count--){
		if(count % 10 === 0){
			continue;
		}
		console.log("the number is devisibleby 10. Skipping the number.")

		if(i <= 50){
			break;
		}
	}
}

console.log(printNumbers(100));

//Objective 2
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';

//Add code here





//Do not modify
//For exporting to test.js
try {
    module.exports = {
       printNumbers, filteredString
    }
} catch(err) {

}
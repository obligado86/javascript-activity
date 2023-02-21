//console.log("hello!");

// if, else if, else statement

let numG = 0;
let numH = -1;

//if statement

// executes a statement if a aspecified condition is true
/*syntax: id(expression) {
	statement;
}*/
if(numG < 0) {
	console.log("hello");

/* Else if  statement 

	excutes statement if previous condition are false and if
	the specified consdition is true.
	the "else if" clause is optional and can be adde to capute additional conditions to change the flow of the program.


	 Syntax:
    if(expression){
        statement;
    } else if(expression) {
        statement;
    }


*/
} else if (numH > 0) {
	console.log("world");

// Else Statement

	/* 
		    - Executes a statement if all other conditions are false
		    - The "else" statement is optional and can be added to capture any other result to change the flow of a program

		    	 Syntax:
		        if(expression){
		            statement;
		        } else if(expression) {
		            statement;
		        } else {
					statement;
		        }

		*/

} else {
	console.log("again");
}

let message = "No message.";

console.log(message);

function determineTypoonIntensity(windspeed) {
	if (windspeed < 30) {
		return "not a typhoon yet";
	} else if (windspeed <= 61) {
		return "tropical depression detected";
	} else if (windspeed >= 62 && windspeed <= 88) {
		return "tropical storm detected";
	} else if (windspeed >= 89 && windspeed <= 117) {
		return "severe tropical storm detected";
	} else {
		return "typhoon detected";
	}

	
}

message = determineTypoonIntensity(69);
console.log(message);

if (message == "tropical storm detected") {
	console.warn(message);
}

//truthy and falsy

/* 
		    - In JavaScript a "truthy" value is a value that is considered true when encountered in a Boolean context
		    - Values are considered true unless defined otherwise
		    - Falsy values/exceptions for truthy:
		        1. false
		        2. 0
		        3. -0
		        4. ""
		        5. null
		        6. undefined
		        7. NaN
		*/

//truthy samples

/* 
		    - If the result of an expression in a condition results to a truthy value, the condition returns true and the corresponding statements are executed
		    - Expressions are any unit of code that can be evaluated to a value
		*/

if(true) {
	console.log("truthy");
}

if(1){
	console.log("truthy");
}

if([]){
	console.log("truthy");
}

// falsy exsamples

if(false){
	console.log("falsy");
}

if(0){
	console.log("falsy");
}

if(undefined){
	console.log("falsy");
}

// conditional trenary operator

/*
	- The Conditional (Ternary) Operator takes in three operands:
	    1. condition
	    2. expression to execute if the condition is truthy
	    3. expression to execute if the condition is falsy
	- Can be used as an alternative to an "if else" statement
	- Ternary operators have an implicit "return" statement meaning that without the "return" keyword, the resulting expressions can be stored in a variable
	- Commonly used for single statement execution where the result consists of only one line of code
		- For multiple lines of code/code blocks, a function may be defined then used in a ternary operator

		sytax (expression) ? iftrue : if false;

*/

//single statement execution

let ternaryResult = (1 < 18) ? true : false;
console.log("return of ternary operator: " + ternaryResult);

// multiple statement execution

let name;

function isOfLegalAge(){
	name = "john";
	return "you are of the legal age limit";
}

function isUnderAge(){
	name = "jane";
	return "you are under the age limit";
}

/*let age = parseInt(prompt("what is your age? "));
console.log(age);
let legalAge = (age >= 18) ? isOfLegalAge() : isUnderAge();

if(age >= 18) {
	console.log("result of ternary function: " + legalAge + ", " + name);
} else {
	console.warn("result of ternary function: " + legalAge + ", " + name);
}*/

// switch statement

/* 
    - Can be used as an alternative to an if, "else if and else" statement where the data to be used in the condition is of an expected input
    - The ".toLowerCase()" function/method will change the input received from the prompt into all lowercase letters ensuring a match with the switch case conditions if the user inputs capitalized or uppercased letters
- The "expression" is the information used to match the "value" provided in the switch cases
    - Variables are commonly used as expressions to allow varying user input to be used when comparing with switch case values
    - Switch cases are considered as "loops" meaning it will compare the "expression" with each of the case "values" until a match is found
- The "break" statement is used to terminate the current loop once a match has been found
    - Removing the "break" statement will have the switch statement compare the expression with the values of succeeding cases even if a match was found
    

    Syntax:
        switch (expression) {
            case value:
                statement;
                break;
            default:
                statement;
                break;
        }
*/

/*let  day = prompt("what day of the week is it today? ").toLowerCase();
console.log(day);

switch (day) {
	case "monday":
		console.log("today is monday");
		break;
	case "tuesday":
		console.log("today is tuesday");
		break;
	case "wednesday":
		console.log("today is wednesday");
		break;
	case "thursday":
		console.log("today is thursday");
		break;
	case "friday":
		console.log("today is friday");
		break;
	case "saturday":
		console.log("today is saturday");
		break;
	case "sunday":
		console.log("today is sunday!");
	default:
		console.log("please input a valid day");
		break;
}
*/
//try catch finally statement

/*
		    - "try catch" statements are commonly used for error handling
		    - There are instances when the application returns an error/warning that is not necessarily an error in the context of our code
		    - These errors are a result of an attempt of the programming language to help developers in creating efficient code
- They are used to specify a response whenever an exception/error is received
		    - It is also useful for debugging code because of the "error" object that can be "caught" when using the try catch statement
- In most programming languages, an "error" object is used to provide detailed information about an error and which also provides access to functions that can be used to handle/resolve errors to create "exceptions" within our code
		    - The "finally" block is used to specify a response/action that is used to handle/resolve errors
		*/

function showIntensityAlert(windspeed){
	try {
		//this attempt to execute a code
		alerat(determineTypoonIntensity(windspeed));
		// error/err are commonly used variable names by devs for storing errors.
	} catch (error) {

		//the typeof operator is use to check the data type of a value/expression and return a string of what the data type is
		console.log(typeof error);
		console.warn(error.message);
	} finally {
		//continue the excecution of the code regardless of the success and failure of the code excecution in the "try" block to handle/restore error.
		alert("intensity update will show new alert.")
	}
}
showIntensityAlert(56);
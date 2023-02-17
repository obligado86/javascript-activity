// console.log("hello philippine1");

//[ SECTION ] Functions
	// Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked
	// Functions are mostly created to create complicated tasks to run several lines of code in succession
	// They are also used to prevent repeating lines/blocks of codes that perform the same task/function
//Function declarations
	//(function statement) defines a function with the specified parameters.

	/*
	Syntax:
		function functionName() {
			code block (statement)
		}
	*/
	// function keyword - used to defined a javascript functions
	// functionName - the function name. Functions are named to be able to use later in the code.
	// function block ({}) - the statements which comprise the body of the function. This is where the code to be executed.


function printName() {
	console.log("my name is joseph");
};

printName();
// semicolon are used to separate excecutable JavaScript statements.

//[ SECTION ] Function Invocation
	//The code block and statements inside a function is not immediately executed when the function is defined. The code block and statements inside a function is executed when the function is invoked or called.
	//It is common to use the term "call a function" instead of "invoke a function".
//Function Declarations

		//A function can be created through function declaration by using the function keyword and adding a function name.

		//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
		
		//declaredFunction(); //declared functions can be hoisted. As long as the function has been defined.

		//Note: Hoisting is Javascript's behavior for certain variables and functions to run or use them b


function declaredFunction() {
	console.log("hello declaired function!");
};

declaredFunction();

/*/Function Expression
		//A function can also be stored in a variable. This is called a function expression.
*/
		//A function expression is an anonymous function assigned to the variableFunction

		//Anonymous function - a function without a name.
//variableFunction(); 
// this will be error

let variableFunction = function() {
	console.log("hello again!");
};

variableFunction();

let funcExprestion = function funcName() {
	console.log("helo!");
};

funcExprestion();

//funcName(); this will get error because variable of the function must be called first.

declaredFunction = function() {
	console.log("jkabsdklfjai");
};

declaredFunction(); // declaired function can be reassigned.

funcExprestion = function() {
	console.log("new expresion");
};

funcExprestion(); // ether function declaration or expression can be re assigned.

const constantFunc = function(){
	console.log("constant invoke function");
};

constantFunc();

/*constantFunc = function() {
	console.log("updated constant function");
};
constantFunc();*/ // this will get error because this is a constant variable

// [Section] function scoping 

/*	
	Scope is the accessibility (visibility) of variables.
	
	Javascript Variables has 3 types of scope:
		1. local/block scope
		2. global scope
		3. function scope
			JavaScript has function scope: Each function creates a new scope.
			Variables defined inside a function are not accessible (visible) from outside the function.
			Variables declared with var, let and const are quite similar when declared inside a function
*/
{
		let localVar = "kudo kabdfjkn";
};

let globalVar = "ms universe";

console.log(globalVar);

//console.log(localVar); // local will not be define. since the variable is inside the local scope unless the console log is inside of the scope as well.

function showNames() {
	var functionVar = "variable function"
	let functionLet = "2nd";
	const functionConst = "3rd";

	console.log(functionVar);
	console.log(functionLet);
	console.log(functionConst);
};
showNames();

	/*console.log(functionVar);
	console.log(functionLet);
	console.log(functionConst);*/

//nested function

//nested function are function that are inside a function. it will have access to the variable name as they are within the same scope/code block

function myNewFunc() {
	let name1 = "jane";

	function nestedFunc(){
		let nestedName = "john";

		console.log(name1);
	}
	// console.log(nestedName); error not defined global variable are only accessible inside the child function local variables connot accessed outside the scope
	nestedFunc();
};

myNewFunc();

//console.log(name1);
//[ SECTION ] Using alert()

	//alert() allows us to show a small window at the top of our browser page to show information to our users. As opposed to a console.log() which only shows the message on the console. It allows us to show a short dialog or instruction to our user. The page will wait until the user dismisses the dialog.

//alert("hello 253!"); 
//This will run immediately when the page loads.

// syntax for alert:
//    alert("<dialog>")


function showSampleAlert(){
	alert("helo batch");
};
//showSampleAlert();


console.log("will display when alerat is deplay");
//Notes on the use of alert():
		//Show only an alert() for short dialogs/messages to the user. 
		//Do not overuse alert() because the program/js has to wait for it to be dismissed before continuing.

// [section] using promt();

//prompt() allows us to show a small window at the of the browser to gather user input. It, much like alert(), will have the page wait until the user completes or enters their input. The input from the prompt() will be returned as a String once the user dismisses the window.

//let showSamplePromt = prompt("enter your name: ");
//console.log("helo " + showSamplePromt);

// syntax for prompt:
//    prompt("<dialog>")

/*showSamplePromt = prompt("enter your name: " + "last name : ");

console.log("hello " + showSamplePromt);*/

function printWelcome() {
	let firstName = prompt("enter your first name");
	let lastName = prompt("enter your last name");

	console.log("hello, " + firstName + " " + lastName + "!");
	console.log("Welcome to my page!");
}

//printWelcome();

function getFaveAnime(){
	let animes = ["demon slayer", "naruto", "onepiece"];
	console.log(animes);
};

function get() {
	let pet = "cat";
	console.log(pet);
}

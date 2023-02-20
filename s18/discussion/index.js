//console.log("hello world");

//Functions
	
		//Parameters and Arguments

			// Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked
			// Functions are mostly created to create complicated tasks to run several lines of code in succession
			// They are also used to prevent repeating lines/blocks of codes that perform the same task/function

			//We also learned in the previous session that we can gather data from user input using a prompt() window.

function printInput(){
	let nickName = prompt("Enter you nickname: ");
	console.log("Hi, " + nickName);
}

//printInput();

function printName(name){
	console.log("My name is " + name);
}

printName("joseph Obligado");

printName("john michele");
printName("ben parker");

// variables can also be passed as an arguement
let sampleName = "lawrence";
printName(sampleName);

function divisibilityCheck(divNumA){
	console.log(divNumA % 8 === 0);
}

divisibilityCheck(64);
divisibilityCheck(28);

function checkDivisibility(num){
	let remainder = num % 8;
	console.log("The remainder of " + num + " divided by 8 is: " + remainder);

	let isdivisible = remainder === 0;
	console.log("is " + num + "divisible by 8?");
	console.log(isdivisible);
}

checkDivisibility(64);
checkDivisibility(28);


// function as arguments
function argsFunc(){
	console.log("This function was passed as an arguemnet before the message is printed.")
};

function invokeFunc(argsFunc){
	argsFunc();
}

invokeFunc(argsFunc);

//multiple parameter

function creatFullName(lastName, middleName, firstName){
	console.log(firstName + " " + middleName + " " + lastName);
}

creatFullName("juan", "Dela", "Cruz");

creatFullName("jhon", "tamad");

creatFullName("ben", "D.", "parker", "hello");

let firstName = "john";
let middleName = "Doe";
let lastName = "Smith";

creatFullName(firstName, middleName, lastName);

//The order of the argument is the same to the order of the parameters. The first argument will be stored in the first parameter, second argument will be stored in the second parameter and so on.

//return statement

// The "return" statement allows us to output a value from a function to be passed to the line/block of code that invoked/called the function.

function returnFullName(firstName, middleName, lastName){

	return firstName + " " + middleName + " " + lastName;
	console.log("cute mo");
	// Notice that the console.log() after the return is no longer printed in the console that is because ideally any line/block of code that comes after the return statement is ignored because it ends the function execution.
};

let completeName = returnFullName("lucy", "B.", "Peter");
console.log(completeName);

console.log(returnFullName(firstName, middleName, lastName));

function returnAddress(city, country){
	let fullAddress = city + ", " + country;
	return fullAddress;
};

let address = returnAddress("shire", "England");
console.log(address)

function printPlayerInfo(userName, level, JobClass){
	/*console.log("Username: " + userName);
	console.log("Level: " + level);
	console.log("Job: " + JobClass);*/

	return "Username: " + userName + "\n" + "Level: " +level + "\n" + "Job: " + JobClass;
};

let user1 = printPlayerInfo("jani", 95, "rogue");
console.log(user1);

console.log(printPlayerInfo("Joseph", 50, "mage"));
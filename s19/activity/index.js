// console.log("hello for the other side");

/*
    
    1. Create a function called login which is able to receive 3 parameters called username,password and role.
        -add an if statement to check if the the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
            -if it is, return a message in console to inform the user that their input should not be empty.
        -add an else statement. Inside the else statement add a switch to check the user's role add 3 cases and a default:
                -if the user's role is admin, return the following message:
                    "Welcome back to the class portal, admin!"
                -if the user's role is teacher,return the following message:
                    "Thank you for logging in, teacher!"
                -if the user's role is a rookie,return the following message:
                    "Welcome to the class portal, student!"
                -if the user's role does not fall under any of the cases, as a default, return a message:
                    "Role out of range."
*/

function login(userName, password, role) {
	if (userName === undefined || userName === "" || password === undefined || password === "" || role === undefined || role === "") {
		return "input must not be empty";
	} else if (userName == "adminUser" && role == "admin") {
		return "Welcome back to class portal, " + role + "!";
	} else if (userName == "teacherUser" && role == "teacher") {
		return "Thank you for loggin in, " + role + "!";
	} else if (userName == "studentUser" && role == "student") {
		return "Welcome to the class portal, " + role + "!";
	} else {
		return "role out of range."
	}
}

let loginUser = login();
console.log("login()")
console.log(loginUser)

loginUser = login("", "password", "admin");
console.log("login(\"\", \"password\", \"admin\")");
console.log(loginUser);

loginUser = login("adminUser", "", "admin");
console.log("login(\"adminUser\", \"\", \"admin\")");
console.log(loginUser);

loginUser = login("adminUser", "password", "");
console.log("login(\"adminUser\", \"password\", \"\")");
console.log(loginUser);

loginUser = login("adminUser", "password", "admin");
console.log("login(\"adminUser\", \"password\", \"admin\")");
console.log(loginUser);

loginUser = login("teacherUser", "password", "teacher");
console.log("login(\"teacherUser\", \"password\", \"teacher\")");
console.log(loginUser);

loginUser = login("studentUser", "password", "student");
console.log("login(\"studentUser\", \"password\", \"student\")");
console.log(loginUser);

loginUser = login("studentUser", "password", "carpenter");
console.log("login(\"studentUser\", \"password\", \"carpenter\")");
console.log(loginUser);
/*
    2. Create a function called checkAverage able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        -add parameters appropriate to describe the arguments.
        -create a new function scoped variable called average.
        -calculate the average of the 4 number inputs and store it in the variable average.
        -research the use of Math.round() and round off the value of the average variable.
            -update the average variable with the use of Math.round()
            -console.log() the average variable to check if it is rounding off first.
        -add an if statement to check if the value of average is less than or equal to 74.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is F"
        -add an else if statement to check if the value of average is greater than or equal to 75 and if average is less than or equal to 79.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is D"
        -add an else if statement to check if the value of average is greater than or equal to 80 and if average is less than or equal to 84.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is C"
        -add an else if statement to check if the value of average is greater than or equal to 85 and if average is less than or equal to 89.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is B"
        -add an else if statement to check if the value of average is greater than or equal to 90 and if average is less than or equal to 95.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A"
        -add an else if statement to check if the value of average is greater than 96.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.

    Note: strictly follow the instructed function names.
*/
function checkAverage(a, b, c, d){
	let total = a + b + c + d;
	let average = total / 4;
	if (Math.round(average) <= 75) {
		return "Hello, student, your average is " + Math.round(average) + ". The letter equivalent is F";
	} else if (Math.round(average) >= 75 && Math.round(average) <= 79) {
		return "Hello, student, your average is " + Math.round(average) + ". The letter equivalent is D"	
	} else if (Math.round(average) >= 80 && Math.round(average) <= 84) {
		return "Hello, student, your average is " + Math.round(average) + ". The letter equivalent is C"	
	} else if (Math.round(average) >= 85 && Math.round(average) <= 89) {
		return "Hello, student, your average is " + Math.round(average) + ". The letter equivalent is B"	
	} else if (Math.round(average) >= 90 && Math.round(average) <= 95) {
		return "Hello, student, your average is " + Math.round(average) + ". The letter equivalent is A"	
	} else if (Math.round(average) >= 96) {
		return "Hello, student, your average is " + Math.round(average) + ". The letter equivalent is A+"	
	} else {
		return "your grades are not yet computed";
	}
}


let scores = checkAverage(71, 70, 73, 71);
console.log("checkAverage(71,70,73,71)");
console.log(scores);

scores = checkAverage(75, 75, 76, 78);
console.log("checkAverage(75,75,76,78)");
console.log(scores);

scores = checkAverage(80, 82, 83, 81);
console.log("checkAverage(80,82,83,81)");
console.log(scores);

scores = checkAverage(85, 86, 85, 86);
console.log("checkAverage(85,86,85,86)");
console.log(scores);

scores = checkAverage(91, 90, 92, 90);
console.log("checkAverage(91,90,92,90)");
console.log(scores);

scores = checkAverage(95, 96, 97, 96);
console.log("checkAverage(95,96,97,96)");
console.log(scores);

//Do not modify
//For exporting to test.js
try {
    module.exports = {
       login, checkAverage
    }
} catch(err) {

}
//console.log("hello");
/*
	Note: strictly follow the variable names.
	
	1. Debug the following code to return the correct value and mimic the output.
*/

	let num1 = 25;
	let num2 = 5;
	console.log("The result of num1 + num2 should be 30.");
	console.log("Actual Result:");
	console.log(num1 + num2);

	let num3 = 156;
	let num4 = 44;
	console.log("The result of num3 + num4 should be 200.");
	console.log("Actual Result:");
	console.log(num3 + num4);

	let num5 = 17;
	let num6 = 10;
	console.log("The result of num5 - num6 should be 7.");
	console.log("Actual Result:");
	console.log(num5 - num6);
		
/*

	2. Given the values below, calculate the total number of minutes in a year and save the result in a variable called resultMinutes.

*/
	let minutesHour = 60;
	let hoursDay = 24;
	let daysWeek = 7;
	let weeksMonth = 4;
	let monthsYear = 12;
	let daysYear = 365;

	let resultMinutes = daysYear * minutesHour * hoursDay;

	console.log("there are " + resultMinutes + " minuites in a year.")

/*
	3. Given the values below, calculate and convert the temperature from celsius to fahrenheit and save the result in a variable called resultFahrenheit.
*/
	let tempCelsius = 132;

	let resultFahrenheit = (tempCelsius * 9 / 5) + 32;

	console.log(tempCelsius + " degrees Celsius when converted to farenheheit is " + resultFahrenheit)

/*
	4a. Given the values below, identify if the values of the following variable are divisible by 8.
	   -Use a modulo operator to identify the divisibility of the number to 8.
	   -Save the result of the operation in a variable called remainder1.
	   -Log the value of the remainder in the console.
	   -Using the strict equality operator, check if the remainder is equal to 0. 
	   -Save the returned value of the comparison in a variable called isDivisibleBy8
	   -Log a message in the console if num7 is divisible by 8.
	   -Log the value of isDivisibleBy8 in the console.

*/
	let num7 = 165;
	let remainder1 = num7 % 8;

	console.log("The remainder of " + num7 + "devided by 8 is: " + remainder1);

	//Log the value of the remainder in the console.
	console.log("Is num7 divisible by 8?");
	//Log the value of isDivisibleBy8 in the console.
	let isDivisibleBy8 = num7 % 8; 
	console.log(isDivisibleBy8 === 0);

/*
	4b. Given the values below, identify if the values of the following variable are divisible by 4.
	   -Use a modulo operator to identify the divisibility of the number to 4.
	   -Save the result of the operation in a variable called remainder2.
	   -Log the value of the remainder in the console.
	   -Using the strict equality operator, check if the remainder is equal to 0. 
	   -Save the returned value of the comparison in a variable called isDivisibleBy4
	   -Log a message in the console if num8 is divisible by 4.
	   -Log the value of isDivisibleBy4 in the console.

*/
	let num8 = 348;
	let remainder2 = num8 % 4;
	console.log("te remainder of " + num8 + " divided by " + 4 + " is: " +remainder2);
	//Log the value of the remainder in the console.
	console.log("Is num8 divisible by 4?");
	let isDivisibleBy4 = num8 % 4;
	console.log(isDivisibleBy4 === 0);
	//Log the value of isDivisibleBy4 in the console.




	//Do not modify
	//For exporting to test.js
	try{
		module.exports = {
			num1,num2,num3,num4,num5,num6,resultMinutes,
			resultFahrenheit,remainder1,remainder2,
			isDivisibleBy4,isDivisibleBy8
		}
	} catch(err){

	}

//console.log("hello Ph");

// add

function addNum(numA, numB){
	let sum = numA + numB;
	console.log(sum);
};
console.log("Displayed sum of 5 and 15");
addNum(5, 15);
// subtract

function subNum (numC, numD){
	let sub = numC - numD;
	console.log(sub);
}
console.log("Displayed difference of 20 and 5");
subNum(20, 5);

// multiply

function multiplyNum (numE, numF){
	let multiply = numE * numF;
	return multiply;
}

// divide

function divideNum (numG, numH){
	let divide = numG / numH;
	return divide;
}

let product = multiplyNum(50, 10);
let quotient = divideNum(50, 10);
console.log("The product of 50 and 10")
console.log(product);
console.log("The qoutient of 50 and 10")
console.log(quotient);

function getCircleArea(radius){
	let area = 3.141592653589793238 * radius ** 2;
	return area.toFixed(2);
}

let circleArea =  getCircleArea(15);
console.log("The result of getting the area of a circle with 15 radius:")
console.log(circleArea)


function getAverage(a, b, c, d){
	let average = (a + b + c + d) / 4;
	return average;
}

let avarageVar = getAverage(20, 40, 60, 80);
console.log("The Average of 20, 40, 60 and 80")
console.log(avarageVar);

function checkIfPassed(score, total){
	let percentage = (score / total) * 100;
	let isPassed = percentage >= 75;
	return isPassed;
}

let scores = checkIfPassed(38, 50);
console.log("is 38/50 a passing score?")
console.log(scores);





//Do not modify
//For exporting to test.js
try {
	module.exports = {
		addNum,subNum,multiplyNum,divideNum,getCircleArea,getAverage,checkIfPassed
	}
} catch (err) {

}
//console.log("hello Ph");

// add

function addNum(numA, numB){
	let sum = numA + numB;
	console.log(sum);
};

// subtract

function subNum (numC, numD){
	let sub = numC - numD;
	console.log(sub);
}

subNum(8, 3);
addNum(5, 3);

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

let product = multiplyNum(6, 6);
let quotient = divideNum(10, 2);

console.log(product);
console.log(quotient);

function getCircleArea(radius){
	let area = 3.141592653589793238 * radius ** 2;
	return area;
}

let circleArea =  getCircleArea(50);
console.log(circleArea)


function getAverage(a, b, c, d){
	let average = (a + b + c + d) / 4;
	return average;
}

let avarageVar = getAverage(83, 82, 81, 80);
console.log(avarageVar);





//Do not modify
//For exporting to test.js
try {
	module.exports = {
		addNum,subNum,multiplyNum,divideNum,getCircleArea,getAverage,checkIfPassed
	}
} catch (err) {

}
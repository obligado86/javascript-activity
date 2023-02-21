// console.log("helo");


//ARRAYS

//array in programming is simply a list of data

let studentNumA = "2023-1921";
let studentNumB = "2023-1922";
let studentNumC = "2023-1923";
let studentNumD = "2023-1924";
//============================
let studentNumbers = ["2023-1921", "2023-1922", "2023-1923", "2023-1924"];

/*
	- Arrays are used to store multiple related values in a single variable
	- They are declared using square brackets ([]) also known as "Array Literals"
	- Commonly used to store numerous amounts of data to manipulate in order to perform a number of tasks
	- Arrays also provide access to a number of functions/methods that help in achieving this
	- A method is another term for functions associated with an object and is used to execute statements that are relevant to a specific object
	- Majority of methods are used to manipulate information stored within the same object
	- Arrays are also objects which is another data type
	- The main difference of arrays with an object is that it contains information in a form of a "list" unlike objects which uses "properties"

	syntax:

	let/const arrayName = [elementA, elementB, elementC,...];
*/

//common examples of arrays

let grades = [98.5, 94.3, 89.2, 90.1]; //number array.

let computerBrands = ["acer", "asus", "lenovo", "msi"]; // sring arrays

// Possible use of array but not recommended.
let mixedArray = [12, "asus", null, undefined, {}];

console.log(grades);
console.log(computerBrands);
console.log(mixedArray);

let myTasks = [
		'html',
		'javascript',
		'css',
		'sass'
	];

let city1 = "tokyo", city2 = "manila", city3 = "cebu";
// creating an array with values from variables
let cities = [city1, city2, city3];

console.log(myTasks);
console.log(cities);

console.log("=================================")
// [section] length property

// the length property allows us to get and set the total numbers of items/elements in an array

console.log(myTasks.length);
console.log(cities.length);

// .length property in string allows to get the total number of characters including white spaces
let fullName = "Sana Minatozaki";
console.log(fullName.length);

let blankArray = [];
console.log(blankArray.length);
console.log(blankArray);

// deleting elements in array
// deleting last item of an array
myTasks.length = myTasks.length-1;
console.log(myTasks.length);
console.log(myTasks);

// deleting using decrementation
cities.length--;
console.log(cities);

// we connot delete using .length property in strings
fullName.length = fullName.length-1;
console.log(fullName);

fullName.length--;
console.log(fullName);

// lengthen array

let theBeatles = ["john", "paul", "ringo", "gorge"];
console.log(theBeatles.length);
theBeatles.length++;
console.log(theBeatles);
console.log(theBeatles.length-1);

//assigning a value to a specific array index
// arrayNam[index] = "new value";
theBeatles[4] = "jimbo";
console.log(theBeatles);

console.log(theBeatles[2]);
console.log(myTasks[0]);

//console.log(grades[20]);

/*grades[20] = 90.5;
console.log(grades[20]);
console.log(grades);*/
//although this is working but this is not a good pracktice

let koponanNiEugene = ["eugene", "vincent", "alfred", "dennis"];

console.log(koponanNiEugene[3]);
console.log(koponanNiEugene[1]);

let member = koponanNiEugene[2];
console.log(member);

console.log("Array before reassingment");
console.log(koponanNiEugene);
koponanNiEugene[2] = "jeremiah";
console.log("array after reassignmnet");
console.log(koponanNiEugene);

let bullsLegend = ["jordan", "Pippen", "Rodman", "Rose", "Kukoc"];
let lastElementindex = bullsLegend.length - 1;
console.log(bullsLegend[lastElementindex]);

console.log(bullsLegend[bullsLegend.length - 1]);
console.log(bullsLegend[bullsLegend.length - 2]);

//adding items to the array
let newArray = [];
console.log(newArray);
newArray[0] = "tzuyu"
console.log(newArray);
newArray[1] = "mina";
console.log(newArray);
console.log(newArray.length);
newArray[newArray.length] = "momo";
console.log(newArray);
console.log(newArray.length);
newArray[newArray.length] = "sana";
console.log(newArray);

/*
	Mini Activity: (10 minutes)

	Part 1: Adding a value at the end of an array
		- Create a function which is able to receive a single argument and add the input at the end of the superheroes array.
		- Invoke and add an argument to be passed to the function.
		- Log the superheroes array in the console.

	Part 2:Retrieving an element using a function.
		- Create a function which is able to receive an index number as a single argument.
		- Return the element/item accessed by the index.
		- Create a global variable named heroFound and store/pass the value returned by the function.
		- Log the heroFound variable in the console.
*/

let superHeroes = [];
function addArrayFunc(arrayValue) {
	return superHeroes[superHeroes.length] = arrayValue;
}

addArrayFunc("ben 10");
addArrayFunc("ironman")
console.log(superHeroes);

function retriveElement(num) {
	return superHeroes[num];
};

console.log(retriveElement(1));

// loop over an array

for(let num = 0; num < newArray.length; num++){
	console.log(newArray[num])
};

let numArr = [5, 12, 30, 46, 50, 98];
for(let num = 0; num < numArr.length; num++){
	if(numArr[num] % 5 === 0 ) {
		console.log(numArr[num] + " is divisible by 5.");
	} else {
		console.log(numArr[num] + " is not divisible by 5.")
	}
};

// Multidimentional array

let chesBoard = [
		["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"], //index 0
		["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"], //index 1
		["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"], //index 2
		["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"], //index 3
		["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"], //index 4
		["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"], //index 5
		["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"], //index 6
		["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"], //index 7
	];

console.log(chesBoard);
console.log(chesBoard[1][4]);
console.log("Pawn move to: " + chesBoard[7][4]);

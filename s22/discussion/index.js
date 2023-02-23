//console.log("hello ph");

//Array methods

// mutator methods
/*

	1 mutator methods
		-seek to modify the content of an array.
		-mutator method are functions that mutate or change an array after they are created. these methods manipulate the original array by perfoming various tasks such as adding or removing elements.

*/

let fruits = ["apple", "banana", "orange", "mango"];

/*

	push
		-adds an element at the end of an array and it returns array's length.

*/

console.log("Current fruits array: ");
console.log(fruits);

// adding elements

let fruitLength = fruits.push("pineapple");
console.log(fruitLength);
console.log("mutated array using push() method.");
console.log(fruits);

fruits.push("avocado", "jackfruit", "guava", "pomelo");
console.log(fruits);

/*

	pop()
		-removes the last element in our array and returns the removed element (when value is passed in another variable.)

*/

let removeFruit = fruits.pop();
console.log(removeFruit);
console.log("Mutated array using pop() method");
console.log(fruits);
fruits.pop();
console.log(fruits);

/*

	unshift();
	 	-adds one or more elements at the beggining of an array and returns the length of the array (when value is passed in another variable.)

	 	syntax:

	 		arrayName.unshift(element);
	 		arrayName.unshift(elementA, elementB);

*/

let unshiftLength = fruits.unshift("lemon");
console.log(unshiftLength);
console.log("mutated array using unshift() method");
console.log(fruits);

fruits.unshift("kiwi", "strawberry");
console.log(fruits);

/*

	shift();
		removes an element at the beggining of our array and returns the remove element when stored in a variable.

*/
let shiftFruit = fruits.shift();
console.log(shiftFruit);
console.log("mutated array usiing shift() method");
console.log(fruits);

/*

	splice();
		allow to simontaneously remove elements from a specified index number and add an element.

		syntax: 
			arrayName.splice(strartingindex, deletedCount, elementsToBeReplace);

*/

let spliceFruits = fruits.splice(1, 2, "cherry", "dragon fruit");
console.log(spliceFruits);
console.log("mutated array using splice() method");
console.log(fruits);

//using splice without adding elements.
fruits.splice(5, 3);
console.log(fruits);
/* 
    sort()
        - Rearranges the array elements in alphanumeric order

        Syntax:
            arrayName.sort();
*/

fruits.sort();
console.log("mutaed array using sort() method");
console.log(fruits);

let mixedArr = [50, 18, 1, 8, "Emvir", "adrian", undefined, [], "marvin", "joseph", "Zebra", "!", "@", "#", "&", "A", "B", "c"];

console.log(mixedArr.sort());

/*

	reverse();
		- reverses the order of the element in an array'

		syntax:
		arrayNam.reverse();
*/

fruits.reverse();
console.log("mutated array using reverse() method.");
console.log(fruits);

// shorthand for decending order
//console.log(fruits.sort().reverse());


/*MINI ACTIVITY:
 - Create a function which will allow us to list fruits in the fruits array.
 	-- this function should be able to receive a string.
 	-- determine if the input fruit name already exist in the fruits array.
 		*** If it does, show an alert message: "Fruit already listed on our inventory".
 		*** If not, add the new fruit into the fruits array ans show an alert message: "Fruit is not listed in our inventory."
 	-- invoke and register a new fruit in the fruit array.
 	-- log the updated fruits array in the console
*/


function registerFruit(fruitName) {
 		let doesFruitExist = fruits.includes(fruitName);

 		if (doesFruitExist){
 			alert(fruitName + "is already on our inventory");
 		} else {
 			fruits.push(fruitName);
 			//break;
 			alert("Fruit is now listed in our inventory");
 		}
 	}

 //registerFruit("strawberry");
 console.log(fruits);


/* 
    2. Non-Mutator Methods
        - these are methods/functions that do not modify or change an array they are created. These methods also do not manipulate the original array but still performs various tasks such as returning elements from an array.
*/

let countries = ["US", "PH", "Can", "SG", "TH", "PH", "FR", "DK", "PH"];
console.log(countries);

/*

	indexOf();
		-returns the index number of the first mathing found in ana array. if not match was found the result will be -1. the search process will be done from our first element proceeding to the last element.

		syntax:
			arrayName.indexOf(searchValue);
			arrayName.indexOf(searchValue, fromIndex);

*/

let firstIndex = countries.indexOf("PH");
console.log(firstIndex);
firstIndex = countries.indexOf("PH", 4);
console.log(firstIndex);
firstIndex = countries.indexOf("PH", 7); //display -1 means not found
console.log(firstIndex);
firstIndex = countries.indexOf("DE"); //display -1 means not found
console.log(firstIndex);
firstIndex = countries.indexOf("PH", -1); //display -1 means not found
console.log(firstIndex);

/*
	lastIndexOf()
		- returns the index number of the last matching element found in an array. The search process will be done from the last element proceeding to the first element.

		syntax:
			arrayName.lastIndexOf(searchValue);
			arrayName.lastIndexOf(searchValue, startingFromIndex);

*/

let LastIndex = countries.lastIndexOf("PH");
console.log("result of lastIndexOf(): " + LastIndex);

lastIndexOf = countries.lastIndexOf("PH", 4);
console.log("result of lastIndexOf(): " + LastIndex);

/*

	slice();
		- portions/slice elements form our array and return a new array.

		syntax:
			arrayName.slice(startingIndex);
			arrayName.slice(startingIndex, endingINdex);

*/

console.log(countries);

// sliceing elements from specified index to the last element
let sliceArrayA = countries.slice(2);
console.log("result of slice() method");
console.log(sliceArrayA);
console.log(countries);

// slicing element from a specified index to another index (endingIndex is not included to the slice)
let sliceArrayB = countries.slice(0, 4);
console.log("result of slice() method");
console.log(sliceArrayB);


//slicing elements starting from last element of an array
let sliceArrayC = countries.slice(-3);
console.log("result of slice() method");
console.log(sliceArrayC);

/*

	toString();
	-returns an array as a string separated by commas.
		-is used internally on JS when an object needs to be displayed as a text (like in HTMl), or when an object needs to be used as  string

		Syntax:
			ArrayName.tostring();

*/

let stringArray = countries.toString();
console.log("result of toString() method: ");
console.log(stringArray);

/*

	concat();
		-- combines two or more arrays and returns the combined result
		
		Syntax:
			arrayA.concat(rrayB);
			arrayA.concat(elementA);

*/

let taskA = ["driving", "climbing", "cooking"];
let taskB = ["playing", "baking"];
let taskC = ["coding", "programming"];

let tasks = taskA.concat(taskB);
console.log("result of concat() method: ");
console.log(tasks);

//combile multiple arrays
let allTasks = taskA.concat(taskB, taskC);
console.log(allTasks);

// combining arrays with elements (similar to push());
let combineTasks = taskA.concat("shopping", "sleeping");
console.log(combineTasks);


/*

	join();
		- returns an array as a string.
		- does not change the original array.
		- any separator can be speciified. The default separator is comma (,).

		syntax:
			arrayName.join("separatorSymbol");

*/

let students = ["james", "jhun", "jimbo"];
console.log(students);
console.log(students.join("|"));
console.log(students.join(" "));
console.log(students.join(" - "));

/*

	iteration methods
		- are loops designed to perform repetitive tasks on arrays. This is useful for manipulating array data resulting in complex tasks.
		- normally work with a function is supplied as an argument.
		- aims to evaluate each element in an array.

*/

/*

	forEach();
		-similar to for loop that iterates on each array element

		syntax:
			arrayName.forEach(function(individualElement){
				statement/business logic
			})

*/

allTasks.forEach(function(task){
	console.log(task);
});

let filteredTask = []
allTasks.forEach(function(task){
	console.log(task);

	//characters of the elements is greater than 10 (this is now the string)
	if(task.length > 10){
		//add the element/item to the filtered array
		filteredTask.push(task);
	}
});


console.log("result of for each method: ");
//console.log(filteredTask);
console.log(allTasks);

/*

	Map()
		- Iterates on each element AND returns new array with different values depending on the result of the function's operation
		- This is useful for performing tasks where mutating/changing the elements are required
		- Unlike the forEach method, the map method requires the use of a "return" statement in order to create another array with the performed operation

		Syntax:

			let/const resultArray = arrayName.map(function(individualElement){
				return statement;
			});

*/

let numbers = [1, 2, 3, 4, 5];

let numberMap = numbers.map(function(number){
	return number * number;
});

console.log(numbers);
console.log("result of map() method:");
console.log(numberMap);

/*

	every()
		- checks if all elements in an array met the given condition. returns a "true" value if all elements meet the condition and "false" if otherwise.

		Syntax:
			let/const resultArray = arrayName.every(function(individualelement){
				return expression/condition
			});

*/

let allValid = numbers.every(function(number){
	return (number < 5);
});

console.log("result of every() method:");
console.log(allValid);

/*

		some();
			- checks if at least one element in the array meet the given condition. Returns a "true" value is at least one element meets the given condition and false if otherwise.

	Syntax:
		let/const resultArray = arrayName.some(function(individualelement){
			return expression/condition
		});

*/

let someValid = numbers.some(function(number){
	return (number <= 1);
});

console.log("result of some() method:");
console.log(someValid);

/*
	filter()
		- returns a new array that contains elements which meet the given condiiton. Returns an empty array if no elements were found that satisfy the given condition.

	Syntax:
		let/const resultArray = arrayName.filter(function(individualelement){
			return expression/condition
		});
*/

let filterValid = numbers.filter(function(number){
	return (number < 3);
});

console.log("result of filter() method:");
console.log(filterValid);

let nothingFound = numbers.filter(function(number){
	return (number == 0);
});

console.log("result of filter() method:");
console.log(nothingFound);

let filterNumbers = [];
numbers.forEach(function(number){
		if (number < 4){
			filterNumbers.push(number);
		}
});

console.log("result of filtering using forEach() method:");
console.log(filterNumbers);
console.log(numbers);

/*

	includes()
		- checks if the argument passed can be found in the array.
		- methods can be "chained" using them one after another. The result of the first methid is being used on the second method until all the "chained" methods have been resolved.

*/

let products = ["mouse", "keyboard", "LAPTOP", "monitor"];

let filteredProducts = products.filter(function(product){
		return product.toLowerCase().includes("a");
});

console.log(filteredProducts);



// reduce

/*
	reduce()

		- Evaluates elements from left to right and returns/reduces the array into a single value
        
        - The "accumulator" parameter in the function stores the result for every iteration of the loop
		reduce()
		- The "currentValue" is the current/next element in the array that is evaluated in each iteration of the loop
        - How the "reduce" method works
            1. The first/result element in the array is stored in the "accumulator" parameter
            2. The second/next element in the array is stored in the "currentValue" parameter
            3. An operation is performed on the two elements
            4. The loop repeats step 1-3 until all elements have been worked on
		
		- Syntax
            let/const resultArray = arrayName.reduce(function(accumulator, currentValue) {
                return expression/operation
            })


*/

// fibonacci 


// let numbers = [1, 2, 3, 4, 5];

let iteration = 0;

let reducedArray = numbers.reduce(function(acc, curr){
	console.warn(`current iteration: ${++iteration}`);

	console.log(`acumulator: ${acc}`);
	console.log(`currentValue: ${curr}`);

	// operation to return/reduce the array into a single value
	return acc + curr;

});
console.log("result for reduce() method: " + reducedArray)

let list = ["hello", "batch", "253"];

let reduceJoin = list.reduce(function(acc, curr){
	/*return acc + " " + curr;*/
	return `${acc} ${curr}`;
});

console.log(reduceJoin);
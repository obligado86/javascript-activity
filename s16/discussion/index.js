// console.log("hello");

// [section] Arithmitic Operators

let x = 81, y = 9;

let sum = x + y;
console.log("result: " + sum);

let difference = x - y;
console.log("result: " + difference);

let product = x * y;
console.log("result: " + product);

let quotient = x / y;
console.log("result: " + quotient);

let reminder = x % y;
console.log("result: " + reminder);

// [section] Assignment operators

// Basic Assignment Operator (=)
        // The assignment operator assigns the value of the **right** operand to a variable.
console.log("====================operator========================");
let assignNumber = 8;

// addition assignment operator
/*assignNumber = assignNumber + 2;
console.log("result: " + assignNumber);*/

assignNumber += 2;
console.log("result: " + assignNumber);

assignNumber -= 2;
console.log("result: " + assignNumber);

assignNumber *= 2;
console.log("result: " + assignNumber);

assignNumber /= 2;
console.log("result: " + assignNumber);

assignNumber %= 2;
console.log("result: " + assignNumber);

console.log("=====================mdas/pemdas===================");

// JS will foloow the Mdas Rule;
// 1. 3 * 4 = 12 then 12 / 5 = 2.4, then 1 + 2 = 3, then 3 - 2.4 = result 0.6 

let mdas = 1 + 2 - 3 * 4 / 5;
console.log("result: " + mdas);

// pemdas rule

let pemdas = 1 + (2 - 3) * (4 / 5);
console.log("result: " + pemdas);

console.log("====================increment=======================");

// [section] Increment and decrement


// Operators that add or subtract values by 1 and reassigns the value of the variable where the increment/decrement was applied.


let z = 1;

let increment = ++z; //pre increment

console.log("result: " + increment);
console.log("result: " + z);

increment = z++; //post increment

console.log("result: " + increment);
console.log("result: " + z);

console.log("=================descriment======================");

let decrement = --z; //predecrement.
console.log("result: " + decrement);
console.log("result: " + z);

decrement = z--; //post increment

console.log("result: " + decrement);
console.log("result: " + z);

console.log("===================Coercion=====================")

// [section] type corecion

/*
            - Type coercion is the automatic or implicit conversion of values from one data type to another
            - This happens when operations are performed on different data types that would normally not be possible and yield irregular results
            - Values are automatically converted from one data type to another in order to resolve operations
        */

let numA = "10";
let numB = 12;
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let numC =16, numD = 14;
let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

let numE = true + 1;
console.log(numE);

let numF = false + 1;
console.log(numF);

console.log("===============comparison operator============");

//[section] Comparison Operator.

// Equality operator
/* 
    - Checks whether the operands are equal/have the same content
    - Attempts to CONVERT AND COMPARE operands of different data types
    - Returns a boolean value
*/
console.log("equality");

let juan = "juan";

console.log(1 == 1);
console.log(1 == 2);
console.log(1 == "1");
console.log("juan" == "juan");
console.log(juan == "juan");

// inequality operator
/* 
            - Checks whether the operands are not equal/have different content
            - Attempts to CONVERT AND COMPARE operands of different data types
        */
console.log("inequality");

console.log(1 != 1);
console.log(1 != 2);
console.log(1 != "1");
console.log("juan" != "juan");
console.log(juan != "juan");

// strick equality operator
/* 
            - Checks whether the operands are equal/have the same content
            - Also COMPARES the data types of 2 values
            - JavaScript is a loosely typed language meaning that values of different data types can be stored in variables
            - In combination with type coercion, this sometimes creates problems within our code (e.g. Java, Typescript)
            - Some programming languages require the developers to explicitly define the data type stored in variables to
- Some programming languages require the developers to explicitly define the data type stored in variables to prevent this from happening
            - Strict equality operators are better to use in most cases to ensure that data types provided are correct
        */

console.log("strick equality");

console.log(1 === 1); //returns true
console.log(1 === 2); //returns false
console.log(1 === "1"); //returns false
console.log("juan" === "juan"); //returns true
console.log(juan === "juan"); //returns true
console.log(0 === false); //returns false
console.log(false === false); //returns true

// strict inequality

/* 
            - Checks whether the operands are not equal/have the same content
            - Also COMPARES the data types of 2 values
        */
console.log("strick inequality");

console.log(1 !== 1); //returns false
console.log(1 !== 2); //returns true
console.log(1 !== "1"); //returns true
console.log("juan" !== "juan"); //returns fasle
console.log(juan !== "juan"); //returns fasle
console.log(0 !== false); //returns true
console.log(false !== false); //returns fasle


console.log("===========relational operator=======")

// [section] Relational Operator.

//Some comparison operators check whether one value is greater or less than to the other value.

//returns bollean value

let a = 50;
let b = 65;

//greater than operator
let greaterThan = a > b;
console.log("50 > 65 = " + greaterThan); //returns false
// less than operator
let lessThan = a < b;
console.log("50 < 65 = " + lessThan); //returns true
let gtorEqul = a >= b;
// greater than or equal operator
console.log("50 >= 65 = " + gtorEqul); //returns false
let ltorEqul = a <= b;
// less than or equal operator
console.log("50 <= 65 = " + ltorEqul); //returns true

console.log(a > '30'); //returns true

console.log(a > 'twenty'); //returns false
let str = 'forty'
console.log(b >= str); //returns false


console.log("=============logical operator===============");
// [section] logical operator.

let isLegalAge = true;
let isRegistered = false;

let allRequirmentsMet = isLegalAge && isRegistered;
console.log("isLegalAge && isRegistered = " + allRequirmentsMet); //returns false

let someRequirmentsMet = isLegalAge || isRegistered;
console.log("isLegalAge || isRegistered = " + someRequirmentsMet); //returns true

let someRequirmentsNotMet = !isRegistered;
console.log("!isRegistered = " + someRequirmentsNotMet); //returns true
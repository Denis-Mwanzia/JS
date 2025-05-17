// Variables - are containers for storing data values.
// Ways to declare variable - let, var, const
// Var - Old way of declaring variables and global scope
// Let - modern and block scope
// Const - cannot reassigned and block scope.
// Syntax:
let name = 'Denis';
const idNumber = 47214908;
var country = 'Kenya';
console.log(`My name is ${name}, my identification number is ${idNumber} and I am from ${country}.`)

// Hoisting - means declaration is moved up
// variables declared with var keyword are hoisted unlike variable declared with either const or let keyword.
// Example
console.log(`My age is ${age}`); // OUTPUT: My age is undefined
console.log(`My phone number is ${phoneNumber}`); // OUTPUT: ReferenceError: Cannot access 'phoneNumber' before initialization


var age = 25;
let phoneNumber = "0113422330"
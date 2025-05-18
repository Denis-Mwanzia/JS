// Data types defines the type of data a variable stores/holds.
// Javascript is a dynamically types and therefore no need to define the variable as the interpreter does that on its own.
// Data Types can be divided into:
// 1. Primitive Datatypes - string, number, Boolean, Null, Undefined, symbol, bigint
// 2. None-Primitive Datatypes - array, object,function
// Examples
let fullName = 'Denis Mwanzia'; //string - array of characters
let age = 25; // Number - integers and decimals
let car = null; // Null - empty value
let isMarried = false; // Boolean - Logical values true, false
let idNumber; // Undefined - variable declared, value not assigned
const id = Symbol('id'); // symbol - unique identifier
const bigNumber = 123456780n; // bigint - for big integers

// typeof keyword is used to check the datatype of a variable
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof car);
console.log(typeof idNumber);
console.log(typeof id);
console.log(typeof bigNumber);

//Non-Primitive Variables
// Examples
let student = {
  name: 'Denis',
  age: 25,
  isMarried: false,
}; // Object - key-value datatype

let fruits = ['Apple', 'Banana', 'Orange']; // Array - collection of items

let sum = function sum(a, b) {
  return a + b;
}; // Function - a block of code which executes a given task)

console.log(typeof student);
console.log(typeof fruits);
console.log(typeof sum);

// Primitive vs reference type
// Primitive types are immutable, stored by value.
// Examples: string, number, boolean, null, undefined, bigint, symbol
// Reference types are mutable, stored by reference.
// Example: object, function, array

// Mini Project: Simple Student Info App (Console-Based)
// We'll create a simple JavaScript app to:

// 1. Store a student's personal info (primitive types)
// 2. Track their subjects and scores (reference types)
// 3. Compute average score
// 4. Print a structured summary

// Student basic information
let name = 'Denis';
let studentID = 'INTE/MG/1947/05/18';
let gender = 'Male';
let isEnrolled = true;

// Enrolled subjects
let subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Kiswahili',
];

// Scores
let scores = {
  Mathematics: 75,
  Physics: 80,
  Chemistry: 70,
  Biology: 85,
  English: 90,
  Kiswahili: 78,
};

// Average Score
let total = 0;
for (let subject of subjects) {
  total += scores[subject];
}

let averageScore = total / subjects.length;

// Print Summary
console.log(
  '======================================== Student Summary ========================================'
);
console.log(`Student Name: ${name}`);
console.log(`Student ID: ${studentID}`);
console.log(`Gender: ${gender}`);
console.log(`Enrolled: ${isEnrolled ? 'Yes' : 'No'}`);
console.log('Subjects and Scores:');
for (let subject of subjects) {
  console.log(`${subject}: ${scores[subject]}`);
}

console.log(`Average Score: ${averageScore.toFixed(2)}`);

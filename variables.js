/* here we are gonna learn about variales in javascript

 here are 3 ways to declare a variable in javascript
 1. var
 2. let
 3. const
*/

// var is function scoped
var name = "John";
console.log(name); // Output: John

// let is block scoped
let age = 25;
console.log(age); // Output: 25

// const is also block scoped and cannot be reassigned
const pi = 3.14;
console.log(pi); // Output: 3.14

// trying to reassign a const variable will result in an error
// pi = 3.14159; // Uncommenting this line will throw an error

// Variables can hold different data types
var isStudent = true; // boolean
let score = 95.5;    // float
const greeting = "Hello!"; // string

console.log(isStudent); // Output: true
console.log(score);     // Output: 95.5
console.log(greeting);  // Output: Hello!

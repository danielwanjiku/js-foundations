//what are operators in javascript?
//operators are used to perform operations on variables and values.they include:
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators

// 1. Arithmetic Operators
// Arithmetic operators are used to perform mathematical operations on numbers. They include:
// + (Addition)
let sum = 5 + 3;
console.log(sum); // Output: 8

// - (Subtraction)
let difference = 10 - 4;
console.log(difference); // Output: 6

// * (Multiplication)
let product = 6 * 7;
console.log(product); // Output: 42
// / (Division)
let quotient = 20 / 5;
console.log(quotient); // Output: 4
// % (Modulus)
let remainder = 10 % 3;
console.log(remainder); // Output: 1

// 2. Assignment Operators
// Assignment operators are used to assign values to variables. They include:
// = (Assignment)
let x = 10;
console.log(x); // Output: 10
// += (Addition Assignment)
x += 5;
console.log(x); // Output: 15
// -= (Subtraction Assignment)
x -= 3;
console.log(x); // Output: 12
// *= (Multiplication Assignment)
x *= 2;
console.log(x); // Output: 24
// /= (Division Assignment)
x /= 4;
console.log(x); // Output: 6
// %= (Modulus Assignment)
x %= 4;
console.log(x); // Output: 2

// 3. Comparison Operators
// Comparison operators are used to compare two values and return a boolean result. They include:
// == (Equal to)
let a = 5;
let b = 5;
console.log(a == b); // Output: true
// === (Strict Equal to)
let c = "5";
console.log(a === c); // Output: false
// != (Not Equal to)
console.log(a != b); // Output: false
// > (Greater than)
console.log(a > 3); // Output: true
// < (Less than)
console.log(a < 10); // Output: true
// >= (Greater than or equal to)
console.log(a >= 5); // Output: true
// <= (Less than or equal to)
console.log(a <= 5); // Output: true

// 4. Logical Operators
// Logical operators are used to combine multiple conditions and return a boolean result. They include:
// && (Logical AND)
// The && operator returns true if the first operand is false otherwise the 2nd operand.
let isAdult = false;
let hasLicense = true;
console.log(isAdult && hasLicense); // Output: false

// || (Logical OR)
// The || operator returns true if the first operand is true otherwise the 2nd operand.
let isSunny = true;
let isWarm = false;
console.log(isSunny || isWarm); // Output: true

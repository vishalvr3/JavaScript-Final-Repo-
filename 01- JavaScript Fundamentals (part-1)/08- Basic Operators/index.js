/*
What is an operator?

An operator basically allows us to transform value or combine values.

There are many categories of operators-
Mathematical (+, -, *, /, **, %)
Comparison (to produce boolean values) (==, ===, !=, !==, >,<,>=,<=)
Logical (&&, ||, !)
Assignment (=)
*/

// Math/ Arithmetical operators
const now = 2037;
// const ageVishal = 2037 - 1996;
// const ageJustice = 2037 - 1949;
const ageVishal = now - 1996;
const ageJustice = now - 2020;
console.log(ageVishal, ageJustice);

console.log(ageVishal * 2, ageVishal / 10, 2 ** 3); //2**3 means 2 to the power of 3 = 2**2*2

const firstName = "Vishal";
const lastName = "Chauhan";
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 => x = 15 + 10 = 25
x *= 4; // x = x * 4 => x = 25 * 4 = 100
x++; // x = x + 1 => 100 + 1 => 101
x--; // x = x - 1 => 100 - 1 => 100
x--; // x = x - 1 => 100 - 1 => 99
console.log(x);

// COmparison operators
console.log(ageVishal > ageJustice);
console.log(ageJustice >= 18);

const isFullAge = ageJustice >= 18;

console.log(now - 1991 > now - 2018);

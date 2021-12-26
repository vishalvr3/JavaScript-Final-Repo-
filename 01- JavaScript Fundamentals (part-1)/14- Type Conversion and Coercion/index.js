/*
👉🏽 Type Conversion:
                Type conversion is when we manually convert from one type to another.
👉🏽 Type Coercion:
                Type Coercion is when JavaScript automatically converts types behind the scenes for us.
*/

// Type Conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 "1991"
console.log(Number(inputYear) + 18); // 2009

console.log(Number("vishal")); // NaN
console.log(typeof NaN); // number, it's still a number but not a valid number

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " Year's old"); // number converting to string
console.log("23" - "10" - 3); // 10 with typeof number
console.log("23" + "10" + 3); // 23103
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

// Guess the output
let n = "1" + 1; // 11 with typeof string
n = n - 1; // 10 with typeof number
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // 95 with typeof string
console.log("10" - "4" - "3" - 2 + "5"); // 15 with type of string

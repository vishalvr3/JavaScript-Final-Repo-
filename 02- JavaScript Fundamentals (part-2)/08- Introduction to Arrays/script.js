"use strict";

/*
👉🏽 Arrays:
        Array is the one of the most important type of Data Structure in JS.
        Second is Objects.

    An array is like a big container into which we can throw variables and then later reference them.

👉🏽 Creating array using array constructor :
                            const years = new Array(1991, 1984, 2008, 2020);
                            console.log(years);
*/

const friend1 = "Manish";
const friend2 = "Ravi";
const friend3 = "Rohit";
const friend4 = "Shiv";
const friend5 = "Ram";

// What if we have 100 friends???!! then we have to create 100 variables..🥵  which will be really painful. At that point comes the real savior "Array" 😎

const friends = ["Manish", "Ravi", "Rohit", "Shiv", "Ram", "Mayank", "Madhur"];

console.log(friends); // logging the array
console.log(friends[0]); // extracting and logging the first element of array
console.log(friends[3]); // extracting and logging the fourth element of array

console.log(friends.length); // 5
console.log(friends[friends.length - 1]); // extracting the last element of array

friends[2] = "Jay"; // replace element with another value
console.log(friends);

// friends = ["yo", "ye", "yi"];
// console.log(friends); // asignment to constant variable

const firstName = "vishal";
const vishal = [firstName, "Singh", 2037 - 1996, "programmer", friends];
console.log(vishal);
console.log(vishal.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)); // error NaN, can /

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// storing ages in an array (NOTED POINT: Array accepts an expression)
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

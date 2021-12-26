/*
Strings are a very important part of programming.
Here we'll learn about an easy way to build string using "template literals"
*/

const firstName = "Vishal";
const profession = "student";
const birtYear = 1996;
const year = 2009;

// const vishal = 'I\'m ' + firstName + ', a ' + (year-birtYear) + 'years old' + profession + '!' // totally painful and time consuming
// console.log(vishal);

const vishalNew = `I'm ${firstName}, a ${
  year - birtYear
} years old ${profession}!`;
console.log(vishalNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
");

console.log(`String with
multiple
lines`);

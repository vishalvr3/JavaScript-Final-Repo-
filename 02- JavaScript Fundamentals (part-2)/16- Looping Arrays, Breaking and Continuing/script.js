"use strict";

/*
One of the most used applications of For loop is to loop through arrays.

👉🏽 continue:
            So continue is to exit the current iteration of the loop and continue to the next one.
👉🏽break:
            break is used to completely terminate the whole loop.
*/

const vishalArray = [
  "Vishal",
  "Chauhan",
  2037 - 1996,
  "Developer",
  ["Vishal", "RT", "Singh", "Manish", "Rahi", "Rohit"],
  true,
];
const types = [];

// looping through the vishalArray and logging all of the elements
for (let i = 0; i <= vishalArray.length - 1; i++) {
  // Reading from vishalArray array
  console.log(vishalArray[i], typeof vishalArray[i]);

  // Filling types array
  // types[i] = typeof vishalArray[i];
  types.push(typeof vishalArray[i]);
}
console.log(types);

// practical use of for loop, looping and calculating and storing ages in an array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

/////////////  Continue and Break ////////////
console.log("------ ONLY STRINGS ------");
for (let i = 0; i <= vishalArray.length - 1; i++) {
  if (typeof vishalArray[i] !== "string") continue;
  console.log(vishalArray[i], typeof vishalArray[i]);
}

console.log("------ ONLY NUMBERS ------");
for (let i = 0; i <= vishalArray.length - 1; i++) {
  if (typeof vishalArray[i] !== "number") continue;
  console.log(vishalArray[i], typeof vishalArray[i]);
}

console.log("--------- BREAK WITH NUMBER --------");
for (let i = 0; i <= vishalArray.length - 1; i++) {
  if (typeof vishalArray[i] === "number") break;
  console.log(vishalArray[i], typeof vishalArray[i]);
}

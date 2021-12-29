"use strict";

/*
JavaScript has some builtin functions that we can  basically apply directly on arrays and we call it methods
*/

// Some Basic Useful Array Methods

const friends = [
  "Abhimanyu",
  "Bhishma",
  "Chitravahana",
  "Dronacharya",
  "Eklavya",
  "Fish",
  "Ghatotkacch",
];

// Adding element (both methods returns the length of new array)
const newLength = friends.push("Hanuman"); // adding element to the last of array
friends.unshift("Oooo"); // adding element in the beginning of an array
console.log(friends);
console.log(newLength);

// Removing element (both methods returns the removed element)
const last = friends.pop(); // removing element from the end of an array
friends.shift(); // removing element from the beginning of an array
console.log(friends);
console.log(last);

// Position of an element in array
console.log(friends.indexOf("Fish"));
console.log(friends.indexOf("Bhishma"));
console.log("YooOO");
console.log(friends.indexOf("Yooo")); // -1 , if does not exist

console.log(friends.includes("Dronacharya")); // true
console.log(friends.includes("Drona")); // false

// since includes methods returns booleans, we can use it to write conditionals
if (friends.includes("Bhishma")) {
  console.log("Bheeshmaaa Pratigya");
} else {
  console.log("Nooooo");
}

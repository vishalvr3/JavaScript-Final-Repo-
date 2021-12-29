"use strict";

/*
Here we'll learn how to retrieve data from the objects.
and also how to change data in object using both dot and bracket notation
*/

const vishal = {
  firstName: "Vishal",
  lastName: "Chauhan",
  age: 2037 - 1991,
  job: "Developer",
  friends: ["Vishal", "RT", "Singh", "Manish", "Ravi"],
};

console.log(vishal); // in objects properties(key) are ordered alphabetically

// Retrieving element
console.log(vishal.lastName); // dot notation
console.log(vishal["firstName"]); // bracket notation

const nameKey = "Name";
console.log(vishal["first" + nameKey]); // the bracket notation can take an expression.
console.log(vishal["last" + nameKey]);

// console.log(vishal."last" + nameKey); // the same wont work with dot notation

const interestedIn = prompt(
  "What do you want to know abput Vishal? Choose between firstName, lastName, age, job, and friends "
);
console.log(vishal.interestedIn); // undefined, as we don't have any interestedIn property on the object
console.log(vishal[interestedIn]);

if (vishal[interestedIn]) {
  console.log(vishal[interestedIn]);
} else {
  console.log("Wrong request");
}

vishal.location = "Japan";
vishal["insta"] = "nightfuryam36";
console.log(vishal);

/*
**************** Assignment ************
write dynamially- 
    "Vishal has XXXX friends, and his best friend is called Ravi"
*/

//////////////////// My Solution ///////////////

// Dot Notation
console.log(
  `${vishal.firstName} has ${
    vishal.friends.length
  } and his best friend is called ${vishal.friends[vishal.friends.length - 1]}`
);

// Bracket Notation
console.log(
  `${vishal.firstName} has ${
    vishal["friends"].length
  } and his best friend is called ${
    vishal["friends"][vishal.friends.length - 1]
  }`
);

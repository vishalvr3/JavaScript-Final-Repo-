"use strict";

const vishalArray = [
  "Vishal",
  "Chauhan",
  2037 - 1996,
  "Developer",
  ["Vishal", "RT", "Singh", "Manish", "Rahi", "Rohit"],
  true,
];

for (let i = vishalArray.length - 1; i >= 0; i--) {
  console.log(i, vishalArray[i]);
}

// loop inside loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------ STARTING EXERCISE ${exercise} -------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏽‍♀️`);
  }
}

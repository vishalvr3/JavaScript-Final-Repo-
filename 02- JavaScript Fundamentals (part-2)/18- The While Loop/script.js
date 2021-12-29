"use strict";

// for-loop for reference
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repitition ${rep} 🏋🏽‍♀️`);
}

/// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repitition ${rep} 🏋🏽‍♀️`);
  rep++;
}

// Dice question (roll the dice until it gets 6)
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log(`Loop is about to end....`);
  }
}

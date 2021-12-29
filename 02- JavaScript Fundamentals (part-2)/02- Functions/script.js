"use strict";

/*
👉🏽 Function:
      Function are the fundamental building block of real world JS application.
      A function is a piece of code that we can use over and over again.
      Functions helps us to write DRY (Do Not Repeat Yourself) code.
      They are the most essential concept in the language
      
*/

function logger() {
  console.log(`My name is Vishal`);
}

// calling / running / invoking the function
logger();
logger();
logger();

// fuction can receive and return data back
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 3);
console.log(orangeJuice);

const mixedJuice = fruitProcessor(5, 5);
console.log(mixedJuice);

console.log(fruitProcessor(15, 0));

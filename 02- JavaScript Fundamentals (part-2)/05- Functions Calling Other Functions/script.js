"use strict";

/*
Let's now take function even one step further, and calling function from inside another function.
This helps us to write DRY (Do not Repeat Yourself) code.
*/
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(5, 10));

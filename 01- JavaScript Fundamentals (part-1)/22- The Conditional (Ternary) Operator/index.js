/*
************* The Conditional(Ternary) Operator **********

The conditional (ternary) operator allows us to write something similar to an if/else statement, but all in one line.

NOTE-
A ternary operator is an expression and not an statement, so we can put it inside template literals
*/

const age = 15;

// const drink =
//   age >= 18 ? `I like to drink wine 🍷` : `I like to drink Juice 🥤`;
// console.log(drink);

const drink = age >= 18 ? `Wine 🍷` : `Juice 🥤`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `Wine 🍷`;
} else {
  drink2 = `Juice 🥤`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `Wine 🍷` : `Juice 🥤`}`);

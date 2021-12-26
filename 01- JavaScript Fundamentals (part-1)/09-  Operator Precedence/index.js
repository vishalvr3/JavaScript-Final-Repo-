/*
Here we'll talk about precedence of different operators

link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

*/

const now = 2037;
const ageVishal = now - 1991;
const ageJustice = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageVishal + ageJustice) / 2;
console.log(ageVishal, ageJustice, averageAge);

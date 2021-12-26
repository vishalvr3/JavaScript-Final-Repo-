/*
🧨 Falsy Values:
            Falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean
            🔴 5 falsy values: 0, "", '', undefined, null, NaN

*/

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean("Vishal")); // true
console.log(Boolean({})); // true

const money = 100; // money=0 and 0 is falsy, money=100 and 100 is truthy
if (money) {
  console.log(`Don't spend it all ;)`); // output when money=100
} else {
  console.log(`You should get a job!`); // output when money=0
}

// let height; // falsy
// let height = 123; // truthy
let height = 0; // falsy, but height=0 is perfectly a height..yet it's giving undefined, so this is kind of an error..use it carefully

if (height) {
  console.log(`Yeah!!! Height is defined`); // truthy case
} else {
  console.log(`Height s UNDEFINED!`); // falsy case
}

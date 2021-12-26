/*
Equality operators helps us in taking decision.

NOTE-
=== , is strictly equality operator (value and type must)
== , is loosely equality operator (does type coercion)

*/

const age = 18;

if (age === 18)
  console.log(`You just become an adult :D (strict, doesn't do type coercion)`);
if (age == "18")
  console.log("You just become an adult (loose, does type coercion)");
if (age === "18")
  console.log("You just become an adult (strict, doesn't do type coercion)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 22) {
  console.log("Cool! 22 is an amazing number");
}
if (favourite === 22) {
  console.log("Cool! 22 is an amazing number");
}

/********* If/ else if / else ********/
if (favourite === 22) {
  console.log("Cool! 22 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 96) {
  console.log("96 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 96");
}

if (favourite !== 22) {
  console.log("Why not the 22");
}

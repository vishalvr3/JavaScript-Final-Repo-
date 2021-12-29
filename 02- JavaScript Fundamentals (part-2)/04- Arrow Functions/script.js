"use strict";

////////////////////////// Arrow Function ///////////////
const calcAge1 = (birthYear) => 2037 - birthYear;

const age1 = calcAge1(1999);
console.log(age1);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, "John Doe"));
console.log(yearsUntilRetirement(1990, "Bob"));

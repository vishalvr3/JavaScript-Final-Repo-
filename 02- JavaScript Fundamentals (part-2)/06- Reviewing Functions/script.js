"use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  return retirement > 0
    ? `${firstName} retires in ${retirement} years`
    : `${firstName} has already retired`;

  // return retirement
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Vishal"));
console.log(yearsUntilRetirement(1950, "John Doe"));

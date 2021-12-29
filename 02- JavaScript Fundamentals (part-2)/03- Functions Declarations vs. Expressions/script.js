"use strict";

/*
In Js there are different ways of writing functions

👉🏽 Function Declaration:
                        function calcAge1(birthYear) {
                              return 2037 - birthYear;
                        }

👉🏽 Function Expression: (function stored in variable and produces a value)
                        const calcAge2 = function (birthYear) {
                              return 2037 - birthYear;
                        };

DIFFERENCE:
          We can call function Declaration before defining in the code
          But we can't call function expression before defining it, it'll give error
          It happens because of something calle Hoisting in JS
*/

//////////////////////// Function Declaration /////////////////
console.log(calcAge1(1947)); // produces 90

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1);

///////////////////////// Function Expression //////////////////
// console.log(calcAge2(1947)); // produces an error

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1995);
console.log(age2);

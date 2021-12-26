/*
Boolean Logic

👉🏽 Basic Boolean Logic
   🔴 AND == && (TRUE if all true, else FALSE)
   🔴 OR == || (TRUE if all or any one is true, else FALSE)
   🔴 NOT == ! (Inverts the Boolean)
*/

let age = 16;

let condition_A = age >= 20; // A   FALSE condition
let condition_B = age < 30; // B    TRUE condition

// NOT operator
console.log(condition_A); // false
console.log(!condition_A); // true

// AND operator
console.log(condition_A && condition_B); // FALSE && TRUE = FALSE

// OR operator
console.log(condition_A || condition_B); // FALSE || TRUE = TRUE

// NOT and AND
console.log(!condition_A && condition_B); // !FALSE && TRUE = TRUE

// OR and NOT
console.log(condition_A || !condition_B); // FALSE || !TRUE = FALSE

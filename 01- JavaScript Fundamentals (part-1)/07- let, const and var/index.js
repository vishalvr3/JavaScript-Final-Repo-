/*
Three different ways of declaring variables in JS-

✨ let : we use let keyword to declare variable that can change later. (reassigning a value or also we say that we mutate the age variable)
          e.g; let age = 22;
               age = 31;
✨ const : we use const keyword to declare a variable which is not gonna change at any point in the future.
          e.g; const birtYear = 1996;
               birthYear = 1990; // error,Assignent to constant variable

🎇 var : var is an old way of declaring variable. It works similar to let , but below the surface it's different.

NOTE: let is blocked scpe and var is function scoped
*/

let age = 22;
age = 31;
console.log(age); // 31

const birthYear = 1996;
birthYear = 1990;
console.log(birthYear); // // error,Assignent to constant variable

// const job;

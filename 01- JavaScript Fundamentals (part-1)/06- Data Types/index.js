/*
In last lecture we learnt "values" and "variables".
In every programming language, value can be of different types

🔺Object🔺
🔺Primitive🔺
A value is primitive if its not an object. There are 7 primitive data types in JS.
🎇Number: In the background , in JS, Numbers is always a floating point number. They always have decimals, even if we dont see them or dont define them.
                  e.g; let age = 22;
🎇String: Sequence of characters, its always in quotes "" or '' and used to represent text.
                  e.g; let firstName = "Renu";
🎇Boolean: It's a logical data Type, which can take only true of false. It's used for taking decisions.
                  e.g; let sweet = true;
🎇Undefined: Value taken by a variable that is not yet defined ("empty value")
                  e.g; let children;
🎇Null: Also exists
🎇Symbol: Introduced in ES6 (ES2015). Value that is unique and cannot be changed [Not useful at this point]
🎇BigInt: Introduced in ES2020. Larger integers that theNumber type can hold.
*/

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true); // boolean
console.log(typeof javaScriptIsFun); // boolean
console.log(typeof 2207); // number
console.log(typeof "Vishal"); // string

javaScriptIsFun = "yes!!"; // Js is dynamically typed, we can easily cha ge the type of a value hold by a variable
console.log(typeof javaScriptIsFun); // string

let year; // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(typeof year); //  number

console.log(typeof null); // object (it is an error that exists in type of operator)

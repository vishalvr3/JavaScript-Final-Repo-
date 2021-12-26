const hasDriversLicense = true; // A,  true
const hasGoodVision = true; // B,  true , false

// console.log(hasDriversLicense && hasGoodVision); // true && true = true
console.log(hasDriversLicense && hasGoodVision); // true && false = false

console.log(hasDriversLicense || hasGoodVision); // true && true = true
console.log(hasDriversLicense || hasGoodVision); // true && false = true

console.log(!hasDriversLicense); // !true = false

/******************** Checking if RT can drive *****************/
// if (hasDriversLicense && hasGoodVision) {
//   console.log(`RT is able to drive! 🚗`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false; // C, true
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`RT is able to drive! 🚗`);
} else {
  console.log(`Someone else should drive....`);
}

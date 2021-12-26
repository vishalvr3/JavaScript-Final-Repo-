const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Matilda can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Matilda is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

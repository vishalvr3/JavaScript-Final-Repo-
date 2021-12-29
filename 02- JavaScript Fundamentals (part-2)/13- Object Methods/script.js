"use strict";

/*
we learnt that obejcts just like arrays can hold different kinds of data and they can hold even arrays , and infact an Object can hold objects iside objects.

NOTE: sny function attacked to an object is called as method
*/

const vishal = {
  firstName: "Vishal",
  lastName: "Nobody",
  birthYear: 1996,
  job: "Developer",
  friends: ["Vishal", "RT", "Nobody", "Manish", "Ravi"],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} Driver's License.`;
  },
};

console.log(vishal.calcAge());

console.log(vishal.age);
console.log(vishal.age);
console.log(vishal.age);

// console.log(vishal["calcAge"](1991));

/////////////////////// Assignment ///////////////
/*
Write a method called Get Summary and return a string summarising the data-
"name is a age years old job, and he has a/No drivers license"
*/

///// My Solution
console.log(vishal.getSummary());

/*
👉🏽 Switch Statement:
                  It is an alternative way of writing a complicated if/else statement, when we all want to do is compare one value to multiple different options.
*/

const day = "saturday";

switch (day) {
  case "monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log(`Not a valid day`);
}

///////////////////******* if/else solution of above ********/////////////
if (day === "monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`Prepare theory videos`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Write code examples`);
} else if (day === "friday") {
  console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log(`Not a valid day`);
}

// QUESTION #1
// let num = 4;

// // for (let i = 2; i < 9; i++) {
// //   num *= i;
// // }

// // console.log(num);

// answer question 1
// 8/24/96/480/2880/20160/161280
// the answer will be 161280

// ==========================================================

// QUESTION #2
// let score = 8;

// for (let i = 8; i < 14; i++) {
//   score += i;
// }

// console.log(score);

// answer question 2
// 16/25/35/46/58/71
// the answer will be 71

// ==========================================================

// QUESTION #3
// Print all odd number from 0 to 100

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// not equal to and type

// ==========================================================

// QUESTION #4

// for (let i = 1; i <= 100; i++) {
//   let star = "";

//   for (let j = 1; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// ==========================================================

// QUESTION #5

let city = prompt("Enter Your City Name");
let cities = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Quetta",
  "Multan",
  "Peshawar",
  "Faislabad",
  "Rawalpindi",
  "Sialkot",
];
let found = false;

for (let i = 0; i < cities.length; i++) {
  if (city.toLowerCase() === cities[i].toLowerCase()) {
    console.log(city, "City is Present");
    found = true;
    break;
  }
}

if (!found) {
  console.log(city, "City is not present.");
}

// ==========================================================

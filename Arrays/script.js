// ! --- Arrays ---

// let arr = [1, 80, 4, 5, 55, 3, 78, 44, 90];
// arr[2] = 12;

// arr.push(100);
// arr.pop();
// arr.shift();
// arr.unshift(0);

// arr.splice(2, 2); // removes values towards right
// let newArr = arr.slice(0, 3);  // Doesn't change main array->gives between 0 and 3

// arr.reverse();

// ? sort
// let sortedArr = arr.sort(function (a, b) {
//   return a - b;
// });

// ? Map, Filter, Reduce
// let arr = [1, 4, 6, 8, 9, 11, 24];

// * forEach
// arr.forEach(function (val) {
//   console.log(val + 5);
// });

// * Map ----> Used when we want to create a new array on the basis of data of previous array
// let newArr = arr.map(function (val) {
//   if (val === 4) {
//     return 12;
//   } else {
//     return 13;
//   }
// });

// * Filter -----> filters out some values from previous array
// let newArr = arr.filter(function (val) {
//   if (val > 4) return true;
// });

// * Reduce ----> To make one single value from array
// let ans = arr.reduce(function (accumulator, val) {
//   return accumulator + val;
// }, 0);

// ? Find, Some, Every
// let arr = [1, 4, 6, 8, 9, 11, 24];

// let search = arr.find(function (val) {
//   return val === 8;
// });

// let any = arr.some(function (val) {
//   return val > 10;
// });

// let eve = arr.every(function (val) {
//   return val > 0;
// });

// ? Destructuring and spread operator
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, , d] = arr;
// let [z] = arr;

// let arr2 = [...arr, 10, 11];

// let fruits = ["Apple", "Banana"];
// fruits.push("Mango");
// fruits.unshift("Pineapple");
// fruits[2] = "Kiwi";

// let numbers = [1, 2, 3];
// numbers.pop()

// let colors = ["Green", "Yellow"];
// colors.splice(1, 0, "Red", "Blue");

// let items = [1,2,3,4,5,6,7]
// let newArr = items.slice(2,5)
// console.log(newArr)

// let names = ["Rohit", "Arjun", "Ranjan", "Yadav"];
// let reversedNames = names.sort().reverse();
// console.log(reversedNames);

// let arr = [1, 2, 3, 4];
// let squaredArr = arr.map(function (val) {
//   return val * val;
// });

// let arr = [5, 12, 8, 20, 3];
// let newArr = arr.filter((val) => {
//   if (val > 10) return val;
// });

// let arr = [10, 20, 30];
// let sum = arr.reduce((accumulator, val) => {
//   return accumulator + val;
// }, 0);

// let arr = [12, 15, 3, 8, 20];
// let newArr = arr.find((val) => {
//   if (val < 10) return val;
// });

// let arr = [45, 60, 28, 90];
// let newArr = arr.some((val) => {
//   if (val < 35) return true;
// });

// let arr = [2, 4, 6, 8, 10];
// let newArr = arr.every((val) => {
//   return val % 2 === 0;
// });

// let fullName = ["Rohit", "Ranjan", "Yadav"];
// let [firstName, middleName, lastName] = fullName;

// let a = [1, 2];
// let b = [3, 4];
// let mergedArr = [...a, ...b];

// let countries = ["USA", "UK"];
// countries = ["Nepal", ...countries];



// ! Objects in JavaScript
// let obj = {
//   name: "Rohit",
//   age: 23,
//   course: "BCA",
// };

// console.log(obj.name);
// console.log(obj["age"]);

// let myName = "name";
// console.log(obj[myName]);

// ? Nesting
// const user = {
//   name: "Rohit",
//   address: {
//     city: "Bhaktapur",
//     municipality: "Suryabinayak",
//     location: {
//       lat: 22.3,
//       lon: 21.2,
//     },
//   },
// };

// console.log(user.name);
// console.log(user.address.city);
// console.log(user.address.location.lat);

// ? Object destructuring
// let { lat, lon } = user.address.location;
// console.log(lat);
// console.log(lon);

// let { city, municipality } = user.address;
// console.log(city);
// console.log(municipality);

// ? Looping
// * for-in
// let obj = {
//   name: "Rohit",
//   age: 23,
//   email: "rohit@gmail.com",
// };

// for (let key in obj) {
//   console.log(key, ":", obj[key]);
// }

// * Object.keys --> Array of keys of object
// * Object.entries --> Arrays of every key-value of object
// let obj = {
//   name: "Rohit",
//   age: 23,
//   email: "rohit@gmail.com",
// };
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// * Copying objects ---> spread, Object.assign, deep clone
// let obj = {
//   name: "Rohit",
//   age: 23,
//   email: "rohit@gmail.com",
//   addresses: {
//     city: "Bhaktapur",
//   },
// };

// let obj2 = { ...obj }; //Nested objects values will take reference
// let obj3 = Object.assign({ address: "Bhaktapur" }, obj);

// let obj2 = JSON.parse(JSON.stringify(obj));  // * DEEP CLONE

// * Optional Chaining --> Use "?" for handling error if key change in future
// console.log(obj?.address?.city); // Undefined

// * Computed Properties'
// let role = "admin";
// let obj = {
//   name: "Rohit",
//   age: 23,
//   email: "rohit@gmail.com",
//   addresses: {
//     city: "Bhaktapur",
//   },
//   [role]: "Rohit Ranjan Yadav",
// };

// ! Practice
// let student = {
//   name: "Rohit",
//   age: 23,
//   isEnrolled: true,
// };

// const user = {
//   "first-name": "Rohit",
// };
// console.log(user["first-name"]);

// let key = "age";
// const user = {
//   age: 23,
// };
// console.log(user[key]);

// const address = {
//   city: "Bhaktapur",
//   coordinates: {
//     lat: 22.3,
//     lng: 34.2,
//   },
// };
// console.log(address?.coordinates?.lat);

// let { city } = address;
// console.log(city);
// let { lat } = address.coordinates;
// console.log(lat);

// ? Destructuring these types of key--> Assign new variable in camelCase
// const user = {
//   "first-name": "Rohit",
// };
// let { "first-name": firstName } = user;
// console.log(firstName);

// const course = {
//   title: "JavaScript",
//   duration: "4 weeks",
// };
// for (let key in course) {
//   console.log(key, ":", course[key]);
// }
// Object.entries(course).forEach((val) => {
//   console.log(val[0], ":", val[1]);
// });

// const original = { a: 1, b: 2 };
// const copy = { ...original };

// const obj1 = { info: { score: 80 } };
// console.log(obj1.info.score);
// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.info.score = 99;
// console.log(obj2.info.score);

// const person = {};
// console.log(person?.profile?.name);

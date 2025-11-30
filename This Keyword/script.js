//? this keyword is a special keyword whose value or nature changes according to use cases...

// Global Scope
console.log(this); // Window

// Function Scope
function abcd() {
  console.log(this); //Window
}
abcd();

// ! Method --> A function inside object, Arrow Function ---> Window  ,Arrow function inside es5 method --> object
let obj = {
  name: "Rohit",
  age: 23,
  sayName: function () {
    console.log(this.name); // --> Whole Object
  },
};
obj.sayName();

// Event Handler
document.querySelector("h1").addEventListener("click", function () {
  console.log(this); // selected element
});

// ! Class
class Abcd {
  constructor() {
    console.log("Hello");
    this.a = 12; // Blank Object
  }
}
let val = new Abcd();

//!  Call, Apply, Bind --> We can set the value of this while calling function
let obj2 = {
  name: "Rohit",
};
function abcd2(a, b, c) {
  console.log(this, a, b, c);
}
abcd2.call(obj2);

let fnc = abcd2.bind(obj, 1, 2, 3);
fnc()
// ? Variables and Declaration - var (ES5), let & const (ES6).

// var a;
// var b = 12;
// let a;
// const c = 12;

// ? Declaration vs Initialization
// var a;        // Declaration
// var a = 12;   // Declaration + Initialization

// ? var - Adds to window, Function Scoped, Can be declared again.
// var a = 12;
// var a = 13;
// console.log(a); // 13
// console.log(window.a); // 13 ✅

// ? let - Doesn't add to window, Block Scoped, Can be reassigned, Cannot be redeclared in same scope.
// let b = 12;
// b = 13;
// console.log(b); // 13
// console.log(window.b); // undefined ❌

// ? const - Doesn't add to window, Block Scoped, Cannot be reassigned or redeclared.
// const c = 12;
// console.log(c); // 12
// console.log(window.c); // undefined ❌

// ? Scope - Global, Function, Block

// * var - function scoped, global scoped
// function func() {
//   var a = 12;
// }

// * let - block scoped
// function func() {
//   if (true) {
//     let b = 12;
//   }
// }

// ? Temporal Dead Zone (TDZ)
// * Only in const and let
// console.log(a); // Cannot access 'a' before initialization
// let a = 12;

// ! Hoisting Impact per type --> Hoisting in JavaScript is a behavior where variable and function declarations are moved (“hoisted”) to the top of their scope — before the code is executed.

// * var is hoisted
// console.log(b); // Undefined
// var b = 12;

// var b; // declaration hoisted
// console.log(b); // undefined
// b = 12; // initialization happens later

// * var -> hoist -> undefined
// ! let -> hoist -> error
// ! const -> hoist -> error

// var x = 1;
// {
//   var x = 2;
// }
// console.log(x)  // 2


let a = 10; //block scope // global scope
{
  let a = 20;
  console.log("Inside: ", a); //Inside: 20
}
console.log("Outside:", a); //Outside: 10

// ! Functions -->

// ? Function Declaration
// function hello() {
//   console.log("Hello");
// }
// hello();

// ? Function Expression
// let hello = function () {
//   console.log("Hello");
// };
// hello()

// ? Fat Arrow Function
// let hello = ()=>{
//   console.log("Hello")
// }
// hello()

// ? Parameters & Arguments
// function greet(name) {
//   console.log(`Hello! ${name}.`);
// }
// greet("Rohit");
// greet("Ranjan");

// function add(num1, num2) {
//   console.log(num1 + num2);
// }
// add(3, 10);

// ? Default, Rest & Spread Parameters
// * Default
// function add(v1 = 0, v2 = 0) {
//   console.log(v1 + v2);
// }
// add(1, 2);

// * Rest || Spread ( Rest -> Function parameter, Spread -> Arrays )
// function abcd(...val) {
//   console.log(val);
// }
// abcd(1, 2, 3, 4, 5);

// ? Return & Early Return
// function abcd(v) {
//   return 12 + v;
// }
// let val = abcd(20);
// console.log(val);

// ? First class functions --> to use function as a value
// function abcd(val) {
//   val();
// }
// abcd(function () {
//   console.log("Hello");
// });

// ? High order functions --> Return a function or accept a function in it's parameter
// function abcd() {
//   // HOF
//   return function () {
//     console.log("hello");
//   };
// }
// abcd()();

// ? Pure vs Impure functions ( Pure -> Doesn't effect the value of outside variables, Impure -> Effects variables of outside the function )
let a = 12;

// * Pure
// function abcd() {
//   console.log("Hello");
// }

// * Impure
// function abcd() {
//   console.log(++a);
// }
// abcd();

// ? Closures --> A function which returns a function and the function uses any variable of parent function
// function abcd() {
//   let a = 10;
//   return function () {
//     console.log(a);
//   };
// }
// abcd()();

// ? Lexical Scoping --> Any function can have access to the variables of their parent functions
// function first() {
//   let a = 12;
//   function second() {
//     let b = 13;
//     function third() {
//       let c = 14;
//     }
//   }
// }

// ? IIFE ( Immediately Invoked Function Expressions )
// (function () {
//   console.log("Hello");
// })();

// function getScore(...scores) {
//   let totalScore = 0;
//   scores.forEach((score) => {
//     totalScore += score;
//   });
//   return totalScore;
// }
// console.log(getScore(10, 19, 24, 25));

// function checkAge(age) {
//   if (age < 18) return "Too Young";
//   return "Allowed";
// }
// console.log(checkAge(10));

// function abcd(val) {
//   val();
// }
// abcd(function () {
//   console.log("Hello");
// });

// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const counter = makeCounter();
// counter();
// counter();
// counter();

// function greet(name) {
//   return function (message) {
//     console.log(`${message}, ${name}!`);
//   };
// }
// const greetRohit = greet("Rohit");
// greetRohit("Hello");
// greetRohit("Good Morning");

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add5 = makeAdder(5);
// console.log(add5(10));

// function createPassword(password){
//   return function(input){
//     return input === password
//   }
// }
// const check = createPassword("rohit123")
// console.log(check("rohit123"))
// console.log(check("rohit"))

// function createMultiplier(factor){
//   return function(num){
//     return num * factor
//   }
// }
// const double = createMultiplier(2)
// console.log(double(5))
// const triple = createMultiplier(3)
// console.log(triple(10))

// function createCounter() {
//   let count = 0;
//   return {
//     increment() {
//       count++;
//       console.log(count);
//     },
//     decrement() {
//       count--;
//       console.log(count);
//     },
//     value() {
//       return count;
//     },
//   };
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();

// function bankAccount(initialBalance){
//   let balance = initialBalance
//   return {
//     deposit(amount){
//       balance+=amount
//       console.log(`Deposited ${amount}. Balance: ${balance}`)
//     },
//     withdraw(amount){
//       if(balance<=amount){
//         console.log("Insufficient Funds")
//       }else {
//         balance -= amount
//         console.log(`Withdrawn ${amount}. Balance: ${balance}`)
//       }
//     },
//     checkBalance(){
//       console.log(`Current Balance = ${balance}`)
//     }
//   }
// }
// const myAccount = bankAccount(1000)
// myAccount.checkBalance()
// myAccount.deposit(2000)
// myAccount.withdraw(500)
// myAccount.withdraw(4000)
// myAccount.checkBalance()

// function bmi(weight, height) {
//   return weight / (height * height);
// }
// console.log(bmi(63, 1.67).toFixed(2));

// function discountCalculator(discount){
//   return function(price){
//     return price - price * (discount / 100)
//   }
// }
// let discounter10 = discountCalculator(10)
// console.log(discounter10(1000))
// let discounter20 = discountCalculator(20)
// console.log(discounter20(2000))

// function counter(){
//   let count = 0
//   return function(){
//     count++
//     return count
//   }
// }
// let c = counter()
// console.log(c())
// console.log(c())

// function double(val) {
//   return val * 2;
// }
// console.log(double(5));

// ? IIFE
// (function () {
//   let password = "IIFE password";
//   console.log(password);
// })();
// let password = "Outer Password";
// console.log(password);



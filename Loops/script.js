// ! Loops ( for, while )

// ? for ( where to reach )
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// ? while ( when to stop )
// let i = 1;
// while (i < 25) {
//   console.log(i);
//   i++;
// }

// ? do-while
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 1);

// ! Break & Continue
// for (let i = 1; i < 50; i++) {
//   console.log(i);
//   if (i === 20) {
//     break;
//   }
// }

// for (let i = 1; i < 50; i++) {
//   if (i === 32) {
//     continue;
//   }
//   console.log(i);
// }

// for(let i = 1; i<=10;i++){
//   console.log(i)
// }

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i = 1
// while (  i <= 15) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${5 * i}`);
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// for(let i = 1; i<=50;i++){
//   if(i%3===0){
//     console.log(i)
//   }
// }

// let number = prompt("Give a number:");
// for (let i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even.`);
//   } else {
//     console.log(`${i} is odd.`);
//   }
// }

// for(let i=1;i<=100;i++){
//   if(i%3===0 && i%5===0){
//     console.log(`${i} is divisible by both 3 and 5.`)
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

let count = 0;
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    count++;
    console.log(i);
  }
  if (count === 5) break;
}

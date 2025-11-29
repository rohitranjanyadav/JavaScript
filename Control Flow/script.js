// ? if else, else-if
// ? switch case
// ? early return pattern

// function getGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return "A+";
//   } else if (score >= 80 && score <= 89) {
//     return "A";
//   } else if (score >= 70 && score <= 79) {
//     return "B";
//   } else if (score >= 60 && score <= 69) {
//     return "C";
//   } else if (score >= 33 && score <= 59) {
//     return "D";
//   } else if (score >= 0 && score <= 32) {
//     return "Fail";
//   } else {
//     return "Invalid Marks ❌";
//   }
// }

// console.log(getGrade(6));


// ! Single Return
// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "A+";
//   if (score >= 80 && score <= 89) return "A";
//   if (score >= 70 && score <= 79) return "B";
//   if (score >= 60 && score <= 69) return "C";
//   if (score >= 33 && score <= 59) return "D";
//   if (score >= 0 && score <= 32) return "Fail";

//   return "Invalid Marks ❌";
// }

// console.log(getGrade(90));


// ? Rock, Paper, Scissor Logic
// function rps(user, computer) {
//   if (user === computer) return "draw";
//   if (user === "rock" && computer === "scissor") return "user";
//   if (user === "scissor" && computer === "paper") return "user";
//   if (user === "paper" && computer === "rock") return "user";

//   return "computer";
// }

// console.log(rps("paper", "paper"));



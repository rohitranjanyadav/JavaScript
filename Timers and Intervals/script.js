// let tm = setTimeout(function () {
//   console.log("Hello settimeout");
// }, 2000);
// clearTimeout(tm);

// let si = setInterval(function () {
//   console.log("hello setinterval");
// }, 2000);
// clearInterval(si);

// let count = 10;
// let it = setInterval(function () {
//   console.log(count);
//   count--;
//   if (count < 0) {
//     clearInterval(it);
//   }
// }, 1000);

let count = 0;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let intv = setInterval(function () {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    percentText.textContent = `${count} %`;
  } else {
    document.querySelector("h2").textContent = "Downloaded";
    clearInterval(intv);
  }
}, 30);

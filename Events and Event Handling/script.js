// let h1 = document.querySelector("h1")

// h1.addEventListener("click",function(){
//   h1.style.color="red"
// })

// let p = document.querySelector("p")
// p.addEventListener("dblclick",function(){
//   p.style.color="purple"
// })

// h1.addEventListener("click",function(){
//   h1.innerText="Removed"
// })

// ? Input Event
// let inp = document.querySelector("input");

// inp.addEventListener("input",function(dets){
//   if(dets.data!==null){
//     console.log(dets.data)
//   }
// })

// ? Change Event
// let sel=document.querySelector("select")
// let device = document.querySelector("#device")
// sel.addEventListener("change",function(dets){
//   device.textContent = `${dets.target.value} Selected`
// })

// let h1 = document.querySelector("#main")
// window.addEventListener("keydown",function(dets){
//   if(dets.key===" "){

//     h1.textContent="SPC"
//   }else{
//         h1.textContent=dets.key

//   }
// })

// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", function () {
//   abcd.style.backgroundColor = "yellow";
// });
// abcd.addEventListener("mouseout", function () {
//   abcd.style.backgroundColor = "red";
// });

// window.addEventListener("mousemove", function (dets) {
//   abcd.style.top = dets.clientY + "px";
//   abcd.style.left = dets.clientX + "px";
// });

// let ul = document.querySelector("ul")

// ul.addEventListener("click",function(dets){
//   dets.target.classList.toggle("lt")
// })

let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function () {
  let left = 20-inp.value.length
  span.textContent=left
  if(left<0){
    span.style.color="red"
  }else{
    span.style.color="black"
  }
});

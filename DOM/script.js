// let h1 = document.querySelector("h1");
// h1.innerHTML = "<i>Hello</i>";
// h1.innerText = "Hello";

// let a = document.querySelector("a");
// a.href = "https://www.google.com";
// a.setAttribute("href", "https://www.google.com");
// console.log(a.getAttribute("href"));
// a.removeAttribute("href");

// ? Create and Append
// let h1 = document.createElement("h1");
// h1.textContent = "Hello from JS";

// let div = document.querySelector("div").prepend(h1);

// ? Styling
// let h1 = document.querySelector("h1")
// h1.style.color = "red"

// let h1 = document.querySelector("h1")
// h1.classList.add("title")
// h1.classList.toggle("add-new")

// let h1 = document.createElement("h1");
// h1.textContent = "Fruits";
// document.querySelector("body").prepend(h1);

// let lis = document.querySelectorAll("li");

// lis.forEach((li) => {
//   console.log(li.textContent);
// });

// let p = document.querySelector("p")
// p.innerHTML = "<b>Updated</b> by JavaScript"

// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// li.textContent = "new task"
// ul.appendChild(li)

// let img = document.createElement("img")
// img.setAttribute("src", "https://www.wikihow.com/images/thumb/d/de/Switch-Tabs-in-Chrome-Step-20-Version-3.jpg/v4-460px-Switch-Tabs-in-Chrome-Step-20-Version-3.jpg")

// document.querySelector("div").appendChild(img)

// let ul =document.querySelector("ul")
// let li = document.querySelector("li")

// ul.removeChild(li)

// let li=document.querySelectorAll("ul li:nth-child(2n)")
// console.log(li)

// li.forEach(function(elem){
//   elem.classList.add("title")
// })

let p = document.querySelectorAll("p")

p.forEach((elem)=>{
  elem.style.fontSize="22px"
})


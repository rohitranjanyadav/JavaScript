// ? Classical Inheritance --> To create classes and extend (Take inheritance from parent class) --> java, cpp

// ? Prototypal Inheritance --> Object inheritance from Object


class CreatePencil {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}
let p1 = new CreatePencil("Rohit", 23);
console.log(p1);

class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }
  remove() {
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}

let u1 = new User("Ranjan", "Bhaktapur", "ranjan11", "ranjan@gmail.com");
let u2 = new User("Yadav", "Lalitpur", "ranjanyadav11", "ranjanaa@gmail.com");

let a1 = new Admin("admin1", "Ktm", "adminnn", "a1@a.com");




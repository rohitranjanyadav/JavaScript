// fetch("https://randomuser.me/api/?results=3")
//   .then((rawData) => {
//     return rawData.json();
//   })
//   .then((data) => console.log(data.results[0].name.first))
//   .catch((err) => {
//     console.log(err);
//   });

fetch("https://randomuser.me/api/?results=3")
  .then((raw) => raw.json())
  .then((data) => {
    data.results.forEach((user) => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-lg rounded-xl p-6 w-80 text-center";

      const img = document.createElement("img");
      img.src = user.picture.large;
      img.alt = "Profile";
      img.className = "w-28 h-28 mx-auto rounded-full mb-4";

      const userName = document.createElement("h2");
      userName.className = "text-xl font-semibold text-gray-800";
      userName.innerText = user.name.first + " " + user.name.last;

      const userEmail = document.createElement("p");
      userEmail.className = "text-gray-500 text-sm";
      userEmail.innerText = user.email;

      card.appendChild(img);
      card.appendChild(userName);
      card.appendChild(userEmail);

      document.querySelector(".users").appendChild(card);
    });
  });

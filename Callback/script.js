// ? Callback --> Function sent to parameter of other function

function runAfterSomeTime(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}

runAfterSomeTime(function () {
  console.log("Hello");
});

function showProfile(username, cb) {
  setTimeout(() => {
    console.log(`Profile fetched of ${username}`);
    cb({ _id: 1212, username, age: 23, email: "rohit@g.com" });
  }, 2000);
}
function showPost(id,cb){
  setTimeout(()=>{
    cb({_id:id,posts:["hey","hello"]})
  },3000)
}

showProfile("rohit", function (profileData) {
  showPost(profileData._id, function (posts) {
    console.log(posts);
  });
});

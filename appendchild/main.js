// var boxElement = document.querySelector(".box");
// var p = document.createElement("p");
// p.innerHTML = "Học javascript tại Freetuts";
// boxElement.appendChild(p);
function User(firstName) {
  this.firstName = firstName;
  this.getName = function () {
    return `${this.firstName}`;
  };
}
const user = new User("Pham");
console.log(user);

var boxElement = document.querySelector(".box");

// boxElement.classList.add("red");
// boxElement.classList.remove("red");
setInterval(() => {
  boxElement.classList.toggle("red");
}, 200);
console.log(boxElement.classList.contains("red"));

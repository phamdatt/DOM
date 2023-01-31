//InnerHTML help add an element in DOM

var boxElement = document.querySelector(".box");
//setter
boxElement.innerHTML = "<h1>Xin chao</h1>";
console.log(document.querySelector("h1").innerText);

//getter
console.log(boxElement.innerHTML);

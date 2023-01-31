const newNode = document.createElement("li");
const textNode = document.createTextNode("Water");
newNode.appendChild(textNode);

const list = document.getElementById("demo");
console.log(list)
list.insertBefore(newNode, list.children[0]);

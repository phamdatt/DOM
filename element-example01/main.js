// getElementsByClassName return HTMLCollection
var headingNodes = document.getElementsByClassName("heading");
for (let key in headingNodes) {
  console.log(headingNodes[key]);
}
// getElementsByTagName return HTMLCollection

var headingNodes = document.getElementsByTagName("h1");
console.log(headingNodes);

//querySelector return an element

var headingNode = document.querySelector(".heading");
console.log({
  headingNode: headingNode,
});

var headingNode2 = document.querySelector(".heading-2:first-child");
console.log({
  firstElement: headingNode2,
});

var headingNodes2 = document.querySelectorAll(".heading-2");
headingNodes2.forEach((item) => {
  console.log(item);
});

var boxNode = document.querySelector(".box-1");
var liEmelents = boxNode.querySelectorAll("li");
console.log(liEmelents);

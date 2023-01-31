var demoElement = document.getElementById("demo");
function addHTML() {
  let html = "<h2>Element After Add</h2>";
  demoElement.insertAdjacentHTML('beforebegin',html);
  demoElement.insertAdjacentHTML('afterbegin',html);
  demoElement.insertAdjacentHTML('beforeend',html);
  demoElement.insertAdjacentHTML('afterend',html);
}

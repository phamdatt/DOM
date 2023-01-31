const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabItems = $$(".tab-item");
const panes = $$(".tab-pane");

tabItems.forEach((item, index) => {
  const pane = panes[index];
  item.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    item.classList.add("active");
    pane.classList.add("active");
  };
});

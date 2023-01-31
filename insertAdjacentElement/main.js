let element = document.getElementById('node');
// Vị trí 1: beforebegin
element.insertAdjacentHTML("beforebegin", '<span>Nội dung chèn 1</span>');
element.insertAdjacentHTML("afterbegin", '<span>Nội dung chèn 2</span>');
element.insertAdjacentHTML("beforeend", '<span>Nội dung chèn 3</span>');
// Vị trí 1: afterend
element.insertAdjacentHTML("afterend", '<span>Nội dung chèn 4</span>');
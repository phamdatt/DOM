function addString() {
    var node = document.getElementById('wrapper');

    // Tạo một thẻ p theo yêu cầu
    var textNode = document.createTextNode(" freetuts.net");

    // Thêm nó vào cuối node
    node.appendChild(textNode);
}
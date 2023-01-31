//Thuộc tính parentElement sẽ trả về thẻ HTML đang chứa thẻ hiện tại, trả về null nếu k chứa bất kỳ element nào
var ulElement = document.getElementById("myUl");
if (ulElement.parentElement) {
  ulElement.style.color = "red";
}

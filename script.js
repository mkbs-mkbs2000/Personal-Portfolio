// JS script is adapted from this website which guides me on how to reveal an image upon clicking a button https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/
// I adapted the code below to trigger specific messages if user clicks on either Yes or No button
function yes() {
  document.getElementById('yesorno').style.display = "none";
  document.getElementById('yesmessage').style.display = "block";
}

function no() {
  document.getElementById('yesorno').style.display = "none";
  document.getElementById('nomessage').style.display = "block";
}

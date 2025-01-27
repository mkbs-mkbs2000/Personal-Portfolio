// JS script is adapted from this website which guides me on how to reveal an image upon clicking a button https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/
function show() {
  // Function show() is triggered by clicking of button, as stated in HTML code, resulting in the button to disappear
  // While the image would appear
  document.getElementById('mapclick').style.display = "none";
  document.getElementById('map').style.display = "block";
}

// Based on the code above on how to reveal the image upon clicking a button, I adapted the code below to trigger specific messages if user clicks on either Yes or No button
function yes() {
  document.getElementById('yesorno').style.display = "none";
  document.getElementById('yesmessage').style.display = "block";
}

function no() {
  document.getElementById('yesorno').style.display = "none";
  document.getElementById('nomessage').style.display = "block";
}

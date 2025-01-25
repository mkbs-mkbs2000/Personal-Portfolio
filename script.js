// JS script is adapted from this website which guides me on how to reveal an image upon clicking a button https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/
function show() {
  /* Access image by id and change 
  the display property to block*/
  document.getElementById('map')
      .style.display = "block";
  document.getElementById('mapclick')
      .style.display = "none";
}

// The remaining code is from the exemplar provided by Prof
// Retrieve button and text display elements
const yesButton = document.getElementById("btn-yes");
const noButton = document.getElementById("btn-no");
const yesCountDisplay = document.getElementById("count-yes");
const noCountDisplay = document.getElementById("count-no");

// Initialize count variables
let countYes = 0;
let countNo = 0;

// Use event listeners to track button clicks
// Increment respective count variables and update corresponding display elements on webpage
yesButton.addEventListener("click", () => {
  countYes++;
  yesCountDisplay.innerHTML = countYes;
});

noButton.addEventListener("click", () => {
  countNo++;
  noCountDisplay.innerHTML = countNo;
});
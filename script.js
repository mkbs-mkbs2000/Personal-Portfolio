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

// Generic slideshow function - pass the slideshow container ID, counter ID, and direction
function changeSlide(slideshowId, counterId, direction) {
    const container = document.getElementById(slideshowId);
    if (!container) return;
    const slides = container.querySelectorAll('.matrix-slide');
    const current = container.querySelector('.matrix-slide.active');
    let currentIndex = Array.from(slides).indexOf(current);

    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    document.getElementById(counterId).textContent = (currentIndex + 1) + ' / ' + slides.length;
}
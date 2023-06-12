"use strict";

let slide = ["carousel1.jpg", "carousel2.jpg", "carousel4.jpg", "windows.jpg", "t725.png", "Phase_4.jpg"];
let index = 0;

function ChangeSlide(sens) {
  index = index + sens;
  if (index < 0) {
    index = slide.length - 1;
  }
  if (index > slide.length - 1) index = 0;
  document.getElementById("slide").src = slide[index];
}
function prevImage() {
  // on button click change to previous image
}

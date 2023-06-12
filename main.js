"use strict";

const slide = ["carousel1.jpg", "carousel2.jpg", "carousel4.jpg", "windows.jpg", "t725.png", "Phase_4.jpg"];
let index = 0;

let buttonPrev = document.getElementById("buttonPrev");
var buttonNext = document.getElementById("buttonNext");

function ChangeSlide(increment) {
  index = index + increment;
  if (index < 0) {
    index = slide.length - 1;
  }
  if (index > slide.length - 1) index = 0;
  document.getElementById("slide").src = slide[index];
}

buttonPrev.addEventListener("click", function () {
  ChangeSlide(-1);
});

buttonNext.addEventListener("click", function () {
  ChangeSlide(1);
});

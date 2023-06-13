"use strict";
// On déclare un tableau dans lequel on met nos images
const slide = ["carousel1.jpg", "carousel2.jpg", "carousel4.jpg", "windows.jpg", "t725.png", "Phase_4.jpg"];

// On va chercher nos éléments html par leur ID et on les stock dans une variable
let buttonPrev = document.getElementById("buttonPrev");
let buttonNext = document.getElementById("buttonNext");

// On déclare la variable Index a laquelle on affecte le nombre 0
let index = 0;

// On déclare la fonction ChangeSlide qui prend le paramètre increment et qui va indiquer dans quelle direction le tableau doit changer.
function ChangeSlide(increment) {
  index = index + increment;
  if (index < 0) {
    index = slide.length - 1;
  }
  if (index > slide.length - 1) index = 0;
  //On met à jour l'image correspondante à l'index auquel nous sommes.
  document.getElementById("slide").src = slide[index];
}

// Ici nous appelons la fonction ChangeSlide en partant de la fin à chaque click du bouton.
buttonPrev.addEventListener("click", function () {
  ChangeSlide(-1);
});

// Ici nous appelons la fonction ChangeSlide en partant du début à chaque click du bouton.
buttonNext.addEventListener("click", function () {
  ChangeSlide(1);
});

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
  // On met à jour la variable index en ajoutant la valeur d'increment.
  // Cela permet de changer l'index de l'image affichée dans le diaporama.
  index = index + increment;

  // Si la valeur de index est inférieur à zéro alors on met à jour index afin de passer à la dernière image du tableau.
  if (index < 0) {
    index = slide.length - 1;
  }

  // On vérifie si index est supérieur à la longueur du tableau, si oui alors on revient à l'index 0.
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

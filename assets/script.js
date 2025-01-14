const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// CONST
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const slidesLength = slides.length;
const sliderText = document.querySelector(".slider-text");
let counter = 0; /* initiée le counter à 0*/

// Création des DOTS
const dots = document.querySelector(".dots");
for (let i = 0; i < slidesLength; i++) {
  const dot = document.createElement("div"); /*creation div dot*/
  dot.className = "dot"; /* donne la class dot à ma div */
  dots.appendChild(dot); /* liée l'element parent avec l'élement enfant */
}

// ARROWS
const dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected"); /* ajouter un dot remplis à mon index 0 */

arrowLeft.addEventListener("click", () => {
  /*event + Function fléchée*/

  dot[counter].classList.remove("dot_selected"); /*remove dot remplis*/
  /*Function if else*/
  if (counter === 0) {
    image.src =
      "./assets/images/slideshow/" +
      slides[slidesLength - 1]
        .image; /*dans le tableau aller chercher l'image 3 (4-1)*/
    sliderText.innerHTML = slides[slidesLength - 1].tagLine;
    dot[slidesLength - 1].classList.add("dot_selected"); /*ajout dot remplis*/
    counter = slidesLength - 1;
  } else {
    image.src = "./assets/images/slideshow/" + slides[counter - 1].image;
    sliderText.innerHTML = slides[counter - 1].tagLine;
    dot[counter - 1].classList.add("dot_selected");
    counter = counter - 1;
  }
});

arrowRight.addEventListener("click", () => {
  dot[counter].classList.remove("dot_selected");
  if (counter === slidesLength - 1) {
    image.src = "./assets/images/slideshow/" + slides[0].image;
    sliderText.innerHTML = slides[0].tagLine;
    dot[0].classList.add("dot_selected");
    counter = 0;
  } else {
    image.src = "./assets/images/slideshow/" + slides[counter + 1].image;
    sliderText.innerHTML = slides[counter + 1].tagLine;
    dot[counter + 1].classList.add("dot_selected");
    counter = counter + 1;
  }
});

const body = document.body;
const slides = document.querySelectorAll(".slide");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
let activeIndex = 0;

left.addEventListener("click", function () {
  slides[activeIndex].classList.remove("active");
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
  slides[activeIndex].classList.add("active");
  //console.log(activeIndex);
  changeBodyBackground();
});

right.addEventListener("click", function () {
  slides[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + 1) % slides.length;
  slides[activeIndex].classList.add("active");
  changeBodyBackground();
  // console.log(activeIndex);
});

const changeBodyBackground = function () {
  const backgroundImageURL = getComputedStyle(
    slides[activeIndex]
  ).backgroundImage;
  // console.log(backgroundImageURL, slides[activeIndex]);
  body.style.backgroundImage = backgroundImageURL;
};

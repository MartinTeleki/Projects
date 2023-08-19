const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll("-animated-background");
const animated_bg_texts = document.querySelectorAll(
  "-animated-background-text"
);

const getData = () => {
  header.innerHTML = `<img src="img/darya-22nOSMs-3-k-unsplash.jpg" alt="" />`;
  title.innerHTML = `Lorem lorem lorem lorem lorem`;
  excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
  suscipit!`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  name.innerHTML = "John Doe";
  date.innerHTML = "October 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-background"));

  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-background"));
};

setTimeout(getData, 2500);

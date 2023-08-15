const faq = document.querySelectorAll(".faq");

faq.forEach((ren) => {
  ren.addEventListener("click", function () {
    ren.classList.toggle("active");
  });
});

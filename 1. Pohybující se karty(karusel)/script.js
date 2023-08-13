const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  //console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveCLasses();
    //console.log(`Kliknutí funguje`);
    panel.classList.add("active");
  });
});

function removeActiveCLasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

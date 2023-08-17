const buttons = document.querySelectorAll(".ripple");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (eve) {
    const x = eve.pageX;
    const y = eve.pageY;

    const buttonTop = eve.target.offsetTop;
    const buttonLeft = eve.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const generateRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const colors = [];
    for (let i = 0; i < 4000; i++) {
      colors.push(generateRandomColor());
    }

    let delay = 0;

    colors.forEach((color) => {
      setTimeout(() => {
        createCircle(this, xInside, yInside, color);
      }, delay);
      delay += 200;
    });
  });
});

function createCircle(element, xInside, yInside, color) {
  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";
  circle.style.backgroundColor = color;

  element.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
}

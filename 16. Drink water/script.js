const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  const volumeCup = 250 / 1000;
  const remainingVolume = totalCups * volumeCup - (250 * fullCups) / 1000;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${((fullCups / totalCups) * 100).toFixed(2)} %`;

    if (fullCups / totalCups >= 0.8) {
      percentage.style.fontSize = "2rem";
    } else {
      percentage.style.fontSize = "1.5rem";
    }
  }

  const remainedText = document.querySelector("#remained-text");
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";

    if (remainingVolume <= 0.25) {
      liters.innerText = "";
      remainedText.innerHTML = "<strong>Remained: 250ml</strong>"; // Změna textu
    } else {
      liters.innerText = `${remainingVolume.toFixed(2)}l`;
      remainedText.innerText = "Remained"; // Změna textu
    }

    if (fullCups / totalCups >= 0.9) {
      remained.style.fontSize = "0.75rem"; // Zmenšení o 50%
    } else {
      remained.style.fontSize = "1rem";
    }
  }
}

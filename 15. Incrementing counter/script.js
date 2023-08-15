const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); // + mění na number xD
    const cntr = +counter.innerText;
    console.log(typeof target, target);

    const increment = target / 2000;

    console.log(increment);

    if (cntr < target) {
      counter.innerText = `${Math.ceil(cntr + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

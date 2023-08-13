const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke--btn");

jokeBtn.addEventListener("click", createJoke);

//createJoke();

async function createJoke() {
  const configuration = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await fetch("https://icanhazdadjoke.com", configuration);
    if (!res.ok) {
      throw new Error("Fetch have been failed.");
    }
    console.log(res);

    const data = await res.json();
    console.log(data);
    jokeEl.innerText = data.joke;
  } catch (error) {
    console.error("There is a problem with the detch operation");
  }
}

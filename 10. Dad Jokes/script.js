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

  const res = await fetch("https://icanhazdadjoke.com", configuration);
  console.log(res);
  const data = await res.json();
  console.log(data);
  jokeEl.innerText = data.joke;
}

const sounds = [
  "continued",
  "crab-rave",
  "dance_monkey",
  "pumped-up",
  "valhalla_calling",
  "tada",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  //console.log(sound);

  btn.addEventListener("click", () => {
    stopSongs();

    console.log(sound);
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

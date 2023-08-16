const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getMovie = async function (url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Data from servers are not loaded.");
    }
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log(data.results);

    showMovies(data.results);
  } catch (error) {
    console.error("Some error????", error.message);
  }
};

const showMovies = function (movies) {
  main.innerHTML = ``;

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
    
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
         <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
      ${overview}
    </div>
  
    `;
    main.appendChild(movieElement);
  });
};

const getClassByRate = function (vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovie(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

getMovie(API_URL);

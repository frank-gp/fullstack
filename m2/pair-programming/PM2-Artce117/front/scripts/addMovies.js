const repository = require("../../back/src/services/moviesService");

const addMovieHandler = ()=>{

    // Seleccionar inptus
    const iTitle = document.getElementById("title");
    const iYear = document.getElementById("year");
    const iDirector = document.getElementById("director");
    const iDuration = document.getElementById("duration");
    const iGenre = document.getElementById("genre");
    const iRate = document.getElementById("rate");
    const iPoster = document.getElementById("poster");

    // Tomar valores de los inputs
    const title = iTitle.value;
    const year = iYear.value;
    const director = iDirector.value;
    const duration = iDuration.value;
    const genre = iGenre.value;
    const rate = iRate.value;
    const poster = iPoster.value;

    // Validar inptus vacios
    if (!iTitle.value || !iYear.value || !iDirector.value || !iDuration.value || !iGenre.value || !iRate.value || !iPoster.value){
        return alert("Debes completar todos los campos");
    } else {
        repository.createMovie(title, year, director, duration, genre, rate, poster);
    }
}

document.querySelector('form').addEventListener("submit", addMovieHandler);
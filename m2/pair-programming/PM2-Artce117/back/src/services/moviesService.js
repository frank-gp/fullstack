class Movie {
  constructor(id, title, year, director, duration, genre, rate, poster) {
    if (!title || !poster || !director) {
      throw new Error("Titulo, Poster y Director son requeridos para crear la pelicula");
    }

    this.id = id;
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

class Repository {
  constructor() {
    this.dataMovies = [
      {
        id: 1,
        title: "La La Land",
        year: 2016,
        director: "Damien Chazelle",
        duration: "2h 8min",
        genre: ["Drama", "Music", "Romance"],
        rate: 8,
        poster: "https://pics.filmaffinity.com/la_la_land-262021831-large.jpg",
      },
      {
        id: 2,
        title: "Natural born killers",
        year: 1994,
        director: "Oliver Stone",
        duration: "1h 59min",
        genre: ["Action", "Crime"],
        rate: 7.2,
        poster: "https://m.media-amazon.com/images/M/MV5BNGNjNjU1YmEtZGM5MC00ODgzLWEyY2MtZmZmNTlhOGU4OWJjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: 3,
        title: "Granizo 2024",
        year: 2024,
        director: "Director Name",
        duration: "2h 15min",
        genre: ["Action", "Thriller", "Sci-Fi"],
        rate: 6.2,
        poster: "https://pics.filmaffinity.com/granizo-289420713-large.jpg",
      },
    ];
    this.lastId = 4;
  }

  getMovies = function () {
    const moviesMap = this.dataMovies.map((movieObj) => {
      const { id, title, year, director, duration, genre, rate, poster } = movieObj;
      return new Movie(id, title, year, director, duration, genre, rate, poster);
    });
    return moviesMap;
  };

  createMovie = function (title, year, director, duration, genre, rate, poster) {
    let id = this.lastId++;
    const movie = new Movie(id, title, year, director, duration, genre, rate, poster);

    console.log("diego", movie);
    this.dataMovies.push(movie);
  };
}

const repository = new Repository();

module.exports = repository;

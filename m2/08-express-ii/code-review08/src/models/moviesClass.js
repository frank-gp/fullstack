// ========== src\models\moviesClass.js ==========
class MoviesClass {
  constructor(title, year, director, duration, genre, rate, poster) {
    // if (!title || !poster || !director) {
    //   throw new Error("Title, poster and director are required");
    // }

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

export { MoviesClass };

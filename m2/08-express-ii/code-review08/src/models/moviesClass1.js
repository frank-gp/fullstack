// ========== src\models\moviesClass.js ==========
class MoviesClass {
  constructor(title, poster, director) {
    if (!title || !poster || !director) {
      throw new Error("Title, poster and director are required");
    }
    this.title = title;
    this.poster = poster;
    this.director = director;
  }
}

export { MoviesClass };

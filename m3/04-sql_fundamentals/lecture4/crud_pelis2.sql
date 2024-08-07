DROP TABLE IF EXISTS director;

DROP TABLE IF EXISTS movies;

-- Create director table
CREATE TABLE director (
    director_id INT PRIMARY KEY, director_name VARCHAR(255)
);

-- Create movies table
CREATE TABLE movies (
    movie_id INT PRIMARY KEY, title VARCHAR(255), release_year INT, director_id INT, genre VARCHAR(100), runtime_minutes INT
);

-- Insert data into director table
INSERT INTO
    director (director_id, director_name)
VALUES (1, 'Steven Spielberg'),
    (2, 'Christopher Nolan'),
    (3, 'Quentin Tarantino'),
    (4, 'Martin Scorsese'),
    (5, 'Alfred Hitchcock');

-- Insert data into movies table
INSERT INTO
    movies (
        movie_id, title, release_year, director_id, genre, runtime_minutes
    )
VALUES (
        1, 'Jurassic Park', 1993, 1, 'Science Fiction', 127
    ),
    (
        2, 'The Dark Knight', 2008, 2, 'Action', 152
    ),
    (
        3, 'Pulp Fiction', 1994, 3, 'Crime', 154
    ),
    (
        4, 'Goodfellas', 1990, 4, 'Crime', 146
    ),
    (
        5, 'Psycho', 1960, 5, 'Horror', 109
    ),
    (
        6, 'E.T. the Extra-Terrestrial', 1982, 1, 'Science Fiction', 115
    ),
    (
        7, 'Inception', 2010, 2, 'Science Fiction', 148
    ),
    (
        8, 'Django Unchained', 2012, 3, 'Western', 165
    ),
    (
        9, 'Taxi Driver', 1976, 4, 'Drama', 114
    );

SELECT * FROM movies;

SELECT * FROM director;

-- Delete column director_id from movies table
ALTER TABLE movies DROP COLUMN director_id;

-- Add column director_id to movies table
ALTER TABLE movies ADD COLUMN director_id INT;

-- Add foreign key constraint
ALTER TABLE movies
ADD CONSTRAINT fk_director_id FOREIGN KEY (director_id) REFERENCES director (director_id);

-- Update director_id for specific movies
UPDATE movies SET director_id = 3 WHERE movie_id = 3;

SELECT * FROM movies ORDER BY movie_id ASC;

-- display all movies with diplay key foranea
SELECT m.*, d.director_name
FROM movies m
    JOIN director d ON m.director_id = d.director_id;

SELECT m.*, d.director_name
FROM movies AS m
    JOIN director AS d ON m.director_id = d.director_id;

-- query for create table gener and add 10 demos

-- Create genre table
CREATE TABLE genre (
    genre_id SERIAL PRIMARY KEY, genre_name VARCHAR(100) NOT NULL
);

-- Insert demo genres
INSERT INTO
    genre (genre_name)
VALUES ('Action'),
    ('Comedy'),
    ('Drama'),
    ('Thriller'),
    ('Horror'),
    ('Science Fiction'),
    ('Romance'),
    ('Adventure'),
    ('Fantasy'),
    ('Documentary');

SELECT table_name
FROM information_schema.tables
WHERE
    table_schema = 'public';

CREATE TABLE movie_genre (
    movie_id INT, genre_id INT, PRIMARY KEY (movie_id, genre_id), FOREIGN KEY (movie_id) REFERENCES movies (movie_id), FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);

CREATE TABLE movie_genre2 (
    movie_id INTEGER REFERENCES movies (movie_id),
    -- 
    genre_id INTEGER REFERENCES genre (genre_id),
    -- 
    PRIMARY KEY (movie_id, genre_id)
);

INSERT INTO
    movie_genre2 (movie_id, genre_id)
VALUES (1, 2),
    (1, 3),
    (2, 1),
    (2, 3);

SELECT * FROM movie_genre2;

SELECT m.title AS movie_title, g.genre_name
FROM
    movie_genre2 mg
    JOIN movies m ON mg.movie_id = m.movie_id
    JOIN genre g ON mg.genre_id = g.genre_id;
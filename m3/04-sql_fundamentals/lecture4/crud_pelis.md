```sql

DROP TABLE IF EXISTS peliculas;

DROP TABLE IF EXISTS directores;


-- Crear tabla de directores
CREATE TABLE directores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100)
);

-- Crear tabla de películas
CREATE TABLE peliculas (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    year INTEGER,
    duration INTEGER,
    director_id INTEGER,
    FOREIGN KEY (director_id) REFERENCES directores(id)
);

-- Agregar datos de demostración
INSERT INTO directores (nombre, apellido) VALUES
('Christopher', 'Nolan'),
('Quentin', 'Tarantino'),
('Martin', 'Scorsese');

INSERT INTO peliculas (title, year, duration, director_id) VALUES
('Inception', 2010, 148, 1),
('Pulp Fiction', 1994, 154, 2),
('The Departed', 2006, 151, 3),
('The Dark Knight', 2008, 152, 1),
('Fight Club', 1999, 139, 2),
('Shutter Island', 2010, 138, 3),
('Django Unchained', 2012, 165, 2),
('The Prestige', 2006, 130, 1),
('Goodfellas', 1990, 146, 3);

-- Consultas para CRUD

-- Crear (Create)
INSERT INTO peliculas (title, year, duration, director_id) VALUES ('New Movie', 2022, 120, 1);

-- Leer (Read)
SELECT * FROM peliculas;

SELECT * FROM peliculas WHERE year = 2010;

SELECT * FROM peliculas ORDER BY duration;

SELECT * FROM peliculas ORDER BY year DESC;


-- Actualizar (Update)
UPDATE peliculas SET year = 2021 WHERE title = 'Pulp Fiction';

-- Eliminar (Delete)
DELETE FROM peliculas WHERE title = 'New Movie';




```

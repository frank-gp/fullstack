```sql
-- Crear tabla de directores
CREATE TABLE directores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100)
);

-- Crear tabla de películas
CREATE TABLE peliculas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255),
    año INTEGER,
    director_id INTEGER,
    FOREIGN KEY (director_id) REFERENCES directores(id)
);

-- Agregar datos de demostración
INSERT INTO directores (nombre, apellido) VALUES
('Christopher', 'Nolan'),
('Quentin', 'Tarantino'),
('Martin', 'Scorsese');

INSERT INTO peliculas (titulo, año, director_id) VALUES
('Inception', 2010, 1),
('Pulp Fiction', 1994, 2),
('The Departed', 2006, 3);

-- Consultas para CRUD

-- Crear (Create)
INSERT INTO peliculas (titulo, año, director_id) VALUES ('Nueva Película', 2022, 1);

-- Leer (Read)
SELECT * FROM peliculas;
SELECT * FROM peliculas WHERE titulo = 'Inception';



-- Actualizar (Update)
UPDATE peliculas SET año = 2021 WHERE titulo = 'Pulp Fiction';

-- Eliminar (Delete)
DELETE FROM peliculas WHERE titulo = 'Nueva Película';
```

## PGAdmin PostgreSQL

```bash
# config env
# C:\Program Files\PostgreSQL\15\bin
 psql --version

 psql -U postgres

 psql -U postgres -W -h localhost:5432 -d <base_de_datos>

# descrive
 \d genre



# list database
\l

# connect
\c my_database;

# display tables
\dt

DROP DATABASE my_database;

CREATE DATABASE my_database;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100) UNIQUE,
    contraseña VARCHAR(255)
);


```

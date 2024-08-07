<!-- titulo de rutas que se requieren -->

## Rutas

### GET /user/:id

- **Descripción:** Obtiene un usuario por su id junto con sus turnos.
- **Parámetros:** id: id del usuario.

- **Respuesta:**
  - 200: Si el usuario fue encontrado.
  - 404: Si el usuario no fue encontrado.

- **Ejemplo:**

  ```json
  {
    "id": 1,
    "name": "Carlos Gómez",
    "email": "cgomez@mail.com",
    "birthdate": "1990-01-01",
    "nDni": 12345678,
    "turns": [
      {
        "id": 1,
        "date": "2021-01-01",
        "time": "10:00",
        "status": "active"
      },
      {
        "id": 2,
        "date": "2021-01-01",
        "time": "11:00",
        "status": "cancelled"
      }
    ]
  }
  ```

### POST /user/register

- **Descripción:** Crea un nuevo usuario.
- **Parámetros:**
  - name: nombre del usuario.
  - email: email del usuario.
  - birthdate: fecha de nacimiento del usuario.
  - nDni: número de DNI del usuario.
  - username: nombre de usuario.
  - password: contraseña del usuario.

- **Respuesta:**
  - 201: Si el usuario fue creado.
  - 400: Si los datos son incorrectos.

### POST /users/login

- **Descripción:** Inicia sesión de un usuario.
- **Parámetros:**
  - username: nombre de usuario.
  - password: contraseña del usuario.

- **Respuesta:**
  - 200: Si el usuario fue logueado.
  - 400: Si los datos son incorrectos.

- **Ejemplo:**

  ```json
  {
    "login": true,
    "user": {
      "id": 1,
      "name": "Carlos Gómez",
      "email": "cgomez@mail.com",
      "birthdate": "1990-01-01",
      "nDni": 12345678
      }
   }
   ```

### GET /turns/:id

- **Descripción:** Obtiene el detalle de un turno.

- **Parámetros:** id: id del turno.

- **Respuesta:**
  - 200: Si el turno fue encontrado.
  - 404: Si el turno no fue encontrado.

### POST /turns/schedule

- **Descripción:** Crea un nuevo turno.
- **Parámetros:**
  - date: fecha del turno.
  - time: hora del turno.
  - userId: id del usuario.

- **Respuesta:**
    - 201: Si el turno fue creado.
    - 400: Si los datos son incorrectos.

### PUT /turns/cancel/:id

- **Descripción:** Cancela un turno.
- **Parámetros:** id: id del turno.

- **Respuesta:**
  - 200: Si el turno fue cancelado.
  - 404: Si el turno no fue encontrado.

### GET /turns

- **Descripción:** Obtiene todos los turnos.

- **Respuesta:**
  - 200: Si los turnos fueron encontrados.
  - 404: Si no se encontraron turnos.


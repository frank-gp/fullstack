import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Definición de las rutas

// Rutas /users
app.get("/users", (req: Request, res: Response) => {
  res.send("Obtener listado de todos los usuarios");
});

app.get("/users/:id", (req: Request, res: Response) => {
  res.send(`Obtener detalle del usuario con ID: ${req.params.id}`);
});

app.post("/users/register", (req: Request, res: Response) => {
  res.send("Registro de un nuevo usuario");
});

app.post("/users/login", (req: Request, res: Response) => {
  res.send("Login del usuario a la aplicación");
});

// Rutas /appointments
app.get("/appointments", (req: Request, res: Response) => {
  res.send("Obtener listado de todos los turnos de todos los usuarios");
});

app.get("/appointment", (req: Request, res: Response) => {
  res.send("Obtener detalle de un turno específico");
});

app.post("/appointment/schedule", (req: Request, res: Response) => {
  res.send("Agendar un nuevo turno");
});

app.put("/appointment/cancel", (req: Request, res: Response) => {
  res.send('Cambiar el estatus de un turno a "cancelled"');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

import express, { Request, Response } from "express";
import { getUsers, getUserById, registerUser } from "./userController";
import { registerCredentials, login } from "./credentialController";
import { getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment } from "./appointmentController";

const app = express();
const PORT = 3000;

// Middleware para manejar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas /users
app.get("/users", (req: Request, res: Response) => getUsers(req, res));
app.get("/users/:id", (req: Request, res: Response) => getUserById(req, res));
app.post("/users/register", (req: Request, res: Response) => registerUser(req, res));

// Rutas /credentials
app.post("/credentials/register", (req: Request, res: Response) => registerCredentials(req, res));
app.post("/credentials/login", (req: Request, res: Response) => login(req, res));

// Rutas /appointments
app.get("/appointments", (req: Request, res: Response) => getAppointments(req, res));
app.get("/appointments/:id", (req: Request, res: Response) => getAppointmentById(req, res));
app.post("/appointments/schedule", (req: Request, res: Response) => scheduleAppointment(req, res));
app.put("/appointments/cancel/:id", (req: Request, res: Response) => cancelAppointment(req, res));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

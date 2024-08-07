import express, { Request, Response } from "express";
import { UserController } from "./userController";
import { CredentialController } from "./credentialController";
import { AppointmentController } from "./appointmentController";
import { UserService } from "./userService";
import { CredentialService } from "./credentialService";
import { AppointmentService } from "./appointmentService";

const app = express();
const PORT = 3000;

// Crear instancias de los servicios y controladores
const credentialService = new CredentialService();
const userService = new UserService(credentialService);
const appointmentService = new AppointmentService(userService);
const userController = new UserController(userService);
const credentialController = new CredentialController(credentialService);
const appointmentController = new AppointmentController(appointmentService);

// Middleware para manejar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas /users
app.get("/users", (req: Request, res: Response) => userController.getUsers(req, res));
app.get("/users/:id", (req: Request, res: Response) => userController.getUserById(req, res));
app.post("/users/register", (req: Request, res: Response) => userController.registerUser(req, res));

// Rutas /credentials
app.post("/credentials/register", (req: Request, res: Response) => credentialController.registerCredentials(req, res));
app.post("/credentials/login", (req: Request, res: Response) => credentialController.login(req, res));

// Rutas /appointments
app.get("/appointments", (req: Request, res: Response) => appointmentController.getAppointments(req, res));
app.get("/appointments/:id", (req: Request, res: Response) => appointmentController.getAppointmentById(req, res));
app.post("/appointments/schedule", (req: Request, res: Response) => appointmentController.scheduleAppointment(req, res));
app.put("/appointments/cancel/:id", (req: Request, res: Response) => appointmentController.cancelAppointment(req, res));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

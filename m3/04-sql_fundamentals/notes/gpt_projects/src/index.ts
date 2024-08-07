import express, { Router, Request, Response } from "express";

// Interfaces
interface IUser {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
  nDni: string;
  credentialsId: number;
}

interface ICredential {
  id: number;
  username: string;
  password: string;
}

interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: string;
}

// DTOs
interface UserDto {
  name: string;
  email: string;
  birthdate: string;
  nDni: string;
  username: string;
  password: string;
}

interface CredentialDto {
  username: string;
  password: string;
}

interface AppointmentDto {
  date: string;
  time: string;
  userId: number;
}

// Middleware
const authenticate = (req: Request, res: Response, next: any) => {
  // Aquí puedes agregar la lógica de autenticación
  next();
};

// Services
const users: IUser[] = [];
const credentials: ICredential[] = [];
const appointments: IAppointment[] = [];

function createUser(userData: UserDto): void {
  const { name, email, birthdate, nDni, username, password } = userData;
  const credentialsId = createCredentials(username, password);
  const id = users.length + 1;
  users.push({ id, name, email, birthdate: new Date(birthdate), nDni, credentialsId });
}

function createCredentials(username: string, password: string): number {
  const id = credentials.length + 1;
  credentials.push({ id, username, password });
  return id;
}

function validateCredentials(username: string, password: string): number | undefined {
  const foundCredential = credentials.find((credential) => credential.username === username && credential.password === password);
  return foundCredential ? foundCredential.id : undefined;
}

function getUsers(): IUser[] {
  return users;
}

function getAppointments(): IAppointment[] {
  return appointments;
}

function getAppointmentById(id: number): IAppointment | undefined {
  return appointments.find((appointment) => appointment.id === id);
}

function createAppointment(appointmentData: AppointmentDto): void {
  const { date, time, userId } = appointmentData;
  if (getUsers().find((user) => user.id === userId)) {
    const id = appointments.length + 1;
    appointments.push({ id, date: new Date(date), time, userId, status: "active" });
  } else {
    console.error("No se puede crear un turno sin un usuario válido.");
  }
}

function cancelAppointment(id: number): void {
  const appointmentIndex = appointments.findIndex((appointment) => appointment.id === id);
  if (appointmentIndex !== -1) {
    appointments[appointmentIndex].status = "cancelled";
  } else {
    console.error("No se encontró un turno con el ID proporcionado.");
  }
}

// Agregar usuario de demostración
createUser({
  name: "Usuario Demo",
  email: "demo@example.com",
  birthdate: "1990-01-01",
  nDni: "12345678",
  username: "demo_user",
  password: "demo_password",
});

// Controllers
function getUsersHandler(req: Request, res: Response): void {
  res.status(200).json(users);
}

function getUserByIdHandler(req: Request, res: Response): void {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado." });
  }
}

function registerUserHandler(req: Request, res: Response): void {
  const userData: UserDto = req.body;
  createUser(userData);
  res.status(201).json({ message: "Usuario creado exitosamente." });
}

function registerCredentialsHandler(req: Request, res: Response): void {
  const credentialsData: CredentialDto = req.body;
  createCredentials(credentialsData.username, credentialsData.password);
  res.status(201).json({ message: "Credenciales creadas exitosamente." });
}

function loginHandler(req: Request, res: Response): void {
  const credentialsData: CredentialDto = req.body;
  const credentialId = validateCredentials(credentialsData.username, credentialsData.password);
  if (credentialId) {
    res.status(200).json({ id: credentialId, message: "Inicio de sesión exitoso." });
  } else {
    res.status(401).json({ message: "Credenciales inválidas." });
  }
}

function getAppointmentsHandler(req: Request, res: Response): void {
  res.status(200).json(appointments);
}

function getAppointmentByIdHandler(req: Request, res: Response): void {
  const appointmentId = parseInt(req.params.id);
  const appointment = appointments.find((appointment) => appointment.id === appointmentId);
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ message: "Turno no encontrado." });
  }
}

function scheduleAppointmentHandler(req: Request, res: Response): void {
  const appointmentData: AppointmentDto = req.body;
  createAppointment(appointmentData);
  res.status(201).json({ message: "Turno agendado exitosamente." });
}

function cancelAppointmentHandler(req: Request, res: Response): void {
  const appointmentId = parseInt(req.params.id);
  cancelAppointment(appointmentId);
  res.status(200).json({ message: "Turno cancelado exitosamente." });
}

// Routers
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", getUsersHandler);
app.get("/users/:id", getUserByIdHandler);
app.post("/users/register", registerUserHandler);

app.post("/credentials/register", registerCredentialsHandler);
app.post("/credentials/login", loginHandler);

app.get("/appointments", getAppointmentsHandler);
app.get("/appointments/:id", getAppointmentByIdHandler);
app.post("/appointments/schedule", scheduleAppointmentHandler);
app.put("/appointments/cancel/:id", cancelAppointmentHandler);

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

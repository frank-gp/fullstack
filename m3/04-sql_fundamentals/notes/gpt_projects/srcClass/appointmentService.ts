import { IAppointment } from "./interfaces";
import { UserService } from "./userService";

export class AppointmentService {
  //   private appointments: IAppointment[] = [];
  //   private userService: UserService;

  //   constructor(userService: UserService) {
  //     this.userService = userService;
  //   }
  private appointments: IAppointment[] = [
    {
      id: 1,
      date: new Date("2024-05-01"),
      time: "09:00",
      userId: 1, // Asignamos el ID del usuario demo
      status: "active",
    },
  ];
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  // Función para obtener todos los turnos
  getAppointments(): IAppointment[] {
    return this.appointments;
  }

  // Función para obtener un turno por ID
  getAppointmentById(id: number): IAppointment | undefined {
    return this.appointments.find((appointment) => appointment.id === id);
  }

  // Función para crear un nuevo turno
  createAppointment(date: Date, time: string, userId: number): void {
    if (this.userService.getUserById(userId)) {
      const id = this.appointments.length + 1;
      this.appointments.push({ id, date, time, userId, status: "active" });
    } else {
      console.error("No se puede crear un turno sin un usuario válido.");
    }
  }

  // Función para cancelar un turno por ID
  cancelAppointment(id: number): void {
    const appointmentIndex = this.appointments.findIndex((appointment) => appointment.id === id);
    if (appointmentIndex !== -1) {
      this.appointments[appointmentIndex].status = "cancelled";
    } else {
      console.error("No se encontró un turno con el ID proporcionado.");
    }
  }
}

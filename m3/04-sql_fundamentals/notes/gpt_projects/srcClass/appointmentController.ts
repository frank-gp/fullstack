import { Request, Response } from 'express';
import { AppointmentService } from './appointmentService';

export class AppointmentController {
  private appointmentService: AppointmentService;

  constructor(appointmentService: AppointmentService) {
    this.appointmentService = appointmentService;
  }

  // Controlador para obtener todos los turnos
  getAppointments(req: Request, res: Response): void {
    const appointments = this.appointmentService.getAppointments();
    res.status(200).json(appointments);
  }

  // Controlador para obtener un turno por ID
  getAppointmentById(req: Request, res: Response): void {
    const appointmentId = parseInt(req.params.id);
    const appointment = this.appointmentService.getAppointmentById(appointmentId);
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ message: 'Turno no encontrado.' });
    }
  }

  // Controlador para agendar un nuevo turno
  scheduleAppointment(req: Request, res: Response): void {
    const { date, time, userId } = req.body;
    this.appointmentService.createAppointment(new Date(date), time, userId);
    res.status(201).json({ message: 'Turno agendado exitosamente.' });
  }

  // Controlador para cancelar un turno por ID
  cancelAppointment(req: Request, res: Response): void {
    const appointmentId = parseInt(req.params.id);
    this.appointmentService.cancelAppointment(appointmentId);
    res.status(200).json({ message: 'Turno cancelado exitosamente.' });
  }
}

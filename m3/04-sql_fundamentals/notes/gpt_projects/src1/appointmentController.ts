import { Request, Response } from 'express';
import { getAppointments, getAppointmentById, createAppointment, cancelAppointment } from './appointmentService';

function getAppointmentsHandler(req: Request, res: Response): void {
  const appointments = getAppointments();
  res.status(200).json(appointments);
}

function getAppointmentByIdHandler(req: Request, res: Response): void {
  const appointmentId = parseInt(req.params.id);
  const appointment = getAppointmentById(appointmentId);
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ message: 'Turno no encontrado.' });
  }
}

function scheduleAppointmentHandler(req: Request, res: Response): void {
  const { date, time, userId } = req.body;
  createAppointment(new Date(date), time, userId);
  res.status(201).json({ message: 'Turno agendado exitosamente.' });
}

function cancelAppointmentHandler(req: Request, res: Response): void {
  const appointmentId = parseInt(req.params.id);
  cancelAppointment(appointmentId);
  res.status(200).json({ message: 'Turno cancelado exitosamente.' });
}

export { getAppointmentsHandler as getAppointments, getAppointmentByIdHandler as getAppointmentById, scheduleAppointmentHandler as scheduleAppointment, cancelAppointmentHandler as cancelAppointment };

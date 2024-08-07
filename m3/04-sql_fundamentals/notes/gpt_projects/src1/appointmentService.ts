import { IAppointment } from './interfaces';
import { getUsers } from './userService';

const appointments: IAppointment[] = [
  {
    id: 1,
    date: new Date('2024-05-01'),
    time: '09:00',
    userId: 1, // Asignamos el ID del usuario demo
    status: 'active'
  }
];

function getAppointments(): IAppointment[] {
  return appointments;
}

function getAppointmentById(id: number): IAppointment | undefined {
  return appointments.find(appointment => appointment.id === id);
}

function createAppointment(date: Date, time: string, userId: number): void {
  if (getUsers().find(user => user.id === userId)) {
    const id = appointments.length + 1;
    appointments.push({ id, date, time, userId, status: 'active' });
  } else {
    console.error('No se puede crear un turno sin un usuario válido.');
  }
}

function cancelAppointment(id: number): void {
  const appointmentIndex = appointments.findIndex(appointment => appointment.id === id);
  if (appointmentIndex !== -1) {
    appointments[appointmentIndex].status = 'cancelled';
  } else {
    console.error('No se encontró un turno con el ID proporcionado.');
  }
}

export { getAppointments, getAppointmentById, createAppointment, cancelAppointment };

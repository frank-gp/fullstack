// Define la interfaz para la entidad User
export interface IUser {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
  nDni: string;
  credentialsId: number;
}

// Define la interfaz para la entidad Appointment
export interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: "active" | "cancelled";
}

// Define la interfaz para la entidad Credential
export interface ICredential {
  id: number;
  username: string;
  password: string;
}

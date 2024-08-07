import { IUser } from "./interfaces";
import { CredentialService } from "./credentialService";

export class UserService {
  //   private users: IUser[] = [];
  //   private credentialService: CredentialService;

  //   constructor(credentialService: CredentialService) {
  //     this.credentialService = credentialService;
  //   }

  private users: IUser[] = [
    {
      id: 1,
      name: "Demo User",
      email: "demo@example.com",
      birthdate: new Date("1990-01-01"),
      nDni: "12345678",
      credentialsId: 1, // Asignamos las credenciales demo
    },
  ];
  private credentialService: CredentialService;

  constructor(credentialService: CredentialService) {
    this.credentialService = credentialService;
  }

  // Función para obtener todos los usuarios
  getUsers(): IUser[] {
    return this.users;
  }

  // Función para obtener un usuario por ID
  getUserById(id: number): IUser | undefined {
    return this.users.find((user) => user.id === id);
  }

  // Función para crear un nuevo usuario | data transfer object
  createUser(name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): void {
    const credentialsId = this.credentialService.createCredentials(username, password);
    const id = this.users.length + 1;
    this.users.push({ id, name, email, birthdate, nDni, credentialsId });
  }
}

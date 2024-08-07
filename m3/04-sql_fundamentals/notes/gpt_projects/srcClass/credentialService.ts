import { ICredential } from "./interfaces";

export class CredentialService {
  //   private credentials: ICredential[] = [];
  private credentials: ICredential[] = [{ id: 1, username: "demo_user", password: "demo_password" }];

  // Función para crear un nuevo par de credenciales
  createCredentials(username: string, password: string): number {
    const id = this.credentials.length + 1;
    this.credentials.push({ id, username, password });
    return id;
  }

  // Función para validar credenciales
  validateCredentials(username: string, password: string): number | undefined {
    const foundCredential = this.credentials.find((credential) => credential.username === username && credential.password === password);
    return foundCredential ? foundCredential.id : undefined;
  }
}

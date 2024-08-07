import { IUser } from './interfaces';
import { createCredentials } from './credentialService';

const users: IUser[] = [
  {
    id: 1,
    name: 'Demo User',
    email: 'demo@example.com',
    birthdate: new Date('1990-01-01'),
    nDni: '12345678',
    credentialsId: 1 // Asignamos las credenciales demo
  }
];

function getUsers(): IUser[] {
  return users;
}

function getUserById(id: number): IUser | undefined {
  return users.find(user => user.id === id);
}

function createUser(name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): void {
  const credentialsId = createCredentials(username, password);
  const id = users.length + 1;
  users.push({ id, name, email, birthdate, nDni, credentialsId });
}

export { getUsers, getUserById, createUser };

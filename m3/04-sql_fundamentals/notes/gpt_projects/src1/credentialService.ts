import { ICredential } from './interfaces';

const credentials: ICredential[] = [
  { id: 1, username: 'demo_user', password: 'demo_password' }
];

function createCredentials(username: string, password: string): number {
  const id = credentials.length + 1;
  credentials.push({ id, username, password });
  return id;
}

function validateCredentials(username: string, password: string): number | undefined {
  const foundCredential = credentials.find(
    credential => credential.username === username && credential.password === password
  );
  return foundCredential ? foundCredential.id : undefined;
}

export { createCredentials, validateCredentials };

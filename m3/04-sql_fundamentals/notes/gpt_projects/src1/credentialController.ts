import { Request, Response } from 'express';
import { createCredentials, validateCredentials } from './credentialService';

function registerCredentials(req: Request, res: Response): void {
  const { username, password } = req.body;
  const credentialId = createCredentials(username, password);
  res.status(201).json({ id: credentialId, message: 'Credenciales creadas exitosamente.' });
}

function login(req: Request, res: Response): void {
  const { username, password } = req.body;
  const credentialId = validateCredentials(username, password);
  if (credentialId) {
    res.status(200).json({ id: credentialId, message: 'Inicio de sesión exitoso.' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas.' });
  }
}

export { registerCredentials, login };

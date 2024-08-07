import { Request, Response } from "express";
import { CredentialService } from "./credentialService";

export class CredentialController {
  private credentialService: CredentialService;

  constructor(credentialService: CredentialService) {
    this.credentialService = credentialService;
  }

  // Controlador para registrar nuevas credenciales
  registerCredentials(req: Request, res: Response): void {
    const { username, password } = req.body;
    const credentialId = this.credentialService.createCredentials(username, password);
    res.status(201).json({ id: credentialId, message: "Credenciales creadas exitosamente." });
  }

  // Controlador para realizar el login
  login(req: Request, res: Response): void {
    const { username, password } = req.body;
    const credentialId = this.credentialService.validateCredentials(username, password);
    if (credentialId) {
      res.status(200).json({ id: credentialId, message: "Inicio de sesión exitoso." });
    } else {
      res.status(401).json({ message: "Credenciales inválidas." });
    }
  }
}

import credentialDto from "../dto/CredentialDto";
import ICredential from "../interfaces/ICredential";

const credentialData: ICredential[] = [
  {
    id: 1,
    username: "john@example.com",
    password: "password123",
  },
];
export const createCredentialService = async (credentialsObject: credentialDto): Promise<number> => {
  const { username, password } = credentialsObject;
  const newCredential = {
    id: credentialData.length + 1,
    username,
    password,
  };
  credentialData.push(newCredential);
  return newCredential.id;
};

export const validateCredentialService = async (credentialObject: credentialDto): Promise<number | undefined> => {
  const { username, password } = credentialObject;
  const foundCredential = credentialData.find((credential) => credential.username === username && credential.password === password);
  return foundCredential ? foundCredential.id : undefined;
};

export function getAllCredentialsService(): ICredential[] {
  return credentialData;
}

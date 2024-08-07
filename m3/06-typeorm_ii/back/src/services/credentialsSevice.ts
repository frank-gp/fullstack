import { CredentialModelRepository } from "../config/data-source";
import { sha256 } from "../helpers/printHash";
import credentialDto from "../dto/CredentialDto";

export const createCredentialService = async (credentialsObject: credentialDto): Promise<number> => {
  const { username, password } = credentialsObject;
  const newCredential = { username, password: await sha256(password) };
  CredentialModelRepository.create(newCredential);
  const  CredentialEntitySave = await CredentialModelRepository.save(newCredential);
  
  return CredentialEntitySave.id;
};

export const validateCredentialService = async (credentialObject: credentialDto): Promise<number | undefined> => {
  const { username, password } = credentialObject;
  const foundCredential = await CredentialModelRepository.findOneBy({ username });
  if (!foundCredential) throw Error("user not found");

  if (foundCredential) {
    const isPasswordValid = foundCredential.password === (await sha256(password));
    if (isPasswordValid) {
      return foundCredential.id;
    }
  }
  return undefined;
};

export const getAllCredentialsService = async (): Promise<any> => {
  const credential_table = await CredentialModelRepository.find();
  return credential_table;
};

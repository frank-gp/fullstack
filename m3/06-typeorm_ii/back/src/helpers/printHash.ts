// Function to hash a string using SHA-256
export async function sha256(str: string): Promise<string> {
  try {
    const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray.map(byte => ('0' + byte.toString(16)).slice(-2)).join('');
    return hashHex;
  } catch (error) {
    throw new Error("Error hashing the string: " + error);
  }
}

// Function to print the hash of a string
export async function printHash(inputString: string) {
  try {
    const hash = await sha256(inputString);
    console.log(hash);
  } catch (error) {
    console.error("Error hashing the string:", error);
  }
}

// Call the function to print the hash
// printHash("password123");

// // Import the functions from the previous file
// import { printHash } from './tempExport';

// // Call the function to print the hash
// printHash("password123");


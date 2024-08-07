const validateRegister = (inputData) => {
  const { name, username, email, birthdate, nDni, password } = inputData;
  const errors = {};

  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Expresión regular para validar la fecha de nacimiento (formato YYYY-MM-DD)
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // Validación del nombre
  if (!name.trim()) {
    errors.name = "Name is required";
  }

  // Validación del nombre de usuario
  if (!username.trim()) {
    errors.username = "Username is required";
  }

  // Validación del correo electrónico
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email format";
  }

  // Validación de la fecha de nacimiento
  if (!birthdate.trim()) {
    errors.birthdate = "Birthdate is required";
  } else if (!birthdateRegex.test(birthdate)) {
    errors.birthdate = "Invalid birthdate format (YYYY-MM-DD)";
  }

  // Validación del número de DNI
  if (!nDni || isNaN(nDni)) {
    errors.nDni = "DNI is required and must be a number";
  }

  // Validación de la contraseña
  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  return errors;
};

export default validateRegister;

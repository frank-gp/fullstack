const validateLogin = (inputData) => {
    const { username, password } = inputData;
    const errors = {};
  
    // Validación del nombre de usuario
    if (!username.trim()) {
      errors.username = "Username is required";
    }
  
    // Validación de la contraseña
    if (!password.trim()) {
      errors.password = "Password is required";
    }
  
    return errors;
  };
  
  export default validateLogin;
  
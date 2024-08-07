const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

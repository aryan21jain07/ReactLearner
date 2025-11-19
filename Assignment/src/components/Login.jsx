function Login() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Login Page</h1>

      <form>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

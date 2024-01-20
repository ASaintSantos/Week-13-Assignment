import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="username" placeholder="User-Name" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Don't have an account? Sign up here.</Link>
    </div>
  );
};

export default Login;
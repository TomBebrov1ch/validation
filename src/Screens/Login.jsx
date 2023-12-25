import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <div>
      <h1>Войти</h1>
      <p>
        <Link to="/register">Регистрация лох</Link>
      </p>
    </div>
  );
};

export default Login;

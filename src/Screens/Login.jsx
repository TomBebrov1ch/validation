import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginForm.jsx";

const Login = () => {
  return (
    <div>
      <h1>Войти</h1>
      <LoginForm />
      <p>
        <Link to="/register">Регистрация лох</Link>
      </p>
    </div>
  );
};

export default Login;

import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Login from "../Screens/Login.jsx";

const Register = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <p>
        Уже зарегался лох?<Link to="/login">Иди входи</Link>
      </p>
    </div>
  );
};

export default Register;

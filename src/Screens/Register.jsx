import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../Components/RegistrationForm.jsx";

const Register = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <RegistrationForm />
      <p>
        Уже зарегался лох?<Link to="/login">Иди входи</Link>
      </p>
    </div>
  );
};

export default Register;

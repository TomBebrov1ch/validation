import React from "react";
import { Link } from "react-router-dom";


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

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { usePasswordVisibility } from "../hooks/usePasswordVisibility.jsx";
import { Link } from "react-router-dom";
import "../Styles/loginform.scss";
import useOutInput from "../hooks/useOutInput.jsx";

const LoginForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = usePasswordVisibility();

  const {
    password,
    isValid: isPasswordValid,
    validatePassword,
    setPassword,
    email,
    isValid: isEmailValid,
    validateEmail,
    setEmail,
  } = useOutInput();

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      })
      .finally(navigate("/"));
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="conatiner">
        <div className="container__text">
          <h1 className="text">Войти</h1>
          <input
            className="container__text__input"
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            value={email}
            placeholder="Введите email"
          />
          {!isEmailValid && (
            <p className="container__text__error-em">
              Пожалуйста, введите корректный email
            </p>
          )}
          <input
            className="container__text__input"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            placeholder="Введите пароль"
          />
          <FontAwesomeIcon
            icon={isPasswordVisible ? faEyeSlash : faEye}
            onClick={togglePasswordVisibility}
            className="form__input--eye"
          />
          {!isPasswordValid && (
            <p className="container__text__error">
              Пароль должен быть длиннее 6 символов
            </p>
          )}
          <button className="container__text__button" type="submit">
            Отправить
          </button>
          <div className="container__text__foot">
            <p className="container__text__split">
              Еще не зарегистрировались?
              <Link className="container__text__reg" to="/register">
                Регистрация лох
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

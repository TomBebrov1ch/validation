import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useOutInput from "../hooks/useOutInput";

const RegistrationForm = () => {
  const [repPass, setRepPass] = useState("");
  const auth = getAuth();

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

  const [confirm, setConfirm] = useState("");
  const [isConfirm, setIsConfirm] = useState(true);

  const handleRegistaration = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid && password === confirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    } else {
      console.log("нам пизда");
      if (password !== confirm) {
        setIsConfirm(false);
      }
    }
  };

  return (
    <form onSubmit={handleRegistaration}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        value={email}
        placeholder="Введите email"
      />
      {!isEmailValid && <p>Пожалуйста, введите корректный email</p>}
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          validatePassword(e.target.value);
        }}
        placeholder="Введите пароль"
      />
      {!isPasswordValid && <p>Пароль должен быть длиннее 6 символов</p>}
      <input
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Повторите пароль"
      />
      {!isConfirm && <p>Пароли не совпадают</p>}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default RegistrationForm;

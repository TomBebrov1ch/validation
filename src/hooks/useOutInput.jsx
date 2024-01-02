import { useState } from "react";

const useOutInput = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validatePassword = (inputPassword) => {
    const isValidPassword = inputPassword.length >= 6;

    setIsValid(isValidPassword);
  };

  const validateEmail = (inputEmail) => {
    const dirtyEmail = /^\S+@\S+$/i;
    const isValidEmail = dirtyEmail.test(inputEmail);

    setIsValid(isValidEmail);
  };

  return {
    password,
    isValid,
    validatePassword,
    setPassword,
    email,
    isValid,
    validateEmail,
    setEmail,
  };
};

export default useOutInput;

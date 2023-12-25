import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/Screens/HomePage.jsx";
import Login from "../src/Screens/Login.jsx";
import Register from "../src/Screens/Register";
import "../src/Styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

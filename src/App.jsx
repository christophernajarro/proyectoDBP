import React from "react";
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Asegúrate de importar el componente Login

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

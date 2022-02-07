import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Admin, Login, Register } from "../component";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;

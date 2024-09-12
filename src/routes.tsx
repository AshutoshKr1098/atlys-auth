import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default AppRoutes;

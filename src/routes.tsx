import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const ROUTE_CONSTANTS = {
  HOME: "/",
  LOGIN: "/login",
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
      <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default AppRoutes;

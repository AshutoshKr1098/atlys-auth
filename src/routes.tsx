import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const ROUTE_CONSTANTS = {
  HOME: "/",
  LOGIN: "/login",
};

// Lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

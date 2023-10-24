import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const routesMap = {
  "/logginn": lazy(() => import("pages/auth/Login")),
  "/registrer": lazy(() => import("pages/auth/Register")),
  "/glemt-passord": lazy(() => import("pages/auth/ForgotPassword")),
  "/tilbakestill-passord/:token": lazy(() =>
    import("pages/auth/ResetPassword")
  ),
};

export default function AuthRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="/autentisering/logginn" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

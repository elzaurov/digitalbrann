import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const routesMap = {
  "/oversikt": lazy(() => import("pages/overview/Index")),
  "/oppgaver": lazy(() => import("pages/task/Index")),
  "/brannvernorganisasjon": lazy(() => import("pages/organization/Index")),
  "/bygg": lazy(() => import("pages/property/Index")),
  "/bygg/opprett": lazy(() => import("pages/property/Create")),
};

export default function CustomerRoutes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || user.role === "Admin") {
    return <Navigate to="/autentisering/logginn" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/oversikt" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

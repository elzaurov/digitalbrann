import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const routesMap = {
  "/oversikt": lazy(() => import("pages/overview/Index")),
  "/bygg": lazy(() => import("pages/property/Index")),
  "/bygg/:id": lazy(() => import("pages/property/Update")),
  "/oppgaver": lazy(() => import("pages/task/Index")),
  "/kunder": lazy(() => import("pages/customer/Index")),
  "/kunder/opprett": lazy(() => import("pages/customer/Create")),
};

export default function AdminRoutes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || !user.isAdmin) {
    return <Navigate to="/autentisering/logginn" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/admin/oversikt" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

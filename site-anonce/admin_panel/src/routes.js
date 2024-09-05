import React, { Fragment, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
//import SiteLayout from './layouts/SiteLayout';

import Loader from "./components/Loader/Loader";

const AuthRoute = ({ children }) => {
  let user = localStorage.getItem("token");
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const LoginRoute = ({ children }) => {
  let user = localStorage.getItem("token");
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// ==============================|| ROUTES ||============================== //

const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Element props={true} />
                  )}
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  {
    path: "/login",
    guard: LoginRoute,
    element: lazy(() => import("./pages/admin/Auths/SignIn")),
  },

  {
    path: "*",
    layout: AdminLayout,
    guard: AuthRoute,
    routes: [
      {
        path: "/admin",
        element: lazy(() => import("./pages/admin/Dashboard")),
      },
      {
        path: "/admin/marques",
        element: lazy(() => import("./pages/admin/Marque")),
      },
    ],
  },
];

export default renderRoutes;

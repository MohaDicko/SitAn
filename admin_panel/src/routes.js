import React, { Fragment, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


import AdminLayout from './layouts/AdminLayout';
//import SiteLayout from './layouts/SiteLayout';

import Loader from './components/Loader/Loader';

// ==============================|| ROUTES ||============================== //

const renderRoutes = (routes = []) => (

  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        // const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
            }
          />
        );
      })}
    </Routes>
  </Suspense>


);

export const routes = [



  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        path: '/admin',
        element: lazy(() => import('./pages/admin/Dashboard'))
      },
      {
        path: '/admin/marques',
        element: lazy(() => import('./pages/admin/Marque'))
      },
      

    ]
  },




];

export default renderRoutes;

import { createBrowserRouter } from 'react-router-dom';
import Layout from 'templates/Layout';
import ErrorPage from 'components/Errors';
import { lazy } from 'react';
import withSuspense from 'hoc/WithSuspense';

const Home = withSuspense(lazy(() => import('pages/Home')));

const PageNotFound = withSuspense(lazy(() => import('pages/PageNotFound')));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;

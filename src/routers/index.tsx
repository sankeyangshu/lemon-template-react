import { lazy, Suspense } from 'react';
import { createHashRouter, Navigate, Outlet, RouterProvider } from 'react-router';
import AdminLayout from '@/layout';
import { usePermissionRoutes } from './hooks';
import Loading from './utils/Loading';
import type { RouteObject } from 'react-router';

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

const Page403 = lazy(() => import('@/pages/ErrorPages/403'));
const Page404 = lazy(() => import('@/pages/ErrorPages/404'));
const Page500 = lazy(() => import('@/pages/ErrorPages/500'));

/**
 * error routes
 * @descCN 错误路由 - 403, 404, 500
 */
const ErrorRoutes: App.Global.AppRouteObject = {
  element: (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: '403',
      element: <Page403 />,
      meta: { title: '403', key: '/403' },
    },
    {
      path: '404',
      element: <Page404 />,
      meta: { title: '404', key: '/404' },
    },
    {
      path: '500',
      element: <Page500 />,
      meta: { title: '500', key: '/500' },
    },
  ],
};

/**
 * notFoundRouter
 * @descCN 找不到路由 - 404
 */
const NotFoundRouter = {
  path: '*',
  id: 'notFound',
  element: <Navigate to="/404" replace />,
};

/**
 * Router
 * @descCN 创建一个可以被 React 应用程序使用的路由实例
 */
const Router = () => {
  const { permissionRoutes } = usePermissionRoutes();

  const ProtectedRoute: App.Global.AppRouteObject = {
    path: '/',
    element: <AdminLayout />,
    children: [{ index: true, element: <Navigate to={HOMEPAGE} replace /> }, ...permissionRoutes],
  };

  const routes = [ProtectedRoute, ErrorRoutes, NotFoundRouter] as RouteObject[];

  const router = createHashRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;

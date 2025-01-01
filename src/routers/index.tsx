import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router';
import Layout from '@/layout';
import lazyLoad from './utils/lazyLoad';
import type { RouteObjectType } from './utils/routeType';

/**
 * notFoundRouter(找不到路由)
 */
export const notFoundRouter = {
  path: '*',
  id: 'notFound',
  element: lazyLoad(lazy(() => import('@/views/ErrorPages/404'))),
};

/**
 * 公共路由
 */
export const constantRoutes: RouteObjectType[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: lazyLoad(lazy(() => import('@/views/Login'))),
        meta: { title: '登录', key: 'Login' },
      },
      {
        path: '/register',
        element: lazyLoad(lazy(() => import('@/views/Login/register'))),
        meta: { title: '注册', key: 'Register' },
      },
      {
        path: '/forgetPassword',
        element: lazyLoad(lazy(() => import('@/views/Login/forgotPassword'))),
        meta: { title: '忘记密码', key: 'ForgetPassword' },
      },
      {
        path: '/home',
        element: lazyLoad(lazy(() => import('@/views/Home'))),
        meta: { title: '首页', key: 'Home', icon: 'HomeO', iconType: 'react-vant', tabBar: true },
      },
      {
        path: '/example',
        element: lazyLoad(lazy(() => import('@/views/Example'))),
        meta: {
          title: '示例',
          key: 'Example',
          icon: 'GemO',
          iconType: 'react-vant',
          tabBar: true,
        },
      },
      {
        path: '/mine',
        element: lazyLoad(lazy(() => import('@/views/Mine'))),
        meta: {
          title: '我的',
          key: 'Mine',
          icon: 'Contact',
          iconType: 'react-vant',
          tabBar: true,
          hiddenNavBar: true,
        },
      },
      {
        path: '/theme',
        element: lazyLoad(lazy(() => import('@/views/ThemeSetting'))),
        meta: { title: '主题设置', key: 'ThemeSetting' },
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/mock',
        element: lazyLoad(lazy(() => import('@/views/Example/mockDemo'))),
        meta: { title: 'Mock 指南' },
      },
      {
        path: '/icon',
        element: lazyLoad(lazy(() => import('@/views/Example/iconDemo'))),
        meta: { title: 'Icon 示例' },
      },
    ],
  },
  notFoundRouter,
];

// 创建一个可以被 React 应用程序使用的路由实例
const Router = () => {
  const routes = useRoutes(constantRoutes);
  return routes;
};

export default Router;

import { lazy } from 'react';
import type { RouteObject } from 'react-router';

/**
 * 加载中组件
 */
const Loading = lazy(() => import('./Loading'));

/**
 * 获取错误边界组件
 */
const ErrorBoundary = lazy(() => import('./ErrorPage'));

/**
 * 页面
 */
const pages = import.meta.glob('/src/pages/**/*.tsx');

/**
 * transform route to react-router route object
 * @descCN 将路由转换为react-router的路由对象
 * @param route 路由对象
 */
export const transformToReactRoutes = (route: App.Global.AppRouteObject) => {
  const { children, meta, path, ...restRoute } = route;

  const convertConfig = (m: any) => {
    const { action, loader, shouldRevalidate, default: Component } = m;
    return {
      action,
      loader,
      shouldRevalidate,
      Component,
    };
  };

  const getConfig = async () => {
    const { pagePath } = meta as App.Global.RouteMeta;

    if (pagePath) {
      const config = await pages[`/src/pages/${pagePath}`]();
      return convertConfig(config);
    }

    return null;
  };

  const reactRoute = {
    ...restRoute,
    children: [],
    path,
    HydrateFallback: Loading,
    handle: meta,
    ErrorBoundary,
    lazy: async () => {
      return {
        ...(await getConfig()),
      };
    },
  } as RouteObject;

  // 处理子路由
  if (children?.length) {
    reactRoute.children = children.map((child) => transformToReactRoutes(child));
  }

  return reactRoute;
};

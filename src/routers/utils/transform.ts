import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const Loading = lazy(() => import('./Loading'));

const pages = import.meta.glob('/src/pages/**/*.tsx');

/**
 * 获取错误边界组件
 */
const getErrorBoundary = async () => {
  const ErrorModule = await import('./ErrorPage');
  return ErrorModule.default;
};

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

  const getConfig = async (index = false) => {
    let pageName = meta?.key;

    if (!pageName) {
      pageName = 'ErrorPages/404.tsx';
    }

    if (!children?.length || index) {
      const config = await pages[`/src/pages/${pageName}`]();

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
    lazy: async () => {
      const ErrorBoundary = await getErrorBoundary();

      return {
        ErrorBoundary,
        ...(await getConfig()),
      };
    },
  } as RouteObject;

  // 处理子路由
  if (children?.length) {
    reactRoute.children = children.flatMap((child) => transformToReactRoutes(child));

    // 如果当前路由有组件且有子路由，需要添加索引路由
    if (restRoute.index) {
      reactRoute.children.unshift({
        index: true,
        handle: meta,
        lazy: async () => {
          const ErrorBoundary = await getErrorBoundary();

          return {
            ErrorBoundary,
            ...(await getConfig(restRoute.index)),
          };
        },
      });
    }
  }

  return reactRoute;
};

import type { RouteObjectType } from './routeType';

/**
 * 过滤需要显示tabBar的路由
 * @param routers 异步路由表
 * @returns 需要显示tabBar的路由数组
 */
export const filterTabBar = (routers: RouteObjectType[]) => {
  const tabBarRouter: RouteObjectType[] = [];
  const deep = (routerList: RouteObjectType[]) => {
    routerList.forEach((item) => {
      if (item.meta?.tabBar) {
        tabBarRouter.push(item);
      }
      if (item.children && item.children.length) {
        deep(item.children);
      }
    });
  };
  deep(routers);
  return tabBarRouter;
};

/**
 * 查询对应的路由
 * @param {string} path 当前访问地址
 * @param {RouteObjectType[]} routes 路由列表
 * @returns 路由对象
 */
export const searchRoute = (path: string, routes: RouteObjectType[] = []): RouteObjectType => {
  let result: RouteObjectType = {};
  for (const item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
};

/**
 * 过滤需要缓存的路由
 * @param routers 异步路由表
 * @returns 需要缓存的路由数组
 */
export const filterKeepAlive = (routers: RouteObjectType[]) => {
  const cacheRouter: string[] = [];
  const deep = (routerList: RouteObjectType[]) => {
    routerList.forEach((item) => {
      if (item.meta?.keepAlive && item.path) {
        cacheRouter.push(item.path as string);
      }
      if (item.children && item.children.length) {
        deep(item.children);
      }
    });
  };
  deep(routers);
  return cacheRouter;
};

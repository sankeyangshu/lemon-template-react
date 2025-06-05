import { transformToReactRoutes } from './transform';

/**
 * generate react routes
 * @descCN 生成react路由
 * @param routes 路由列表
 * @returns 转换后的路由列表
 */
export const generateReactRoutes = (routes: App.Global.AppRouteObject[]) => {
  return routes.map((route) => transformToReactRoutes(route));
};

/**
 * filter show tabbar router
 * @descCN 过滤需要显示tabBar的路由
 * @param routers 异步路由表
 * @returns 需要显示tabBar的路由数组
 */
export const filterTabBarRoutes = (routers: App.Global.AppRouteObject[]) => {
  const tabBarRouter: App.Global.AppRouteObject[] = [];

  const deep = (routerList: App.Global.AppRouteObject[]) => {
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

import { useCreation } from 'ahooks';
import { filterTabBarRoutes, generateReactRoutes } from '../utils';

/**
 * use permission routes
 * @descCN 基于路由模式动态生成路由
 */
export const usePermissionRoutes = () => {
  return useCreation(() => {
    const menuModules: App.Global.AppRouteObject[] = [];

    const modules = import.meta.glob('../modules/**/*.tsx', { eager: true });

    for (const key in modules) {
      const mod = (modules as any)[key].default || {};
      const modList = Array.isArray(mod) ? [...mod] : [mod];
      menuModules.push(...modList);
    }

    return {
      permissionRoutes: generateReactRoutes(menuModules),
      tabbarRoutes: filterTabBarRoutes(menuModules),
    };
  }, []);
};

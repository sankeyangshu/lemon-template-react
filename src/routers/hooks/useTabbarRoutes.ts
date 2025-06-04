import { useCallback, useMemo } from 'react';
import { filterTabBar } from '../utils';
import { usePermissionRoutes } from './usePermissionRoutes';

/**
 * use Tabbar routes
 * @descCN 使用tabbar路由
 */
export const useTabbarRoutes = () => {
  const filterTabBarRoutes = useCallback(filterTabBar, []);

  const permissionRoutes = usePermissionRoutes();

  return useMemo(() => {
    return filterTabBarRoutes(permissionRoutes);
  }, [filterTabBarRoutes, permissionRoutes]);
};

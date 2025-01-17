import { Navigate, useLocation } from 'react-router';
import { LOGIN_URL } from '@/config';
import { useUserStore } from '@/store/user';
import { removeAllPending } from '@/utils/request/AxiosCancel';
import { constantRoutes } from '..';
import { searchRoute } from '.';

// 白名单
const whiteList = ['/login', '/register', '/forgetPassword'];

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  // 获取路由对象
  const { pathname } = useLocation();
  const currentRoute = searchRoute(pathname, constantRoutes);

  // 设置标题
  if (typeof currentRoute.meta?.title === 'string') {
    document.title = currentRoute.meta.title || import.meta.env.VITE_APP_TITLE;
  }

  // 在跳转路由之前，清除所有的请求
  removeAllPending();

  const hasToken = useUserStore((state) => state.token);

  if (hasToken) {
    // 用户登录
    if (pathname === LOGIN_URL) {
      // 如果已登录，重定向到主页
      return <Navigate to="/" />;
    }
  } else {
    // 用户未登录
    if (!whiteList.includes(pathname)) {
      // 没有访问权限的其他页面将重定向到登录页面
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

export default AuthGuard;

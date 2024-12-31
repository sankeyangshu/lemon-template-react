import * as vantIcons from '@react-vant/icons';
import { ArrowLeft } from '@react-vant/icons';
import { createElement, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import { NavBar, Tabbar } from 'react-vant';
import IconifyIcon from '@/components/Icon/IconifyIcon';
import { constantRoutes } from '@/routers';
import { filterTabBar, searchRoute } from '@/routers/utils';
import { useSettingStore } from '@/store/setting';

const Layout = () => {
  // vant icons
  const customIcons: { [key: string]: any } = vantIcons;

  // 获取全局配置
  const isPageAnimate = useSettingStore((state) => state.isPageAnimate);
  const pageAnimateType = useSettingStore((state) => state.pageAnimateType);

  const getTransitionName = () => {
    if (isPageAnimate) {
      return {
        appear: `${pageAnimateType}-enter`,
        appearActive: `${pageAnimateType}-enter-active`,
        enter: `${pageAnimateType}-enter`,
        enterActive: `${pageAnimateType}-enter-active`,
        exit: `${pageAnimateType}-exit`,
        exitActive: `${pageAnimateType}-exit-active`,
      };
    } else {
      return '';
    }
  };

  // 获取路由对象
  const { pathname } = useLocation();
  const currentRoute = searchRoute(pathname, constantRoutes);

  const isShowNavBar = !currentRoute.meta?.hiddenNavBar;
  const isShowTabBar = !!currentRoute.meta?.tabBar;

  const tabbarList = filterTabBar(constantRoutes);

  // 动画节点
  const nodeRef = useRef(null);

  const navigate = useNavigate();

  const onChangeTabbar = (path: string | number) => {
    navigate(path as string);
  };

  return (
    <div className="h-screen flex flex-col">
      {isShowNavBar && (
        <NavBar
          title={currentRoute.meta?.title}
          fixed
          placeholder
          border={false}
          leftArrow={!isShowTabBar ? <ArrowLeft /> : undefined}
          onClickLeft={() => navigate(-1)}
        />
      )}

      <div className="relative flex-1 overflow-x-hidden">
        <CSSTransition
          key={pathname}
          nodeRef={nodeRef}
          appear
          in={isPageAnimate}
          timeout={400}
          classNames={getTransitionName()}
        >
          <div ref={nodeRef} className="absolute inset-0 w-full">
            <Outlet />
          </div>
        </CSSTransition>
      </div>

      {isShowTabBar && (
        <Tabbar value={currentRoute.path} border={false} placeholder onChange={onChangeTabbar}>
          {tabbarList &&
            tabbarList.map((item) => (
              <Tabbar.Item
                key={item.path}
                name={item.path}
                icon={
                  item.meta?.iconType === 'react-vant' ? (
                    createElement(customIcons[item.meta!.icon!])
                  ) : (
                    <IconifyIcon icon={item.meta!.icon!} />
                  )
                }
              >
                {item.meta?.title}
              </Tabbar.Item>
            ))}
        </Tabbar>
      )}
    </div>
  );
};

export default Layout;

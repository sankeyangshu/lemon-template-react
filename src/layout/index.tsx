import { ArrowLeft } from '@nutui/icons-react';
import { NavBar, Tabbar } from '@nutui/nutui-react';
import { AnimatePresence, m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useOutlet } from 'react-router';
import { getPageAnimateVariants } from '@/components/Animate/variants/page';
import SvgIcon from '@/components/SvgIcon';
import { usePermissionRoutes, useRoute, useRouter } from '@/routers/hooks';
import { useSettingStore } from '@/store/setting';

const AdminLayout = () => {
  // 获取路由对象
  const route = useRoute();
  const router = useRouter();

  const isShowNavBar = !route.handle?.hiddenNavBar;
  const isShowTabBar = !!route.handle?.tabBar;

  // 使用i18n全局函数
  const { t } = useTranslation();

  const outlet = useOutlet();

  const { tabbarRoutes } = usePermissionRoutes();

  const currentTabbarIndex = () => {
    return tabbarRoutes.findIndex((item) => item.meta?.key === route.handle.key);
  };

  const onChangeTabbar = (index: number) => {
    const path = tabbarRoutes[index].path!;
    router.push(path);
  };

  // const aliveRef = useKeepAliveRef();

  // const cacheKey = useMemo(() => {
  //   return pathname + search;
  // }, [pathname, search]);

  // const cacheKeys = filterKeepAlive(constantRoutes);

  const isPageAnimate = useSettingStore((state) => state.isPageAnimate);
  const pageAnimate = useSettingStore((state) => state.pageAnimate);

  return (
    <div className="h-full flex flex-col">
      {isShowNavBar && (
        <NavBar
          title={route.handle?.i18n ? t(`router.${route.handle.i18n}`) : route.handle?.title}
          back={!isShowTabBar ? <ArrowLeft /> : undefined}
          fixed
          placeholder={true}
          className="bg-container"
          onBackClick={() => router.back()}
        />
      )}

      <div className="flex-1 overflow-y-auto bg-layout text-base-text">
        {isPageAnimate ? (
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={route.fullPath}
              variants={getPageAnimateVariants(pageAnimate)}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
              style={{
                willChange: 'opacity, transform',
                backfaceVisibility: 'hidden',
                perspective: 1000,
              }}
            >
              {outlet}
            </m.div>
          </AnimatePresence>
        ) : (
          outlet
        )}
      </div>

      {isShowTabBar && (
        <Tabbar fixed value={currentTabbarIndex()} onSwitch={onChangeTabbar}>
          {tabbarRoutes &&
            tabbarRoutes.map((item) => {
              return (
                <Tabbar.Item
                  key={item.path}
                  title={item.meta?.i18n ? t(`router.${item.meta?.i18n}`) : item.meta?.title}
                  icon={<SvgIcon icon={item.meta?.icon} size={24} />}
                />
              );
            })}
        </Tabbar>
      )}
    </div>
  );
};

export default AdminLayout;

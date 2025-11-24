import { createFileRoute, Outlet, useLocation, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import SvgIcon from '@/components/custom/svg-icon';
import Tabbar from '@/components/custom/tabbar';
import TabbarItem from '@/components/custom/tabbar/item';

export const Route = createFileRoute('/_tabbar')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const tabbarList = [
    {
      path: '/home',
      icon: 'mdi:home',
      label: t('router.home'),
    },
    {
      path: '/example',
      icon: 'mdi:code-not-equal-variant',
      label: t('router.example'),
    },
    {
      path: '/mine',
      icon: 'mdi:account',
      label: t('router.mine'),
    },
  ];

  const currentTabbarIndex = () => {
    return tabbarList.findIndex((item) => item.path === location.pathname);
  };

  const onChangeTabbar = (index: number) => {
    void navigate({
      to: tabbarList[index].path,
    });
  };

  return (
    <>
      <Outlet />
      <Tabbar
        fixed
        placeholder
        value={currentTabbarIndex()}
        onChange={(index) => onChangeTabbar(index as number)}
      >
        {tabbarList.map((item) => (
          <TabbarItem key={item.path} icon={() => <SvgIcon icon={item.icon} className="text-2xl" />}>
            {item.label}
          </TabbarItem>
        ))}
      </Tabbar>
    </>
  );
}

const otherRoutes: App.Global.AppRouteObject[] = [
  {
    path: 'home',
    meta: {
      title: '首页',
      icon: 'mdi:home-outline',
      key: 'Home/index.tsx',
      hiddenNavBar: true,
      tabBar: true,
      i18n: 'home',
    },
  },
  {
    path: 'example',
    meta: {
      title: '示例',
      icon: 'mdi:home-outline',
      key: 'Example/index.tsx',
      tabBar: true,
      i18n: 'example',
    },
  },
  {
    path: 'mine',
    meta: {
      title: '我的',
      icon: 'mdi:home-outline',
      key: 'Mine/index.tsx',
      hiddenNavBar: true,
      tabBar: true,
      i18n: 'mine',
    },
  },
];

export default otherRoutes;

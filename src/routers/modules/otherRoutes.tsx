const otherRoutes: App.Global.AppRouteObject[] = [
  {
    path: 'home',
    meta: {
      title: '首页',
      key: 'home',
      pagePath: 'Home/index.tsx',
      icon: 'mdi:home-outline',
      hiddenNavBar: true,
      tabBar: true,
      i18n: 'home',
    },
  },
  {
    path: 'example',
    meta: {
      title: '示例',
      key: 'example',
      pagePath: 'Example/index.tsx',
      icon: 'mdi:home-outline',
      tabBar: true,
      i18n: 'example',
    },
  },
  {
    path: 'mine',
    meta: {
      title: '我的',
      icon: 'mdi:home-outline',
      pagePath: 'Mine/index.tsx',
      key: 'mine',
      hiddenNavBar: true,
      tabBar: true,
      i18n: 'mine',
    },
  },
];

export default otherRoutes;

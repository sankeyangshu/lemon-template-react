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
  {
    path: '/login',
    meta: { title: '登录', key: 'Login', pagePath: 'Login/index.tsx', i18n: 'login' },
  },
  {
    path: '/register',
    meta: { title: '注册', key: 'Register', pagePath: 'Login/register.tsx', i18n: 'register' },
  },
  {
    path: '/forgetPassword',
    meta: {
      title: '忘记密码',
      key: 'ForgetPassword',
      pagePath: 'Login/forgotPassword.tsx',
      i18n: 'forgotPassword',
    },
  },
  {
    path: 'mock',
    meta: {
      title: 'Mock 指南',
      key: 'mock',
      pagePath: 'Example/mockDemo.tsx',
      i18n: 'mock',
    },
  },
  {
    path: 'echarts',
    meta: {
      title: 'Echarts 演示',
      key: 'echarts',
      pagePath: 'Example/echartsDemo.tsx',
      i18n: 'echarts',
    },
  },
  {
    path: 'icon',
    meta: {
      title: 'Icon示例',
      key: 'iconDemo',
      pagePath: 'Example/iconDemo.tsx',
      i18n: 'icon',
    },
  },
  {
    path: 'keepAlive',
    meta: {
      title: 'KeepAlive 演示',
      key: 'keepAlive',
      pagePath: 'Example/keepAliveDemo.tsx',
      i18n: 'keepAlive',
      keepAlive: true,
    },
  },
];

export default otherRoutes;

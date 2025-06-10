import { webUpdateNotice } from '@plugin-web-update-notification/vite';

/**
 * Configures the app update notice plugin for Vite.
 * @descCN 配置更新通知 vite 插件
 * @returns The configured app update notice plugin.
 * @see https://github.com/GreatAuk/plugin-web-update-notification
 */
export function configAppUpdatePlugin(env: Env.ImportMeta) {
  const { VITE_BASE_URL = '/' } = env;

  const appUpdatePlugin = webUpdateNotice({
    injectFileBase: VITE_BASE_URL,
    locale: 'zh-CN',
    localeData: {
      'en-US': {
        title: '📢 system update',
        description: 'System update, please refresh the page',
        buttonText: 'refresh',
        dismissButtonText: 'dismiss',
      },
      'zh-CN': {
        title: '📢 系统升级通知',
        description: '检测到当前系统版本已更新，请刷新页面后使用',
        buttonText: '刷新',
        dismissButtonText: '忽略',
      },
    },
  });

  return appUpdatePlugin;
}

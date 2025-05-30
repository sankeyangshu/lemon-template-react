import { createHtmlPlugin } from 'vite-plugin-html';
import pkg from '../../package.json';
import type { PluginOption } from 'vite';

/**
 * Configures the html plugin for Vite.
 * @descCN 配置html vite 插件
 * @param viteEnv - The Vite environment configuration containing compression settings.
 * @param isBuild - Indicates if the plugin is being configured for a build process.
 * @returns The configured html plugin.
 * @see https://github.com/vbenjs/vite-plugin-html
 */
export function configHtmlPlugin(env: Env.ImportMeta, isBuild: boolean) {
  const { VITE_APP_TITLE, VITE_BASE_URL } = env;

  const path = VITE_BASE_URL.endsWith('/') ? VITE_BASE_URL : `${VITE_BASE_URL}/`;

  const GLOB_CONFIG_FILE_NAME = 'app.config.js';

  const getAppConfigSrc = () => {
    return `${path || '/'}${GLOB_CONFIG_FILE_NAME}?v=${pkg.version}-${new Date().getTime()}`;
  };

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      // 需要注入 index.html ejs 模版的数据 使用在 html 中 ：<div><%= title %></div>
      data: {
        title: VITE_APP_TITLE,
      },

      // Embed the generated app.config.js file 需要注入的标签列表
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getAppConfigSrc(),
              },
            },
          ]
        : [],
    },
  });

  return htmlPlugin;
}

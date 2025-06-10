import { createHtmlPlugin } from 'vite-plugin-html';
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
  const { VITE_APP_TITLE } = env;

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      // 需要注入 index.html ejs 模版的数据 使用在 html 中 ：<div><%= title %></div>
      data: {
        title: VITE_APP_TITLE,
      },

      // 需要注入的标签列表
      tags: [
        {
          tag: 'meta',
          attrs: {
            'http-equiv': 'Cache-Control',
            content: 'no-cache, no-store, must-revalidate',
          },
        },
        {
          tag: 'meta',
          attrs: {
            'http-equiv': 'Pragma',
            content: 'no-cache',
          },
        },
        {
          tag: 'meta',
          attrs: {
            'http-equiv': 'Expires',
            content: '0',
          },
        },
      ],
    },
  });

  return htmlPlugin;
}

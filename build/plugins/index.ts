import React from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import VitePluginImp from 'vite-plugin-imp';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';
import ViteRestart from 'vite-plugin-restart';
import TsconfigPaths from 'vite-tsconfig-paths';
import { configCompressPlugin } from './compress';
import { configHtmlPlugin } from './html';
import { configInfoPlugin } from './info';
import { configSvgIconsPlugin } from './svgPlugin';
import { configAppUpdatePlugin } from './update';
import type { PluginOption } from 'vite';

/**
 * 配置 vite 插件
 * @param {Env.ImportMeta} viteEnv vite 环境变量配置文件键值队 object
 * @param {boolean} isBuild 是否是打包模式
 * @returns vitePlugins[]
 */
export const createVitePlugins = (viteEnv: Env.ImportMeta, isBuild: boolean) => {
  const { VITE_USE_MOCK } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    React(),

    UnoCSS(),

    TsconfigPaths(),

    VitePluginImp({
      libList: [
        {
          libName: '@nutui/nutui-react',
          style: (name) => {
            return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style/css`;
          },
          replaceOldImport: false,
          camel2DashComponentName: false,
        },
      ],
    }),

    // 通过这个插件，在修改vite.config.ts文件则不需要重新运行也生效配置
    ViteRestart({
      restart: ['vite.config.ts'],
    }),

    configSvgIconsPlugin(viteEnv, isBuild),

    configHtmlPlugin(viteEnv, isBuild),

    configAppUpdatePlugin(viteEnv),

    configInfoPlugin(),
  ];

  // 是否开启 mock 服务  https://github.com/pengzhanbo/vite-plugin-mock-dev-server
  if (VITE_USE_MOCK) {
    vitePlugins.push(mockDevServerPlugin());
  }

  if (isBuild) {
    // 创建打包压缩配置
    vitePlugins.push(configCompressPlugin(viteEnv));
  }

  return vitePlugins;
};

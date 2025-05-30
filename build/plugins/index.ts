import React from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import ViteRestart from 'vite-plugin-restart';
import TsconfigPaths from 'vite-tsconfig-paths';
import { configCompressPlugin } from './compress';
import { configHtmlPlugin } from './html';
import { configSvgIconsPlugin } from './svgPlugin';
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

    // 通过这个插件，在修改vite.config.ts文件则不需要重新运行也生效配置
    ViteRestart({
      restart: ['vite.config.ts'],
    }),
  ];

  // 加载 html 插件 vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // 是否开启 mock 服务  https://github.com/pengzhanbo/vite-plugin-mock-dev-server
  if (VITE_USE_MOCK) {
    vitePlugins.push(mockDevServerPlugin());
  }

  vitePlugins.push(configSvgIconsPlugin(viteEnv, isBuild));

  if (isBuild) {
    // 创建打包压缩配置
    vitePlugins.push(configCompressPlugin(viteEnv));
  }

  return vitePlugins;
};

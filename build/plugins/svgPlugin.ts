import path from 'node:path';
import process from 'node:process';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

/**
 * Configures the SVG icons plugin for Vite.
 * @descCN 配置svg vite 插件
 * @param viteEnv - The Vite environment configuration containing compression settings.
 * @param isBuild - Indicates if the plugin is being configured for a build process.
 * @returns The configured SVG icons plugin.
 * @see https://github.com/anncwb/vite-plugin-svg-icons
 */
export function configSvgIconsPlugin(viteEnv: Env.ImportMeta, isBuild: boolean) {
  const { VITE_ICON_LOCAL_PREFIX } = viteEnv;

  // 使用 svg 图标
  const svgIconsPlugin = createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 是否压缩
    svgoOptions: isBuild,
    // 指定symbolId格式
    symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
  });

  return svgIconsPlugin;
}

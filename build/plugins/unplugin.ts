import type { PluginOption } from 'vite';
import path from 'node:path';
import process from 'node:process';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

/**
 * Configures the SVG-icons/unplugin-icons plugin for Vite.
 * @descCN 配置svg/iconify vite 插件
 * @param viteEnv - The Vite environment configuration containing compression settings.
 * @see {@link https://github.com/anncwb/vite-plugin-svg-icons}
 * @see {@link https://github.com/unplugin/unplugin-icons}
 */
export function setupUnPluginIconConfig(viteEnv: Env.ImportMeta) {
  const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  /**
   * The name of the local icon collection
   * @descCN 本地图标集合名称
   */
  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');

  const plugins: PluginOption = [
    createSvgIconsPlugin({
      /**
       * The directory of the local icon
       * @descCN 本地图标目录
       */
      iconDirs: [localIconPath],
      /**
       * The format of the symbolId
       * @descCN 符号Id格式
       */
      symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
      inject: 'body-last',
      customDomId: '__SVG_ICON_LOCAL__',
    }),
    Icons({
      compiler: 'jsx',
      customCollections: {
        [collectionName]: FileSystemIconLoader(
          localIconPath,
          (svg) => svg.replace(/^<svg\s/, '<svg width="1em" height="1em" '),
        ),
      },
      defaultClass: 'inline-block',
      jsx: 'react',
      scale: 1,
    }),
  ];

  return plugins;
}

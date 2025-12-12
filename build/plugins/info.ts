import type { Options as BoxenOptions } from 'boxen';
import type { Plugin } from 'vite';
import boxen from 'boxen';
import gradient from 'gradient-string';

const welcomeMessage = gradient(['#EACA44', 'magenta']).multiline(
  `您好! 欢迎使用 lemon-mobile-react 开源项目\n我们为您精心准备了精美的保姆级文档\nhttps://lemon-template-docs.vercel.app/mobile-react/`,
);

const boxenOptions: BoxenOptions = {
  padding: 0.5,
  borderColor: '#EACA44',
  borderStyle: 'round',
};

/**
 * config build info plugin
 * @descCN 配置打包信息插件
 */
export function setupBuildInfoPluginConfig(): Plugin {
  return {
    name: 'vite:buildInfo',

    buildStart() {
      // eslint-disable-next-line no-console
      console.log(boxen(welcomeMessage, boxenOptions));
    },
  };
}

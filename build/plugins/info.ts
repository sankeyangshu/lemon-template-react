import boxen, { type Options as BoxenOptions } from 'boxen';
import dayjs, { type Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import gradient from 'gradient-string';
import { getPackageSize } from '../config';
import type { Plugin } from 'vite';

dayjs.extend(duration);

const welcomeMessage = gradient(['#EACA44', 'magenta']).multiline(
  `您好! 欢迎使用 lemon-react 开源项目\n我们为您精心准备了精美的保姆级文档\nhttps://sankeyangshu.github.io/lemon-template-docs/react/`
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
export function configInfoPlugin(): Plugin {
  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  let outDir: string;
  return {
    name: 'vite:buildInfo',

    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outDir = resolvedConfig.build?.outDir ?? 'dist';
    },

    buildStart() {
      // eslint-disable-next-line no-console
      console.log(boxen(welcomeMessage, boxenOptions));
      if (config.command === 'build') {
        startTime = dayjs(new Date());
      }
    },

    closeBundle() {
      if (config.command === 'build') {
        endTime = dayjs(new Date());

        getPackageSize({
          folder: outDir,
          callback: (size: string | number) => {
            // eslint-disable-next-line no-console
            console.log(
              boxen(
                gradient(['#EACA44', 'magenta']).multiline(
                  `🎉 恭喜打包完成（总用时${dayjs
                    .duration(endTime.diff(startTime))
                    .format('mm分ss秒')}，打包后的大小为${size}）`
                ),
                boxenOptions
              )
            );
          },
        });
      }
    },
  };
}

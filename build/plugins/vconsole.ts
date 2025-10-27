import type { PluginOption } from 'vite';
import path from 'node:path';
import { viteVConsole } from 'vite-plugin-vconsole';

/**
 * Configures the vconsole plugin for Vite.
 * @descCN 配置 vconsole vite 插件
 * @param viteEnv - The Vite environment configuration containing compression settings.
 * @see {@link https://github.com/vadxq/vite-plugin-vconsole}
 */
export function setupVConsolePlugin(viteEnv: Env.ImportMeta) {
  const { VITE_VCONSOLE } = viteEnv;

  const vconsolePlugin: PluginOption = viteVConsole({
    entry: path.resolve('src/main.tsx'),
    enabled: VITE_VCONSOLE,
    config: {
      maxLogNumber: 1000,
      theme: 'light',
    },
    dynamicConfig: {
      theme: `document.querySelectorAll('.dark').length ? 'dark' : 'light'`,
    },
    // If you need to switch themes without refreshing
    eventListener: `
      const targetElement = document.querySelector('body'); // Select the element to listen to (选择要监听的元素)
      const observerOptions = {
        attributes: true, // Listen for property changes (监听属性变化)
        attributeFilter: ['class'] // Only monitor class attribute changes (只监听 class 属性变化)
      };

      // Define callback functions to handle observed changes (定义回调函数来处理观察到的变化)
      function handleAttributeChange(mutationsList, observer) {
        for(let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (window && window.vConsole) {
              window.vConsole.dynamicChange.value = new Date().getTime();
            }
          }
        }
      }

      // Create an observer instance and pass in the callback function (创建观察者实例并传入回调函数)
      const observer = new MutationObserver(handleAttributeChange);

      // Start observing the target element (开始观察目标元素)
      observer.observe(targetElement, observerOptions);

      // Stop observing when it is no longer needed (当不再需要观察时停止观察)
      // observer.disconnect();
    `,
  });

  return vconsolePlugin;
}

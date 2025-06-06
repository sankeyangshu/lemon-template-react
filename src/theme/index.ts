/**
 * Theme setting
 * @descCN 主题设置
 */
export const themeSettings: App.Theme.ThemeSetting = {
  otherColor: {
    error: '#ff4d4f',
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
  },
  themeColor: '#009688',
  tokens: {
    dark: {
      colors: {
        'base-text': 'rgb(217, 217, 217)',
        'base-border': 'rgb(65, 66, 67)',
        layout: 'rgb(20, 20, 20)',
        container: 'rgb(31, 31, 31)',
      },
    },
    light: {
      colors: {
        'base-text': 'rgb(31, 31, 31)',
        'base-border': 'rgb(246, 246, 246)',
        layout: 'rgb(240, 242, 245)',
        container: 'rgb(255, 255, 255)',
      },
    },
  },
};

export { themeVars } from './utils';

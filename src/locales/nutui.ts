import enUS from '@nutui/nutui-react/dist/es/locales/en-US';
import zhCN from '@nutui/nutui-react/dist/es/locales/zh-CN';
import type { BaseLang } from '@nutui/nutui-react/dist/es/locales/base';

export const NutUiLocales: Record<App.I18n.LangType, BaseLang> = {
  'en-US': enUS,
  'zh-CN': zhCN,
};

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enUsTrans from './modules/en-US.json';
import zhCnTrans from './modules/zh-CN.json';

// 默认使用的语言
const defaultLanguage = 'zh-CN';

const resources = {
  'en-US': { translation: enUsTrans },
  'zh-CN': { translation: zhCnTrans },
} as const;

export function setupI18n() {
  // 创建i18n实例
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: defaultLanguage,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'], // 检测顺序
        caches: ['localStorage'], // 缓存到 localStorage
        lookupLocalStorage: 'language', // LocalStorage 键名
      },
    });
}

export { i18n };

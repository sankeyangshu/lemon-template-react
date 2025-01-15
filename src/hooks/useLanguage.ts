import { enUS, zhCN } from 'react-vant/es/locale';
import { i18n } from '@/locales';
import { useSettingStore } from '@/store/setting';

type LocaleType = 'zh-CN' | 'en-US';

export interface LanguageOptionType {
  text: string;
  value: LocaleType;
}

const isValidLocale = (locale: string): locale is LocaleType =>
  locale === 'zh-CN' || locale === 'en-US';

export const useLanguage = () => {
  const language = useSettingStore((state) => state.language);
  const setLanguage = useSettingStore((state) => state.setLanguage);

  const changeLanguage = (newLocale: LocaleType) => {
    if (!isValidLocale(newLocale) || newLocale === language) return;
    setLanguage(newLocale);
    i18n.changeLanguage(newLocale);
  };

  return {
    currentLocale: language === 'en-US' ? enUS : zhCN,
    storedLanguage: isValidLocale(language) ? language : 'zh-CN',
    changeLanguage,
  };
};

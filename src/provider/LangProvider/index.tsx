import { useState, type FC, type PropsWithChildren } from 'react';
import { defaultLanguage, i18n } from '@/locales';
import { localStg } from '@/utils/storage';
import { LangContext } from './utils';

const localeOptions: App.I18n.LangOption[] = [
  {
    value: 'zh-CN',
    label: '中文',
  },
  {
    value: 'en-US',
    label: 'English',
  },
];

const LangProvider: FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<App.I18n.LangType>(defaultLanguage);

  const changeLocale = (lang: App.I18n.LangType) => {
    i18n.changeLanguage(lang);

    setLocale(lang);

    localStg.setItem('language', lang);
  };

  return (
    <LangContext.Provider value={{ locale, localeOptions, setLocale: changeLocale }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;

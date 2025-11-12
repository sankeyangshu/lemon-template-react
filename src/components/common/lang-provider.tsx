import type { PropsWithChildren } from 'react';
import { createContext, use, useState } from 'react';
import { localStg } from '@/lib/storage';
import { defaultLanguage, i18n } from '@/locales';

interface LangProviderState {
  locale: App.I18n.LangType;
  localeOptions: App.I18n.LangOption[];
  setLocale: (locale: App.I18n.LangType) => void;
};

const LangProviderContext = createContext<LangProviderState>({
  locale: defaultLanguage,
  localeOptions: [
    {
      value: 'zh-CN',
      text: '中文',
    },
    {
      value: 'en-US',
      text: 'English',
    },
  ],
  setLocale: () => {},
});

export function LangProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<App.I18n.LangType>(() => localStg.getItem('language') || defaultLanguage);

  const localeOptions: App.I18n.LangOption[] = [
    {
      value: 'zh-CN',
      text: '中文',
    },
    {
      value: 'en-US',
      text: 'English',
    },
  ];

  const changeLocale = (lang: App.I18n.LangType) => {
    void i18n.changeLanguage(lang);

    setLocale(lang);

    localStg.setItem('language', lang);
  };

  return (
    <LangProviderContext
      value={{
        locale,
        localeOptions,
        setLocale: changeLocale,
      }}
    >
      {children}
    </LangProviderContext>
  );
}

/**
 * use Language Context
 * @descCN 使用语言 hook
 */
export function useLanguage() {
  const context = use(LangProviderContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LangProvider');
  }

  return context;
};

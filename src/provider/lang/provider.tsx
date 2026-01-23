import { useState } from 'react';
import { localStg } from '@/lib/storage';
import { defaultLanguage, i18n } from '@/locales';
import { LangProviderContext, LOCALE_OPTIONS } from './hook';

export interface LangProviderProps {
  children: React.ReactNode;
  defaultLocale?: App.I18n.LangType;
  storageKey?: 'language';
}

export function LangProvider({
  children,
  defaultLocale = defaultLanguage,
  storageKey = 'language',
  ...props
}: LangProviderProps) {
  const [locale, setLocale] = useState<App.I18n.LangType>(
    () => (localStg.getItem(storageKey)) || defaultLocale,
  );

  const value = {
    locale,
    localeOptions: LOCALE_OPTIONS,
    setLocale: (lang: App.I18n.LangType) => {
      void i18n.changeLanguage(lang);
      localStg.setItem(storageKey, lang);
      setLocale(lang);
    },
  };

  return (
    <LangProviderContext {...props} value={value}>
      {children}
    </LangProviderContext>
  );
}

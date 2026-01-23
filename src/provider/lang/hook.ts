import { createContext, use } from 'react';
import { defaultLanguage } from '@/locales';

export const LOCALE_OPTIONS: App.I18n.LangOption[] = [
  {
    value: 'zh-CN',
    text: '中文',
  },
  {
    value: 'en-US',
    text: 'English',
  },
];

interface LangProviderState {
  locale: App.I18n.LangType;
  localeOptions: App.I18n.LangOption[];
  setLocale: (locale: App.I18n.LangType) => void;
}

const initialState: LangProviderState = {
  locale: defaultLanguage,
  localeOptions: LOCALE_OPTIONS,
  setLocale: () => null,
};

export const LangProviderContext = createContext<LangProviderState>(initialState);

export function useLanguage() {
  const context = use(LangProviderContext);

  if (context === undefined)
    throw new Error('useLanguage must be used within a LangProvider');

  return context;
}

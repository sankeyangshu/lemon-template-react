import { ConfigProvider } from '@nutui/nutui-react';
import { useEffect, type FC, type PropsWithChildren } from 'react';
import { NutUiLocales } from '@/locales/nutui';
import { useThemeColorConfig } from '@/store/setting';
import { themeSettings } from '@/theme';
import { localStg } from '@/utils/storage';
import { useLanguageContext } from '../LangProvider/utils';
import { getUIComponentsTheme, setupThemeVarsToHtml } from './utils';
import '@nutui/nutui-react/dist/styles/themes/default.css'; // 默认主题
// import '@nutui/nutui-react/dist/styles/themes/dark.css'; // 默认暗黑主题

const useUIComponentsTheme = () => {
  const themeColors = useThemeColorConfig();

  const uiComponentsTheme = getUIComponentsTheme(themeColors);

  useEffect(() => {
    setupThemeVarsToHtml(themeColors, themeSettings.tokens);
    localStg.setItem('themeColor', themeColors.primary);
  }, [themeColors]);

  return { uiComponentsTheme };
};

const UIConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useLanguageContext();

  const { uiComponentsTheme } = useUIComponentsTheme();

  return (
    <ConfigProvider theme={uiComponentsTheme} locale={NutUiLocales[locale]} className="h-full">
      {children}
    </ConfigProvider>
  );
};

export default UIConfigProvider;

import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router';
import { ConfigProvider } from 'react-vant';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import Router from './routers';
import AuthGuard from './routers/utils/authGuard';
import { useSettingStore } from './store/setting';

function App() {
  // 获取全局状态管理仓库中系统设置状态
  const themeColor = useSettingStore((state) => state.themeColor);

  // react-vant 主题变量
  const [vantTheme, setVantTheme] = useState<Record<string, string | number>>({});

  // 这里的主题变量可能不完全，可以根据实际情况进行添加
  useEffect(() => {
    setVantTheme({
      buttonPrimaryBackgroundColor: themeColor,
      buttonPrimaryBorderColor: themeColor,
      typographyPrimaryColor: themeColor,
      checkboxCheckedIconColor: themeColor,
      numberKeyboardButtonBackgroundColor: themeColor,
      pickerLoadingIconColor: themeColor,
      radioCheckedIconColor: themeColor,
      selectorCheckedTextColor: themeColor,
      sliderActiveBackgroundColor: themeColor,
      switchOnBackgroundColor: themeColor,
      circleColor: themeColor,
      progressColor: themeColor,
      progressPivotBackgroundColor: themeColor,
      tagPrimaryColor: themeColor,
      navBarTextColor: themeColor,
      navBarIconColor: themeColor,
      paginationItemDefaultColor: themeColor,
      tabbarItemActiveColor: themeColor,
    });
  }, [themeColor]);

  // 初始化主题
  const { initTheme } = useTheme();
  initTheme();

  const { currentLocale } = useLanguage();

  return (
    <ConfigProvider className="wh-full" locale={currentLocale} themeVars={vantTheme}>
      <HashRouter>
        <AuthGuard>
          <Router />
        </AuthGuard>
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;

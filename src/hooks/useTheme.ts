import { useSettingStore } from '@/store/setting';

/**
 * 全局主题设置
 */
export const useTheme = () => {
  // 获取全局状态管理仓库中系统设置状态
  const darkMode = useSettingStore((state) => state.darkMode);

  // 切换暗黑模式
  const switchDarkMode = () => {
    const body = document.documentElement;

    if (darkMode === 'dark') {
      body.setAttribute('class', 'dark');
    } else {
      body.setAttribute('class', '');
    }
  };

  // 初始化主题
  const initTheme = () => {
    switchDarkMode();
  };

  return {
    switchDarkMode,
    initTheme,
  };
};

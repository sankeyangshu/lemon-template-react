import { Switch } from 'react-vant';
import { useTheme } from '@/hooks/useTheme';
import { useSettingStore } from '@/store/setting';

const SwitchDark = () => {
  const darkMode = useSettingStore((state) => state.darkMode);
  const setThemeDark = useSettingStore((state) => state.setThemeDark);

  const isDark = darkMode === 'dark';

  const { switchDarkMode } = useTheme();

  const onChangeDarkMode = () => {
    setThemeDark(isDark ? 'light' : 'dark');
    switchDarkMode();
  };

  return <Switch size="20" checked={!isDark} onClick={onChangeDarkMode} />;
};

export default SwitchDark;

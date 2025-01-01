import { Switch } from 'react-vant';
import { useSettingStore } from '@/store/setting';

const SwitchDark = () => {
  const darkMode = useSettingStore((state) => state.darkMode);
  const setThemeDark = useSettingStore((state) => state.setThemeDark);

  const isDark = darkMode === 'dark';

  const onChangeDarkMode = (checked: boolean) => {
    setThemeDark(checked ? 'dark' : 'light');
  };

  return <Switch size="20" checked={isDark} onChange={onChangeDarkMode} />;
};

export default SwitchDark;

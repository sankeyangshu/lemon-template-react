import { Switch } from '@nutui/nutui-react';
import { ThemeMode } from 'ahooks/lib/useTheme';
import { useThemeContext } from '@/provider/Theme/utils';
import Segmented from '../Segmented';
import SvgIcon from '../SvgIcon';
import type { ThemeModeType } from 'ahooks/lib/useTheme';
import type { FC } from 'react';

interface Props {
  mode?: 'Switch' | 'Segmented';
}

export const icons: Record<ThemeModeType, string> = {
  dark: 'moon',
  light: 'sunny',
  system: 'sun-moon',
};

const options = Object.values(ThemeMode).map((item) => {
  return {
    label: (
      <div className="w-70 flex justify-center">
        <SvgIcon className="h-32 text-22" localIcon={icons[item]} />
      </div>
    ),
    value: item,
  };
});

const SwitchDark: FC<Props> = ({ mode = 'Switch' }) => {
  const { themeScheme, darkMode, setThemeScheme } = useThemeContext();

  if (mode === 'Segmented') {
    return (
      <Segmented
        options={options}
        value={themeScheme}
        onChange={(val) => setThemeScheme(val as ThemeMode)}
      />
    );
  }

  const onChangeDarkMode = (checked: boolean) => {
    setThemeScheme(checked ? 'dark' : 'light');
  };

  return <Switch checked={darkMode} onChange={onChangeDarkMode} />;
};

export default SwitchDark;

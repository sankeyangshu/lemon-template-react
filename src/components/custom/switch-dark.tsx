import type { SvgName } from '~virtual/svg-component';
import { DARK_MODE_MEDIA_QUERY, useTheme } from '@/components/common/theme-provider';
import { cn } from '@/lib/utils';
import Segmented from './segmented';
import SvgIcon from './svg-icon';

interface SwitchDarkProps {
  mode?: 'Switch' | 'Segmented';
}

const icons: Record<StorageType.Local['themeMode'], SvgName> = {
  light: 'icon-sunny',
  dark: 'icon-moon',
  system: 'icon-sun-moon',
};

const options = Object.keys(icons).map((key) => ({
  label: (
    <div className="flex w-17.5 justify-center">
      <SvgIcon className="text-2xl text-base-content" localIcon={icons[key as StorageType.Local['themeMode']]} />
    </div>
  ),
  value: key,
}));

function SwitchDark(props: SwitchDarkProps) {
  const { mode } = props;

  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia(DARK_MODE_MEDIA_QUERY).matches);

  if (mode === 'Segmented') {
    return (
      <Segmented
        options={options}
        value={theme}
        onChange={(val) => setTheme(val as StorageType.Local['themeMode'])}
        className="h-14"
      />
    );
  }

  return (
    <label className="relative inline-block h-[30px] w-[53px]">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? 'light' : 'dark')}
        className="peer size-0 opacity-0"
      />

      {/* Slider 背景 */}
      <div
        className={cn(
          `
            absolute inset-0 z-0 cursor-pointer overflow-hidden rounded-[30px] bg-[#2196f3]
            transition-all duration-400
            peer-checked:bg-black
            peer-focus:shadow-[0_0_1px_#2196f3]
          `,
        )}
      >
        {/* 太阳/月亮主体 */}
        <div
          className={cn(
            'absolute bottom-1 left-1 size-[22px] rounded-full transition-all duration-400',
            isDark ? 'translate-x-[23px] bg-gray-200' : 'bg-yellow-400',
          )}
        >
          {/* 月亮斑点 */}
          <svg
            className={cn(
              'absolute top-[2.5px] left-[8.5px] z-4 size-[5px] fill-gray-500',
              'transition-opacity duration-400',
              isDark ? 'opacity-100' : 'opacity-0',
            )}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className={cn(
              'absolute top-[8.5px] left-[1.5px] z-4 size-[8.5px] fill-gray-500',
              'transition-opacity duration-400',
              isDark ? 'opacity-100' : 'opacity-0',
            )}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className={cn(
              'absolute top-[15px] left-[13.5px] z-4 size-[2.5px] fill-gray-500',
              'transition-opacity duration-400',
              isDark ? 'opacity-100' : 'opacity-0',
            )}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>

          {/* 光线 */}
          <svg
            className="absolute top-[-7px] left-[-7px] z-[-1] size-[36px] fill-white opacity-10"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className="absolute top-[-50%] left-[-50%] z-[-1] size-[46px] fill-white opacity-10"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className="absolute top-[-15px] left-[-15px] z-[-1] size-[50px] fill-white opacity-10"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>

          {/* 云朵 - 深色 */}
          <svg
            className={`
              absolute top-[12.5px] left-[25px] w-[33px] animate-[cloud-move_6s_infinite_1s]
              fill-[#ccc]
            `}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className={`
              absolute top-[8.5px] left-[37px] w-[17px] animate-[cloud-move_6s_infinite_1s]
              fill-[#ccc]
            `}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className={`
              absolute top-[20px] left-[15px] w-[25px] animate-[cloud-move_6s_infinite_1s]
              fill-[#ccc]
            `}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>

          {/* 云朵 - 浅色 */}
          <svg
            className="absolute top-[15px] left-[30px] w-[33px] animate-cloud-move fill-[#eee]"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className="absolute top-[12px] left-[40px] w-[17px] animate-cloud-move fill-[#eee]"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className="absolute top-[22px] left-[18.5px] w-[25px] animate-cloud-move fill-[#eee]"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
        </div>

        {/* 星星容器 */}
        <div
          className={cn(
            'transition-all duration-400',
            isDark ? 'translate-y-0 opacity-100' : 'translate-y-[-28px] opacity-0',
          )}
        >
          <svg
            className={`
              absolute top-[1.5px] left-[2.5px] w-[17px] animate-[star-twinkle_2s_infinite_0.3s]
              fill-white transition-all duration-400
            `}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg
            className={`
              absolute top-[13.5px] left-[2.5px] w-[5px] animate-star-twinkle fill-white
              transition-all duration-400
            `}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg
            className={`
              absolute top-[17px] left-[8.5px] w-[10px] animate-[star-twinkle_2s_infinite_0.6s]
              fill-white transition-all duration-400
            `}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg
            className={`
              absolute top-0 left-[15px] w-[15px] animate-[star-twinkle_2s_infinite_1.3s] fill-white
              transition-all duration-400
            `}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
        </div>
      </div>
    </label>
  );
}

export default SwitchDark;

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { toggleCssDarkMode } from '@/provider/Theme/utils';
import { getRgb } from '@/utils/color';
import { localStg } from '@/utils/storage';

/**
 * 路由加载组件
 */
const Loading = () => {
  const { t } = useTranslation();

  const themeColor = localStg.getItem('themeColor') || '#16a085';

  const darkMode = localStg.getItem('darkMode') || false;

  if (darkMode) {
    toggleCssDarkMode(darkMode);
  }

  const { b, g, r } = getRgb(themeColor);

  const loadingClasses = [
    'left-0 top-0',
    'left-0 bottom-0 animate-delay-500',
    'right-0 top-0 animate-delay-1000',
    'right-0 bottom-0 animate-delay-1500',
  ];

  return (
    <div
      className="fixed left-0 top-0 wh-full flex-center flex-col bg-layout"
      style={{ '--primary-color': `${r} ${g} ${b}` } as React.CSSProperties}
    >
      <div className="my-36 h-56 w-56">
        <div className="relative h-full animate-spin">
          {loadingClasses.map((item) => {
            return (
              <div
                className={clsx('absolute h-16 w-16 animate-pulse rounded-8 bg-primary', item)}
                key={item}
              />
            );
          })}
        </div>
      </div>
      <div className="text-24 text-primary font-500">{t('system.loading')}</div>
    </div>
  );
};

export default Loading;

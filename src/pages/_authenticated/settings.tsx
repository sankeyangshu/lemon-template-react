import type { PrimaryColor } from '@/provider/color';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/custom/nav-bar';
import SvgIcon from '@/components/custom/svg-icon';
import SwitchDark from '@/components/custom/switch-dark';
import { PRIMARY_COLORS, useThemeColor } from '@/provider/color';

export const Route = createFileRoute('/_authenticated/settings')({
  staticData: {
    title: '主题设置',
    i18nKey: 'router.themeSetting',
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const router = useRouter();

  const { primaryColor, setPrimaryColor } = useThemeColor();

  return (
    <>
      <NavBar
        title={t('router.themeSetting')}
        leftArrow={(
          <SvgIcon className="text-2xl" icon="mdi:chevron-left" />
        )}
        onClickLeft={() => router.history.back()}
      />

      <div className="divider">{t('system.themeMode')}</div>
      <div className="flex items-center justify-center">
        <SwitchDark mode="Segmented" />
      </div>

      <div className="divider">{t('system.systemTheme')}</div>
      <div className="flex justify-center">
        <div className="grid grid-cols-8 gap-2">
          {Object.keys(PRIMARY_COLORS).map((color) => (
            <div
              key={color}
              className={`
                flex size-7.5 cursor-pointer items-center justify-center rounded-md border
                border-solid
              `}
              style={{ backgroundColor: PRIMARY_COLORS[color as PrimaryColor] }}
              onClick={() => setPrimaryColor(color as PrimaryColor)}
            >
              {primaryColor === color && <SvgIcon className="text-2xl text-white" icon="mdi:check" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

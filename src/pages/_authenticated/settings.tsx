import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/custom/nav-bar';
import SvgIcon from '@/components/custom/svg-icon';
import SwitchDark from '@/components/custom/switch-dark';

export const Route = createFileRoute('/_authenticated/settings')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const router = useRouter();

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

      {/* <div className="divider">{t('system.systemTheme')}</div> */}

    </>
  );
}

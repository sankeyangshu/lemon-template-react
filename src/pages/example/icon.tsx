import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/custom/nav-bar';
import SvgIcon from '@/components/custom/svg-icon';

export const Route = createFileRoute('/example/icon')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const router = useRouter();

  const iconifyList = [
    'mdi:github',
    'mdi:palette',
    'mdi:book-open-variant',
    'mdi:cellphone-settings-variant',
    'mdi:logout',
  ];

  const svgList = ['logo', 'moon', 'sunny'];

  return (
    <>
      <NavBar
        title={t('router.icon')}
        leftArrow={(
          <SvgIcon className="text-2xl" icon="mdi:chevron-left" />
        )}
        onClickLeft={() => router.history.back()}
      />
      <div className="box-border w-full p-4">
        <div className="mb-3 border-l-3 border-solid border-l-primary pl-3 leading-7">
          <div className="my-1 text-lg font-bold">Iconify Icon</div>
        </div>
        <div className="flex">
          {iconifyList.map((item) => (
            <div key={item}>
              <SvgIcon icon={item} className="mr-2.5 text-2xl" />
            </div>
          ))}
        </div>

        <div className="mt-4 mb-3 border-l-3 border-solid border-l-primary pl-3 leading-7">
          <div className="my-1 text-lg font-bold">Local SVG Icon</div>
        </div>
        <div className="flex">
          {svgList.map((item) => (
            <SvgIcon key={item} localIcon={item} className="mr-2.5 text-2xl" />
          ))}
        </div>
      </div>
    </>
  );
}

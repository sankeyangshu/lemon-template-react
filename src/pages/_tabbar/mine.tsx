import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { version } from '~root/package.json';
import { Cell, CellGroup } from '@/components/custom/cell';
import SvgIcon from '@/components/custom/svg-icon';

export const Route = createFileRoute('/_tabbar/mine')({
  component: RouteComponent,
});

const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

function RouteComponent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="size-full">
      <img src={src} alt="banner" className="w-full object-fill" />

      <div className={`
        relative mx-4 -mt-10 mb-2.5 flex items-center rounded-lg bg-white p-4
        dark:bg-[#1C1C1E]
      `}
      >
        <img
          className="size-12 rounded-full object-cover"
          src={src}
          alt="avatar"
        />
        <div className="ml-2.5 flex-1 text-xl" onClick={() => void navigate({ to: '/sign-in' })}>
          {t('router.login')}
        </div>
      </div>

      <div className="box-border px-4">
        <CellGroup>
          <Cell
            title={(
              <div className="flex items-center">
                <SvgIcon icon="mdi:palette" className="mr-2.5 text-lg" />
                {t('router.themeSetting')}
              </div>
            )}
            isLink
          />
          <Cell
            title={(
              <div className="flex items-center">
                <SvgIcon icon="mdi:book-open-variant" className="mr-2.5 text-lg" />
                {t('mine.projectDocs')}
              </div>
            )}
            isLink
            onClick={() =>
              window.open('https://sankeyangshu.github.io/lemon-template-docs/react/', '_blank')}
          />
          <Cell
            title={(
              <div className="flex items-center">
                <SvgIcon icon="mdi:cellphone-settings-variant" className="mr-2.5 text-lg" />
                {t('mine.systemVersion')}
              </div>
            )}
            extra={`v${version}`}
          />
        </CellGroup>
      </div>
    </div>
  );
}

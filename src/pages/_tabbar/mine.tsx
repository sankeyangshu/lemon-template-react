import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { isNotNil } from 'es-toolkit';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { version } from '~root/package.json';
import { Cell, CellGroup } from '@/components/custom/cell';
import SvgIcon from '@/components/custom/svg-icon';
import { useUserStore } from '@/store/user';

export const Route = createFileRoute('/_tabbar/mine')({
  component: RouteComponent,
});

const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

function RouteComponent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const logoutModalRef = useRef<HTMLDialogElement>(null);

  const userInfo = useUserStore((state) => state.userInfo);
  const logout = useUserStore((state) => state.logout);
  const isLogin = isNotNil(userInfo?.id);

  return (
    <div className="w-full">
      <img src={src} alt="banner" className="w-full object-fill" />

      <div className={`
        relative mx-4 -mt-10 mb-2.5 flex items-center rounded-lg bg-white p-4
        dark:bg-[#1C1C1E]
      `}
      >
        <img
          className="size-12 rounded-full object-cover"
          src={isLogin ? userInfo.avatar : src}
          alt="avatar"
        />
        {isLogin
          ? (
              <div className="ml-2.5 flex-1">
                <div className="mb-0.5 text-xl">{userInfo.nickname}</div>
                <div className="truncate text-sm">{userInfo.sign}</div>
              </div>
            )
          : (
              <div className="ml-2.5 flex-1 text-xl" onClick={() => void navigate({ to: '/sign-in' })}>
                {t('router.login')}
              </div>
            )}
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
          {isLogin && (
            <Cell
              title={(
                <div className="flex items-center">
                  <SvgIcon icon="mdi:logout" className="mr-2.5 text-lg" />
                  {t('mine.logout')}
                </div>
              )}
              isLink
              onClick={() => logoutModalRef.current?.showModal()}
            />
          )}
        </CellGroup>
      </div>

      <dialog ref={logoutModalRef} className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{t('mine.tips')}</h3>
          <p className="py-4">{t('mine.logoutTips')}</p>
          <div className="modal-action">
            <form method="dialog">
              <button
                type="button"
                className="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
              >
                ✕
              </button>
              <button type="button" className="btn btn-soft btn-primary" onClick={logout}>{t('system.confirm')}</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

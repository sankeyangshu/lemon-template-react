import { version } from '~root/package.json';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Cell, Dialog } from 'react-vant';
import IconifyIcon from '@/components/Icon/IconifyIcon';
import { useUserStore } from '@/store/user';

const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

const Mine = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  const navigate = useNavigate();

  const userInfo = useUserStore((state) => state.userInfo);
  const isLogin = !!userInfo?.id;

  const logout = useUserStore((state) => state.logout);
  const onClickLogout = () => {
    Dialog.confirm({
      title: t('mine.tips'),
      message: t('mine.logoutTips'),
      onCancel: () => {},
      onConfirm: () => logout(),
    });
  };
  return (
    <div className="wh-full">
      <img className="w-full object-fill" src={src} alt="banner" />

      <div className="relative mx-16 mb-10 flex-y-center rounded-10 bg-[--color-background-2] p-15 -mt-40">
        <img
          className="h-50 w-50 rounded-[50%] object-cover"
          src={isLogin ? userInfo.avatar : src}
          alt="avatar"
        />
        {!isLogin ? (
          <div className="ml-10 flex-1" onClick={() => navigate('/login')}>
            <div className="mb-2 text-20">
              {t('login.login')}/{t('login.register')}
            </div>
          </div>
        ) : (
          <div className="ml-10 flex-1">
            <div className="mb-2 text-20">{userInfo.nickname}</div>
            <div className="truncate text-14 color-[--color-text]">{userInfo.sign}</div>
          </div>
        )}
      </div>

      <Cell.Group card>
        <Cell
          title={t('route.themeSetting')}
          isLink
          icon={
            <div className="leading-24">
              <IconifyIcon icon="mdi:palette" className="text-18" />
            </div>
          }
          onClick={() => navigate('/theme')}
        />
        <Cell
          title={t('mine.projectDocs')}
          isLink
          icon={
            <div className="leading-24">
              <IconifyIcon icon="mdi:book-open-variant" className="text-18" />
            </div>
          }
          onClick={() =>
            window.open('https://sankeyangshu.github.io/lemon-template-docs/react/', '_blank')
          }
        />
        <Cell
          title={t('mine.systemVersion')}
          value={`v${version}`}
          icon={
            <div className="leading-24">
              <IconifyIcon icon="mdi:cellphone-settings-variant" className="text-18" />
            </div>
          }
        />
        {isLogin && (
          <Cell
            title={t('mine.logout')}
            isLink
            icon={
              <div className="leading-24">
                <IconifyIcon icon="mdi:logout" className="text-18" />
              </div>
            }
            onClick={onClickLogout}
          />
        )}
      </Cell.Group>
    </div>
  );
};

export default Mine;

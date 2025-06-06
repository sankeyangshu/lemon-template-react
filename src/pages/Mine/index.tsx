import { ArrowRight } from '@nutui/icons-react';
import { Cell, Dialog } from '@nutui/nutui-react';
import { version } from '~root/package.json';
import { useTranslation } from 'react-i18next';
import SvgIcon from '@/components/SvgIcon';
import { useRouter } from '@/routers/hooks';
import { useUserStore } from '@/store/user';

const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

const Mine = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  const router = useRouter();

  const userInfo = useUserStore((state) => state.userInfo);
  const isLogin = !!userInfo?.id;

  const logout = useUserStore((state) => state.logout);
  const onClickLogout = () => {
    Dialog.alert({
      title: t('page.mine.tips'),
      content: t('page.mine.logoutTips'),
      onCancel: () => {},
      onConfirm: () => logout(),
    });
  };

  return (
    <div className="wh-full">
      <img className="w-full object-fill" src={src} alt="banner" />

      <div className="relative mx-16 mb-10 flex-y-center rounded-10 bg-container p-15 -mt-40">
        <img
          className="h-50 w-50 rounded-[50%] object-cover"
          src={isLogin ? userInfo.avatar : src}
          alt="avatar"
        />
        {!isLogin ? (
          <div className="ml-10 flex-1" onClick={() => router.push('/login')}>
            <div className="mb-2 text-20">
              {t('page.login.login')}/{t('page.login.register')}
            </div>
          </div>
        ) : (
          <div className="ml-10 flex-1">
            <div className="mb-2 text-20">{userInfo.nickname}</div>
            <div className="truncate text-14 color-[--color-text]">{userInfo.sign}</div>
          </div>
        )}
      </div>

      <div className="box-border px16">
        <Cell.Group>
          <Cell
            title={
              <div className="flex-y-center">
                <SvgIcon icon="mdi:palette" size={18} className="mr-10" />
                {t('router.themeSetting')}
              </div>
            }
            extra={<ArrowRight width={18} height={18} />}
            clickable
            onClick={() => router.push('/theme')}
          />
          <Cell
            title={
              <div className="mr-10 flex-y-center">
                <SvgIcon icon="mdi:book-open-variant" size={18} className="mr-10" />
                {t('page.mine.projectDocs')}
              </div>
            }
            extra={<ArrowRight width={18} height={18} />}
            clickable
            onClick={() =>
              window.open('https://sankeyangshu.github.io/lemon-template-docs/react/', '_blank')
            }
          />
          <Cell
            title={
              <div className="mr-10 flex-y-center">
                <SvgIcon icon="mdi:cellphone-settings-variant" size={18} className="mr-10" />
                {t('page.mine.systemVersion')}
              </div>
            }
            extra={`v${version}`}
          />
          {isLogin && (
            <Cell
              title={
                <div className="mr-10 flex-y-center">
                  <SvgIcon icon="mdi:logout" size={18} className="mr-10" />
                  {t('page.mine.logout')}
                </div>
              }
              extra={<ArrowRight width={18} height={18} />}
              clickable
              onClick={onClickLogout}
            />
          )}
        </Cell.Group>
      </div>
    </div>
  );
};

export default Mine;

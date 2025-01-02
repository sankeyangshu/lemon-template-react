import { version } from '~root/package.json';
import { useNavigate } from 'react-router';
import { Cell, Dialog, Image } from 'react-vant';
import IconifyIcon from '@/components/Icon/IconifyIcon';
import { useUserStore } from '@/store/user';

const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

const Mine = () => {
  const navigate = useNavigate();

  const userInfo = useUserStore((state) => state.userInfo);
  const isLogin = !!userInfo?.id;

  const logout = useUserStore((state) => state.logout);
  const onClickLogout = () => {
    Dialog.confirm({
      title: '温馨提示',
      message: '确定要退出登录吗？',
      onCancel: () => {},
      onConfirm: () => logout(),
    });
  };
  return (
    <div className="w-full">
      <Image width="100%" src={src} />

      <div className="relative mx-16 mb-10 flex-y-center rounded-10 bg-[--color-background-2] p-15 -mt-40">
        <Image className="h-50 w-50" round fit="cover" src={isLogin ? userInfo.avatar : src} />
        {!isLogin ? (
          <div className="ml-10 flex-1" onClick={() => navigate('/login')}>
            <div className="mb-2 text-20">登录/注册</div>
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
          title="主题设置"
          isLink
          icon={
            <div className="leading-24">
              <IconifyIcon icon="mdi:palette" className="text-18" />
            </div>
          }
          onClick={() => navigate('/theme')}
        />
        <Cell
          title="项目文档"
          isLink
          icon={
            <div className="leading-24">
              <IconifyIcon icon="mdi:book-open-variant" className="text-18" />
            </div>
          }
        />
        <Cell
          title="系统版本"
          value={`v${version}`}
          icon={
            <div className="leading-24">
              <IconifyIcon icon="mdi:cellphone-settings-variant" className="text-18" />
            </div>
          }
        />
        {isLogin && (
          <Cell
            title="退出登录"
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

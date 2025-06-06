import { Button, ConfigProvider, Form, Image, Input } from '@nutui/nutui-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoImg from '@/assets/images/logo.png';
import SvgIcon from '@/components/SvgIcon';
import { useRouter } from '@/routers/hooks';
import { useUserStore } from '@/store/user';
import type { loginDataType } from '@/api/System/user';
import PasswordInput from './components/PasswordInput';

const src = logoImg;

const Login = () => {
  const formTheme = {
    nutuiCellGroupBackgroundColor: 'transparent',
    nutuiCellBackgroundColor: 'transparent',
    nutuiInputLineheight: '20px',
    nutuiFormItemErrorMessageColor: '#ff0f23',
  };

  // 使用i18n全局函数
  const { t } = useTranslation();

  // 表单数据
  const [form] = Form.useForm();

  // 登录按钮加载状态
  const [loading, setLoading] = useState(false);

  const login = useUserStore((state) => state.login);
  const router = useRouter();

  const onFinish = async (values: loginDataType) => {
    try {
      setLoading(true); // 按钮进入加载状态
      // 登录
      await login(values);
      router.push('/');
    } finally {
      setLoading(false); // 关闭按钮加载状态
    }
  };

  return (
    <div className="box-border wh-full flex-y-center flex-col p-20">
      <div className="mb-30 mt-20">
        <Image width="100" height="100" radius="50%" fit="cover" src={src} />
      </div>

      <ConfigProvider className="w-full" theme={formTheme}>
        <Form
          form={form}
          initialValues={{
            username: 'admin',
            password: '123456',
          }}
          className="w-full"
          onFinish={onFinish}
          footer={
            <Button
              className="h-50 w-full"
              loading={loading}
              shape="round"
              nativeType="submit"
              type="primary"
              block
            >
              {t('page.login.login')}
            </Button>
          }
        >
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              rules={[{ required: true, message: t('page.login.usernameError') }]}
              name="username"
              className="h-50 text-center bg-container!"
            >
              <Input type="text" placeholder={t('page.login.usernameError')} />
            </Form.Item>
          </div>
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              rules={[{ required: true, message: t('page.login.passwordError') }]}
              name="password"
              className="h-50 bg-container!"
            >
              <PasswordInput placeholder={t('page.login.passwordError')} />
            </Form.Item>
          </div>
        </Form>
      </ConfigProvider>

      <div className="mt-100 flex-center">
        <SvgIcon className="mx-60 text-32" icon="mdi:wechat" color="#83DC42" />
        <SvgIcon className="text-32" icon="mdi:sina-weibo" color="#F9221D" />
        <SvgIcon className="mx-60 text-32" icon="mdi:github" />
      </div>

      <div className="mt-32 h-20 flex-center text-14 color-primary leading-20">
        <div onClick={() => router.push('/forgetPassword')}>{t('page.login.forgotPassword')}</div>
        <div className="mx-15">|</div>
        <div onClick={() => router.push('/register')}>{t('page.login.registerAccount')}</div>
      </div>
    </div>
  );
};

export default Login;

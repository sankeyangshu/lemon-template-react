import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button, Form, Image, Input } from 'react-vant';
import logoImg from '@/assets/images/logo.png';
import IconifyIcon from '@/components/Icon/IconifyIcon';
import { useUserStore } from '@/store/user';
import type { loginDataType } from '@/api/System/user';
import PasswordInput from './components/PasswordInput';

const src = logoImg;

const Login = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  // 表单数据
  const [form] = Form.useForm();

  // 登录按钮加载状态
  const [loading, setLoading] = useState(false);

  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const onFinish = async (values: loginDataType) => {
    try {
      setLoading(true); // 按钮进入加载状态
      // 登录
      await login(values);
      navigate('/');
    } finally {
      setLoading(false); // 关闭按钮加载状态
    }
  };

  return (
    <div className="box-border wh-full flex-y-center flex-col p-20">
      <div className="mb-30 mt-20">
        <Image width="100" height="100" round fit="cover" src={src} />
      </div>

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
            className="w-full"
            loading={loading}
            round
            nativeType="submit"
            type="primary"
            block
          >
            {t('login.login')}
          </Button>
        }
      >
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: t('login.usernameError') }]}
            name="username"
          >
            <Input placeholder={t('login.usernameError')} />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: t('login.passwordError') }]}
            name="password"
          >
            <PasswordInput placeholder={t('login.passwordError')} />
          </Form.Item>
        </div>
      </Form>

      <div className="mt-100 flex-center">
        <IconifyIcon className="mx-60 text-32 color-[#83DC42]" icon="mdi:wechat" />
        <IconifyIcon className="text-32 color-[#F9221D]" icon="mdi:sina-weibo" />
        <IconifyIcon className="mx-60 text-32" icon="mdi:github" />
      </div>

      <div className="mt-32 h-20 flex-center text-14 color-[var(--rv-primary-color)] leading-20">
        <div onClick={() => navigate('/forgetPassword')}>{t('login.forgotPassword')}</div>
        <div className="mx-15">|</div>
        <div onClick={() => navigate('/register')}>{t('login.registerAccount')}</div>
      </div>
    </div>
  );
};

export default Login;

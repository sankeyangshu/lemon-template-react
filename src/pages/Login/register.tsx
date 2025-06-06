import { Button, Checkbox, ConfigProvider, Form, Image, Input } from '@nutui/nutui-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoImg from '@/assets/images/logo.png';
import PasswordInput from './components/PasswordInput';

const src = logoImg;

const Register = () => {
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
  const [loading] = useState(false);

  const [isAgreeLicense, setIsAgreeLicense] = useState(false);

  return (
    <div className="box-border wh-full flex-y-center flex-col p-20">
      <div className="mb-30 mt-20">
        <Image width="100" height="100" radius="50%" fit="cover" src={src} />
      </div>

      <ConfigProvider className="w-full" theme={formTheme}>
        <Form
          form={form}
          className="w-full"
          footer={
            <Button
              className="h-50 w-full"
              loading={loading}
              shape="round"
              nativeType="submit"
              type="primary"
              block
            >
              {t('page.login.register')}
            </Button>
          }
        >
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              rules={[{ required: true, message: t('page.login.usernameError') }]}
              name="username"
              className="h-50 bg-container!"
            >
              <Input placeholder={t('page.login.usernameError')} />
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
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              name="confirmPassword"
              rules={[
                { required: true, message: t('page.login.againEnterPassword') },
                {
                  validator: (_, value) => {
                    if (form.getFieldValue('password') === value) {
                      return Promise.resolve(true);
                    }
                    return Promise.reject(new Error(t('page.login.passwordInconsistent')));
                  },
                },
              ]}
              className="h-50 bg-container!"
            >
              <PasswordInput
                name="confirmPassword"
                placeholder={t('page.login.againEnterPassword')}
              />
            </Form.Item>
          </div>
        </Form>
      </ConfigProvider>

      <div className="fixed bottom-40 mx-20 h-20 flex-center text-14 leading-20">
        <Checkbox checked={isAgreeLicense} onChange={setIsAgreeLicense}>
          <div>
            {t('page.login.readAgreement')}
            <span className="color-[var(--rv-primary-color)]">
              {' '}
              <a href="https://www.baidu.com" target="_blank" rel="noreferrer">
                {t('page.login.privacyPolicy')}
              </a>
            </span>
            {t('page.login.and')}
            <span className="color-[var(--rv-primary-color)]">
              <a href="https://www.baidu.com" target="_blank" rel="noreferrer">
                {t('page.login.userAgreement')}
              </a>
            </span>
          </div>
        </Checkbox>
      </div>
    </div>
  );
};

export default Register;

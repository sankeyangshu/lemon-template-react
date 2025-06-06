import { Button, ConfigProvider, Form, Image, Input } from '@nutui/nutui-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoImg from '@/assets/images/logo.png';
import { validPhone } from '@/utils/validate';
import PasswordInput from './components/PasswordInput';

const src = logoImg;

const ForgotPassword = () => {
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
              {t('page.login.confirmReset')}
            </Button>
          }
        >
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              rules={[{ required: true, message: t('page.login.pleaseEnterPhone') }]}
              name="phone"
              className="h-50 text-center bg-container!"
            >
              <Input type="tel" placeholder={t('page.login.pleaseEnterPhone')} />
            </Form.Item>
          </div>
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              rules={[
                { required: true, message: t('page.login.pleaseEnterVerificationCode') },
                {
                  validator: (_, value) => {
                    if (validPhone(value)) {
                      return Promise.resolve(true);
                    }
                    return Promise.reject(new Error(t('page.login.pleaseEnterValidPhone')));
                  },
                },
              ]}
              name="code"
              className="h-50 bg-container!"
            >
              <div className="flex-y-center">
                <Input type="tel" placeholder={t('page.login.pleaseEnterVerificationCode')} />
                <Button size="small" type="primary">
                  {t('page.login.code')}
                </Button>
              </div>
            </Form.Item>
          </div>
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              rules={[{ required: true, message: t('page.login.pleaseEnterNewPassword') }]}
              name="password"
              className="h-50 bg-container!"
            >
              <PasswordInput name="password" placeholder={t('page.login.pleaseEnterNewPassword')} />
            </Form.Item>
          </div>
          <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
            <Form.Item
              required={false}
              rules={[
                { required: true, message: t('page.login.pleaseEnterNewPasswordAgain') },
                {
                  validator: (_, value) => {
                    if (form.getFieldValue('password') === value) {
                      return Promise.resolve(true);
                    }
                    return Promise.reject(new Error(t('page.login.passwordInconsistent')));
                  },
                },
              ]}
              name="confirmPassword"
              className="h-50 bg-container!"
            >
              <PasswordInput
                name="confirmPassword"
                placeholder={t('page.login.pleaseEnterNewPasswordAgain')}
              />
            </Form.Item>
          </div>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default ForgotPassword;

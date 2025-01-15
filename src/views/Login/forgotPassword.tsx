import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Image, Input } from 'react-vant';
import logoImg from '@/assets/images/logo.png';
import { validPhone } from '@/utils/validate';
import PasswordInput from './components/PasswordInput';

const src = logoImg;

const ForgotPassword = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  // 表单数据
  const [form] = Form.useForm();

  // 登录按钮加载状态
  const [loading] = useState(false);

  return (
    <div className="box-border wh-full flex-y-center flex-col p-20">
      <div className="mb-30 mt-20">
        <Image width="100" height="100" round fit="cover" src={src} />
      </div>

      <Form
        form={form}
        className="w-full"
        footer={
          <Button
            className="w-full"
            loading={loading}
            round
            native-type="submit"
            type="primary"
            block
          >
            {t('login.confirmReset')}
          </Button>
        }
      >
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: t('login.pleaseEnterPhone') }]}
            name="phone"
          >
            <Input type="tel" placeholder={t('login.pleaseEnterPhone')} />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[
              { required: true, message: t('login.pleaseEnterVerificationCode') },
              {
                validator: (_, value) => {
                  if (validPhone(value)) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error(t('login.pleaseEnterValidPhone')));
                },
              },
            ]}
            name="code"
          >
            <Input
              type="tel"
              placeholder={t('login.pleaseEnterVerificationCode')}
              suffix={
                <Button size="small" type="primary">
                  {t('login.code')}
                </Button>
              }
            />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: t('login.pleaseEnterNewPassword') }]}
            name="password"
          >
            <PasswordInput name="password" placeholder={t('login.pleaseEnterNewPassword')} />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[
              { required: true, message: t('login.pleaseEnterNewPasswordAgain') },
              {
                validator: (_, value) => {
                  if (form.getFieldValue('password') === value) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error(t('login.passwordInconsistent')));
                },
              },
            ]}
            name="confirmPassword"
          >
            <PasswordInput
              name="confirmPassword"
              placeholder={t('login.pleaseEnterNewPasswordAgain')}
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;

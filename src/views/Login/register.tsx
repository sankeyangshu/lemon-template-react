import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Form, Image, Input } from 'react-vant';
import logoImg from '@/assets/images/logo.png';
import PasswordInput from './components/PasswordInput';

const src = logoImg;

const Register = () => {
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
            nativeType="submit"
            type="primary"
            block
          >
            {t('login.register')}
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
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            name="confirmPassword"
            rules={[
              { required: true, message: t('login.againEnterPassword') },
              {
                validator: (_, value) => {
                  if (form.getFieldValue('password') === value) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error(t('login.passwordInconsistent')));
                },
              },
            ]}
          >
            <PasswordInput name="confirmPassword" placeholder={t('login.againEnterPassword')} />
          </Form.Item>
        </div>
      </Form>

      <div className="fixed bottom-40 mx-20 h-20 flex-center text-14 leading-20">
        <Checkbox checked={isAgreeLicense} shape="square" onChange={setIsAgreeLicense}>
          <div>
            {t('login.readAgreement')}
            <span className="color-[var(--rv-primary-color)]">《{t('login.privacyPolicy')}》</span>
            {t('login.and')}
            <span className="color-[var(--rv-primary-color)]">《{t('login.userAgreement')}》</span>
          </div>
        </Checkbox>
      </div>
    </div>
  );
};

export default Register;

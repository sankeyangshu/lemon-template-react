import { useState } from 'react';
import { Button, Checkbox, Form, Image, Input } from 'react-vant';
import PasswordInput from './components/PasswordInput';

const src = '/src/assets/images/logo.png';

const Register = () => {
  // 表单数据
  const [form] = Form.useForm();

  // 登录按钮加载状态
  const [loading] = useState(false);

  const [isAgreeLicense, setIsAgreeLicense] = useState(false);

  return (
    <div className="box-border wh-full flex-y-center flex-col p-20">
      <div className="mb-30 mt-20">
        <Image className="h-100 w-100" round fit="cover" src={src} />
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
            注册
          </Button>
        }
      >
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: '请填写用户名' }]}
            name="username"
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: '请填写密码' }]}
            name="password"
          >
            <PasswordInput placeholder="请输入密码" />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            name="confirmPassword"
            rules={[
              { required: true, message: '请再次输入密码' },
              {
                validator: (_, value) => {
                  if (form.getFieldValue('password') === value) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error('两次输入密码不一致'));
                },
              },
            ]}
          >
            <PasswordInput name="confirmPassword" placeholder="请再次输入密码" />
          </Form.Item>
        </div>
      </Form>

      <div className="fixed bottom-40 h-20 flex-center text-14 leading-20">
        <Checkbox checked={isAgreeLicense} shape="square" onChange={setIsAgreeLicense}>
          <div>
            我已阅读并同意
            <span className="color-[var(--rv-primary-color)]">《隐私条款》</span>及
            <span className="color-[var(--rv-primary-color)]">《用户协议》</span>
          </div>
        </Checkbox>
      </div>
    </div>
  );
};

export default Register;

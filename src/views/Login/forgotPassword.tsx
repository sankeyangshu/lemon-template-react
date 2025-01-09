import { useState } from 'react';
import { Button, Form, Image, Input } from 'react-vant';
import { validPhone } from '@/utils/validate';
import PasswordInput from './components/PasswordInput';

const src = '/src/assets/images/logo.png';

const ForgotPassword = () => {
  // 表单数据
  const [form] = Form.useForm();

  // 登录按钮加载状态
  const [loading] = useState(false);

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
            native-type="submit"
            type="primary"
            block
          >
            确认重置
          </Button>
        }
      >
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: '请输入手机号' }]}
            name="phone"
          >
            <Input type="tel" placeholder="请输入手机号" />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[
              { required: true, message: '请输入短信验证码' },
              {
                validator: (_, value) => {
                  if (validPhone(value)) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error('请输入正确的手机号'));
                },
              },
            ]}
            name="code"
          >
            <Input
              type="tel"
              placeholder="请输入短信验证码"
              suffix={
                <Button size="small" type="primary">
                  获取验证码
                </Button>
              }
            />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[{ required: true, message: '请输入新密码' }]}
            name="password"
          >
            <PasswordInput name="password" placeholder="请输入新密码" />
          </Form.Item>
        </div>
        <div className="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]">
          <Form.Item
            required={false}
            rules={[
              { required: true, message: '请输入新密码' },
              {
                validator: (_, value) => {
                  if (form.getFieldValue('password') === value) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error('两次输入密码不一致'));
                },
              },
            ]}
            name="confirmPassword"
          >
            <PasswordInput name="confirmPassword" placeholder="请再次输入新密码" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;

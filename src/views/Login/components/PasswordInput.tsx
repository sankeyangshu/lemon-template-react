import { ClosedEye, EyeO } from '@react-vant/icons';
import { useState } from 'react';
import { Input } from 'react-vant';

interface PropsType {
  name?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const PasswordInput = ({ name = 'password', placeholder = '请输入密码', onChange }: PropsType) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onPasswordChange = (value: string) => {
    onChange?.(value);
  };

  return (
    <Input
      name={name}
      type={isShowPassword ? 'text' : 'password'}
      placeholder={placeholder}
      suffix={
        isShowPassword ? (
          <EyeO onClick={() => setIsShowPassword(false)} />
        ) : (
          <ClosedEye onClick={() => setIsShowPassword(true)} />
        )
      }
      onChange={onPasswordChange}
    />
  );
};

export default PasswordInput;
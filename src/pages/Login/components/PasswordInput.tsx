import { Eye, Marshalling } from '@nutui/icons-react';
import { Input } from '@nutui/nutui-react';
import { useState } from 'react';

interface PropsType {
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const PasswordInput = ({
  name = 'password',
  placeholder = '请输入密码',
  value,
  defaultValue,
  onChange,
}: PropsType) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onPasswordChange = (val: string) => {
    onChange?.(val);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Input
        name={name}
        type={isShowPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onPasswordChange}
      />
      <div className="right" onClick={() => setIsShowPassword(!isShowPassword)}>
        {isShowPassword ? (
          <Eye color="var(--nutui-gray-7)" />
        ) : (
          <Marshalling color="var(--nutui-gray-7)" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;

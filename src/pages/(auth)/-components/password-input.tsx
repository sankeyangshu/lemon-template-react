import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import SvgIcon from '@/components/custom/svg-icon';

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: string;
}

function PasswordInput({ error, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label
        className={`
          box-border flex h-12.5 w-full rounded-2xl bg-white px-4 py-3
          dark:bg-[#1f1f1f]
        `}
      >
        <input
          type={showPassword ? 'text' : 'password'}
          className={`
            flex-1 bg-transparent text-base
            focus:outline-none
          `}
          {...props}
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="ml-2 flex cursor-pointer items-center justify-center"
        >
          <SvgIcon icon={showPassword ? 'mdi:eye' : 'mdi:eye-closed'} />
        </div>
      </label>
      {error !== undefined && (
        <p className="mt-2 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default PasswordInput;

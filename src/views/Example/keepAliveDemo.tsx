import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cell, Field, Stepper } from 'react-vant';

const KeepAliveDemo = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  const [text, setText] = useState('');
  const [value, setValue] = useState(0);

  return (
    <div className="box-border w-full p-20">
      <Cell.Group border={false} className="mb-10 w-full">
        <Field value={text} label="文本" placeholder="请输入文本" onChange={setText} />
      </Cell.Group>
      <Stepper defaultValue={value} onChange={(v) => setValue(v!)} />

      <div className="mt-20 color-[var(--van-text-color-2)]">{t('example.keepAliveTips')}</div>
    </div>
  );
};

export default KeepAliveDemo;

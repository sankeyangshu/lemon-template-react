import { ConfigProvider, Input, InputNumber } from '@nutui/nutui-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const KeepAliveDemo = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  const [text, setText] = useState('');
  const [value, setValue] = useState(0);

  const customTheme = {
    nutuiInputnumberButtonWidth: '30px',
    nutuiInputnumberButtonHeight: '30px',
    nutuiInputnumberButtonBorderRadius: '2px',
    nutuiInputnumberInputHeight: '30px',
    nutuiInputnumberInputMargin: '0 2px',
  };

  return (
    <div className="box-border w-full p-20">
      <div className="mb-10 w-full">
        <Input value={text} type="text" placeholder="请输入文本" onChange={setText} />
      </div>
      <ConfigProvider theme={customTheme}>
        <InputNumber value={value} onChange={(v) => setValue(v as number)} />
      </ConfigProvider>

      <div className="mt-20 color-[var(--van-text-color-2)]">{t('page.example.keepAliveTips')}</div>
    </div>
  );
};

export default KeepAliveDemo;

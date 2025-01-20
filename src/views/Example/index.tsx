import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Cell, Picker, Popup } from 'react-vant';
import SwitchDark from '@/components/SwitchDark';
import { useLanguage } from '@/hooks/useLanguage';
import type { LanguageOptionType } from '@/hooks/useLanguage';
import type { PopupPosition } from 'react-vant';

const Example = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  const menuItems = useMemo(
    () => [
      { title: `💿 ${t('route.mock')}`, route: 'mock' },
      { title: `📊 ${t('route.echarts')}`, route: 'echarts' },
      { title: `🎨 ${t('route.icon')}`, route: 'icon' },
      { title: `🙅 ${t('route.notFound')}`, route: '404' },
      { title: `🧡 ${t('route.keepAlive')}`, route: 'keepAlive' },
    ],
    [t]
  );

  const navigate = useNavigate();

  const [isShowLanguagePicker, setIsShowLanguagePicker] = useState<PopupPosition>('');

  // 语言选项
  const languageColumns: LanguageOptionType[] = [
    { text: '简体中文', value: 'zh-CN' },
    { text: 'English', value: 'en-US' },
  ];

  const { storedLanguage, changeLanguage } = useLanguage();

  const getCurrentLanguageText = () => {
    return languageColumns.find((item) => item.value === storedLanguage)?.text;
  };

  const [currentLanguage, setCurrentLanguage] = useState(() => ({
    text: getCurrentLanguageText(),
    value: storedLanguage,
  }));

  const onConfirmLanguage = (item: LanguageOptionType) => {
    setCurrentLanguage(item);
    changeLanguage(item.value);
    setIsShowLanguagePicker('');
  };

  return (
    <div className="my-20">
      <Cell.Group card title={t('example.basicSetting')}>
        <Cell title={`🌓 ${t('example.darkMode')}`} rightIcon={<SwitchDark />} />
        <Cell
          title={`📚 ${t('example.language')}`}
          value={getCurrentLanguageText()}
          isLink
          onClick={() => setIsShowLanguagePicker('bottom')}
        />
      </Cell.Group>

      <Cell.Group card title={t('example.exampleComponent')}>
        {menuItems.map((item) => (
          <Cell
            key={item.route}
            title={item.title}
            isLink
            onClick={() => navigate(`/${item.route}`)}
          />
        ))}
      </Cell.Group>

      <Popup
        visible={isShowLanguagePicker === 'bottom'}
        style={{ height: '40%' }}
        position="bottom"
      >
        <Picker
          defaultValue={currentLanguage.value}
          placeholder=""
          columns={languageColumns}
          onCancel={() => setIsShowLanguagePicker('')}
          onConfirm={(_: string, selectRow: LanguageOptionType) => onConfirmLanguage(selectRow)}
        />
      </Popup>
    </div>
  );
};

export default Example;

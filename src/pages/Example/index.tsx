import { ArrowRight } from '@nutui/icons-react';
import { Cell, Picker } from '@nutui/nutui-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwitchDark from '@/components/SwitchDark';
import { useLanguageContext } from '@/provider/LangProvider/utils';
import { useRouter } from '@/routers/hooks';
import type { PickerValue } from '@nutui/nutui-react';

const Example = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  const router = useRouter();

  const { locale, localeOptions, setLocale } = useLanguageContext();

  const menuItems = useMemo(
    () => [
      { title: `💿 ${t('router.mock')}`, route: 'mock' },
      { title: `📊 ${t('router.echarts')}`, route: 'echarts' },
      { title: `🎨 ${t('router.icon')}`, route: 'icon' },
      { title: `🙅 ${t('router.notFound')}`, route: '404' },
      { title: `🧡 ${t('router.keepAlive')}`, route: 'keepAlive' },
    ],
    [t]
  );

  const [isShowLanguagePicker, setIsShowLanguagePicker] = useState(false);

  const getCurrentLanguageText = () => {
    return localeOptions.find((item) => item.value === locale)?.label;
  };

  const onConfirmLanguage = (item: PickerValue[]) => {
    setLocale(item[0] as App.I18n.LangType);
  };

  return (
    <div className="box-border p-20">
      <Cell.Group title={t('page.example.basicSetting')}>
        <Cell title={`🌓 ${t('page.example.darkMode')}`} extra={<SwitchDark />} />
        <Cell
          title={`📚 ${t('page.example.language')}`}
          clickable
          extra={getCurrentLanguageText()}
          onClick={() => setIsShowLanguagePicker(!isShowLanguagePicker)}
        />
      </Cell.Group>

      <Cell.Group title={t('page.example.exampleComponent')}>
        {menuItems.map((item) => (
          <Cell
            key={item.route}
            title={item.title}
            clickable
            extra={<ArrowRight />}
            onClick={() => router.push(`/${item.route}`)}
          />
        ))}
      </Cell.Group>

      <Picker
        visible={isShowLanguagePicker}
        defaultValue={[locale]}
        options={[localeOptions]}
        onConfirm={(_, value) => onConfirmLanguage(value)}
        onClose={() => setIsShowLanguagePicker(false)}
      />
    </div>
  );
};

export default Example;

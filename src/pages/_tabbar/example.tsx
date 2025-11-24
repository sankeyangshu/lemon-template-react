import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/components/common/lang-provider';
import { Cell, CellGroup } from '@/components/custom/cell';
import Picker from '@/components/custom/picker';
import SwitchDark from '@/components/custom/switch-dark';

export const Route = createFileRoute('/_tabbar/example')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const menuItems = [
    { title: `💿 ${t('router.mock')}`, path: '/example/mock' },
    { title: `📊 ${t('router.echarts')}`, path: '/example/echarts' },
    { title: `🎨 ${t('router.icon')}`, path: '/example/icon' },
    { title: `🧡 ${t('router.pagination')}`, path: '/example/pagination' },
    { title: `🙅 ${t('router.notFound')}`, path: '/404' },
  ];

  const { locale, localeOptions, setLocale } = useLanguage();
  const [showLangPicker, setShowLangPicker] = useState(false);

  const getCurrentLanguageText = () => {
    return localeOptions.find((item) => item.value === locale)?.text;
  };

  return (
    <div className="box-border p-4">
      <CellGroup title={t('example.basicSetting')}>
        <Cell title={`🌓 ${t('example.darkMode')}`} titleClass="flex items-center" extra={<SwitchDark />} />
        <Cell title={`📚 ${t('example.language')}`} value={getCurrentLanguageText()} isLink onClick={() => setShowLangPicker(true)} />
      </CellGroup>

      <CellGroup title={t('example.exampleComponent')}>
        {menuItems.map((item) => (
          <Cell
            key={item.path}
            title={item.title}
            isLink
            onClick={() => void navigate({ to: item.path })}
          />
        ))}
      </CellGroup>

      <Picker
        visible={showLangPicker}
        columns={localeOptions}
        onConfirm={(lang) => {
          if (!Array.isArray(lang)) {
            setLocale(lang.value as App.I18n.LangType);
          }
        }}
        onClose={() => setShowLangPicker(false)}
      />
    </div>
  );
}

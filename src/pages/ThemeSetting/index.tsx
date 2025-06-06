import { Check } from '@nutui/icons-react';
import { Cell, Divider, Picker, Switch } from '@nutui/nutui-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwitchDark from '@/components/SwitchDark';
import { useSettingStore, useThemeColorConfig } from '@/store/setting';
import { themeSettings } from '@/theme';
import type { PickerOption, PickerOptions } from '@nutui/nutui-react';

const ThemeSetting = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  // 预定义主题颜色
  const themeColorList = [
    themeSettings.themeColor,
    '#daa96e',
    '#0c819f',
    '#27ae60',
    '#ff5c93',
    '#e74c3c',
    '#fd726d',
    '#f39c12',
    '#9b59b6',
  ];

  const { primary: themeColor } = useThemeColorConfig();
  const setThemeColor = useSettingStore((state) => state.setThemeColor);

  const isPageAnimate = useSettingStore((state) => state.isPageAnimate);
  const pageAnimate = useSettingStore((state) => state.pageAnimate);
  const setIsPageAnimate = useSettingStore((state) => state.setIsPageAnimate);
  const setPageAnimate = useSettingStore((state) => state.setPageAnimate);

  const [isShowPicker, setIsShowPicker] = useState(false);

  const onClickOpenPicker = () => {
    if (isPageAnimate) {
      setIsShowPicker(true);
    }
  };

  // 动画选项
  const animateColumns = useMemo(
    () => [
      { value: 'zoom-fade', label: t('page.themeSetting.themeGradient') },
      { value: 'zoom-out', label: t('page.themeSetting.themeFlash') },
      { value: 'fade-slide', label: t('page.themeSetting.themeSlide') },
      { value: 'fade', label: t('page.themeSetting.themeFade') },
      { value: 'fade-bottom', label: t('page.themeSetting.themeBottom') },
      { value: 'fade-scale', label: t('page.themeSetting.themeScale') },
    ],
    [t]
  );

  const getCurrentAnimateText = () => {
    return animateColumns.find((item) => item.value === pageAnimate)?.label;
  };

  const [currentAnimate, setCurrentAnimate] = useState<PickerOption>({
    label: getCurrentAnimateText() || '',
    value: pageAnimate,
  });

  const onConfirmAnimate = (selectRow: PickerOptions) => {
    setCurrentAnimate(selectRow[0]);
    setPageAnimate(selectRow[0].value as App.Theme.PageAnimate);
    setIsShowPicker(false);
  };

  return (
    <>
      <Divider>{t('page.themeSetting.themeMode')}</Divider>
      <div className="flex-center">
        <SwitchDark mode="Segmented" />
      </div>

      <Divider>{t('page.themeSetting.systemTheme')}</Divider>
      <div className="flex-x-center">
        <div className="grid cols-8 gap-8">
          {themeColorList.map((item) => (
            <div
              key={item}
              className="h-30 w-30 flex-center border-2 border-[#e5ebe7] rounded-6 border-solid"
              style={{ backgroundColor: item }}
              onClick={() => setThemeColor('primary', item)}
            >
              {item === themeColor && <Check width={20} color="#fff" />}
            </div>
          ))}
        </div>
      </div>

      <Divider>{t('page.themeSetting.pageAnimation')}</Divider>
      <Cell.Group className="mx-20">
        <Cell
          title={t('page.themeSetting.enableAnimation')}
          extra={<Switch checked={isPageAnimate} onChange={setIsPageAnimate} />}
        />
        <Cell
          title={t('page.themeSetting.animationType')}
          extra={currentAnimate.label}
          clickable={isPageAnimate}
          onClick={onClickOpenPicker}
        ></Cell>
      </Cell.Group>

      <Picker
        visible={isShowPicker}
        defaultValue={[currentAnimate.value]}
        options={[animateColumns]}
        onConfirm={(value) => onConfirmAnimate(value)}
        onClose={() => setIsShowPicker(false)}
      />
    </>
  );
};

export default ThemeSetting;

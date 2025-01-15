import { Success } from '@react-vant/icons';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cell, Divider, Field, Picker, Popup, Switch } from 'react-vant';
import SwitchDark from '@/components/SwitchDark';
import { DEFAULT_THEMECOLOR } from '@/config';
import { useSettingStore } from '@/store/setting';

type selectedOptionsType = {
  text: string;
  value: string;
};

const ThemeSetting = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  // 预定义主题颜色
  const themeColorList = [
    DEFAULT_THEMECOLOR,
    '#009688',
    '#daa96e',
    '#0c819f',
    '#27ae60',
    '#ff5c93',
    '#e74c3c',
    '#fd726d',
    '#f39c12',
    '#9b59b6',
  ];

  const themeColor = useSettingStore((state) => state.themeColor);
  const setThemeColor = useSettingStore((state) => state.setThemeColor);

  const isPageAnimate = useSettingStore((state) => state.isPageAnimate);
  const pageAnimateType = useSettingStore((state) => state.pageAnimateType);
  const setPageAnimate = useSettingStore((state) => state.setPageAnimate);
  const setPageAnimateType = useSettingStore((state) => state.setPageAnimateType);

  const [isShowPicker, setIsShowPicker] = useState(false);

  const onClickOpenPicker = () => {
    if (isPageAnimate) {
      setIsShowPicker(true);
    }
  };

  // 动画选项
  const animateColumns = useMemo(
    () => [
      { value: 'zoom-fade', text: t('themeSetting.themeGradient') },
      { value: 'zoom-out', text: t('themeSetting.themeFlash') },
      { value: 'fade-slide', text: t('themeSetting.themeSlide') },
      { value: 'fade', text: t('themeSetting.themeFade') },
      { value: 'fade-bottom', text: t('themeSetting.themeBottom') },
      { value: 'fade-scale', text: t('themeSetting.themeScale') },
    ],
    [t]
  );

  const getCurrentAnimateText = () => {
    return animateColumns.find((item) => item.value === pageAnimateType)?.text;
  };

  const [currentAnimate, setCurrentAnimate] = useState({
    text: getCurrentAnimateText(),
    value: pageAnimateType,
  });

  const onConfirmAnimate = (selectRow: selectedOptionsType) => {
    setCurrentAnimate(selectRow);
    setPageAnimateType(selectRow.value);
    setIsShowPicker(false);
  };

  return (
    <>
      <Divider>{t('themeSetting.themeMode')}</Divider>
      <Cell.Group card>
        <Cell center title={t('example.darkMode')} rightIcon={<SwitchDark />} />
      </Cell.Group>

      <Divider>{t('themeSetting.systemTheme')}</Divider>
      <div className="flex-x-center">
        <div className="grid cols-8 gap-8">
          {themeColorList.map((item) => (
            <div
              key={item}
              className="h-30 w-30 flex-center border-2 border-[#e5ebe7] rounded-6 border-solid"
              style={{ backgroundColor: item }}
              onClick={() => setThemeColor(item)}
            >
              {item === themeColor && <Success fontSize={20} color="#fff" />}
            </div>
          ))}
        </div>
      </div>

      <Divider>{t('themeSetting.pageAnimation')}</Divider>
      <Cell.Group card>
        <Cell
          center
          title={t('themeSetting.enableAnimation')}
          rightIcon={<Switch size="22" checked={isPageAnimate} onChange={setPageAnimate} />}
        />
        <Cell center title={t('themeSetting.animationType')}>
          <Field
            value={currentAnimate.text}
            disabled={!isPageAnimate}
            readOnly
            is-link
            center
            border={false}
            className="!p-0"
            align="right"
            onClick={onClickOpenPicker}
          />
        </Cell>
      </Cell.Group>

      <Popup
        visible={isShowPicker}
        style={{ height: '40%' }}
        position="bottom"
        round
        onClose={() => setIsShowPicker(false)}
      >
        <Picker
          defaultValue={currentAnimate.value}
          placeholder=""
          columns={animateColumns}
          onCancel={() => setIsShowPicker(false)}
          onConfirm={(_: string, selectRow: selectedOptionsType) => onConfirmAnimate(selectRow)}
        />
      </Popup>
    </>
  );
};

export default ThemeSetting;

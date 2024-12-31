import { Success } from '@react-vant/icons';
import { useState } from 'react';
import { Cell, Divider, Field, Picker, Popup, Switch } from 'react-vant';
import SwitchDark from '@/components/SwitchDark';
import { DEFAULT_THEMECOLOR } from '@/config';
import { useSettingStore } from '@/store/setting';

type selectedOptionsType = {
  text: string;
  value: string;
};

const ThemeSetting = () => {
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
  const animateColumns = [
    { value: 'zoom-fade', text: '渐变' },
    { value: 'zoom-out', text: '闪现' },
    { value: 'fade-slide', text: '滑动' },
    { value: 'fade', text: '消退' },
    { value: 'fade-bottom', text: '底部消退' },
    { value: 'fade-scale', text: '缩放消退' },
  ];

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
      <Divider>主题模式</Divider>
      <Cell.Group card title="基础设置">
        <Cell center title="暗黑模式" rightIcon={<SwitchDark />} />
      </Cell.Group>

      <Divider>系统主题色</Divider>
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

      <Divider>页面切换动画</Divider>
      <Cell.Group card>
        <Cell
          center
          title="开启动画"
          rightIcon={<Switch size="22" checked={isPageAnimate} onChange={setPageAnimate} />}
        />
        <Cell center title="动画类型">
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

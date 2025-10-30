import type { CSSProperties, FC, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement, useState } from 'react';
import { cn } from '@/lib/utils';
import TabbarContext from './context';

interface TabbarProps<T = number | string> {
  /**
   * 当前选中标签的名称或索引值
   */
  value?: T;
  /**
   * 默认选中标签的名称或索引值
   */
  defaultValue?: T;
  /**
   * 是否固定在底部
   */
  fixed?: boolean;
  /**
   * 元素 z-index
   */
  zIndex?: number;
  /**
   * 选中标签的颜色
   */
  activeColor?: string;
  /**
   * 未选中标签的颜色
   */
  inactiveColor?: string;
  /**
   * 固定在底部时，是否在标签位置生成一个等高的占位元素
   */
  placeholder?: boolean;
  /**
   * 是否开启底部安全区适配，设置 fixed 时默认开启
   */
  safeAreaInsetBottom?: boolean;
  /**
   * 子元素
   */
  children?: ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: CSSProperties;
  /**
   * 切换标签时触发
   */
  onChange?: (name: T) => void;
}

const Tabbar: FC<TabbarProps> = (props) => {
  const {
    value,
    defaultValue,
    fixed,
    zIndex,
    activeColor,
    inactiveColor,
    placeholder,
    safeAreaInsetBottom,
    children,
    className,
    style,
    onChange,
  } = {
    fixed: true,
    defaultValue: 0,
    zIndex: 10,
    activeColor: 'var(--color-primary)',
    inactiveColor: 'var(--color-primary-content)',
    ...props,
  };

  const [innerValue, setInnerValue] = useState(defaultValue);

  const current = value !== undefined ? value : innerValue;

  const renderPlaceholder = (renderContent: () => ReactNode) => {
    return (
      <div className={cn('h-12.5')}>
        {renderContent()}
      </div>
    );
  };

  // 开启底部安全区适配，fixed默认开启
  const enableSafeArea = () => safeAreaInsetBottom ?? fixed;

  const styles = () => {
    return {
      ...style,
      zIndex,
    };
  };

  const setActive = (active: number | string) => {
    if (active !== current) {
      setInnerValue(active);
      onChange?.(active);
    }
  };

  const renderTabbar = () => {
    return (
      <TabbarContext value={{
        selectIndex: current,
        activeColor,
        inactiveColor,
      }}
      >
        <div
          className={cn('box-border flex h-12.5 w-full bg-base-300', {
            'fixed bottom-0 left-0 w-full px-4': fixed,
            'pb-safe': enableSafeArea(),
          }, className)}
          style={styles()}
        >
          {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              return cloneElement(
                child as ReactElement<{ setActive?: (active: number | string) => void; index?: number }>,
                {
                  setActive,
                  index,
                },
              );
            }
            return null;
          })}
        </div>
      </TabbarContext>
    );
  };

  if (fixed && placeholder) {
    return renderPlaceholder(renderTabbar);
  }

  return renderTabbar();
};

export default Tabbar;

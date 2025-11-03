import type { CSSProperties, FC, ReactNode } from 'react';
import { use } from 'react';
import { cn } from '@/lib/utils';
import TabbarContext from './context';

interface TabbarItemProps<T = number | string> {
  /** 标签名称，作为匹配的标识符 */
  name?: T;
  /** 图标 */
  icon?: ReactNode | ((active: boolean) => ReactNode);
  /** 索引值，用于匹配当前选中的标签 */
  index?: number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode | ((active: boolean) => ReactNode);
  /** 点击标签时触发的事件 */
  onClick?: (event: React.MouseEvent) => void;
  /** 设置标签为选中状态的事件 */
  setActive?: (active: T) => void;
}

const TabbarItem: FC<TabbarItemProps> = (props) => {
  const ctx = use(TabbarContext);

  const active = (props.name ?? props.index) === ctx?.selectIndex;

  const renderNodeWithActive = (
    node: ReactNode | ((active: boolean) => ReactNode),
  ): ReactNode => {
    if (typeof node === 'function') {
      return node(active);
    }
    return node;
  };

  const handleClick = (event: React.MouseEvent) => {
    const value = props.name ?? props.index;
    if (value !== undefined) {
      props.setActive?.(value);
    }
    // 执行用户自定义的 onClick 回调
    props.onClick?.(event);
  };

  return (
    <div
      className={cn(`flex h-full flex-1 flex-col items-center justify-center text-sm`, props.className)}
      style={{ ...props.style, color: active ? ctx?.activeColor : ctx?.inactiveColor }}
      onClick={handleClick}
    >
      <div className="mb-1 block">{renderNodeWithActive(props.icon)}</div>
      <div>{renderNodeWithActive(props.children)}</div>
    </div>
  );
};

export default TabbarItem;

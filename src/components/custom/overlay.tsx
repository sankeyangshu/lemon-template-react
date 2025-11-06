import type { CSSProperties, FC, ReactNode } from 'react';
import { useEventListener } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface OverlayProps {
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 设置`z-index`
   * @default 1000
   */
  zIndex?: number;
  /**
   * 动画时长，单位`ms`，设置为 0 可以禁用动画
   * @default 300
   */
  duration?: number;
  /**
   * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   * @default true
   */
  lockScroll?: boolean;
  /**
   * 是否点击遮罩关闭
   * @default true
   */
  closeOnOverlayClick?: boolean;
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
   * 点击时触发
   */
  onClick?: (e: React.MouseEvent) => void;
}

const Overlay: FC<OverlayProps> = (props) => {
  const {
    visible = false,
    zIndex = 1000,
    duration = 300,
    lockScroll = true,
    closeOnOverlayClick = true,
    children,
    style,
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  const [innerVisible, setInnerVisible] = useState(visible);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setInnerVisible(true), 0);
      return () => clearTimeout(timer);
    }

    // 延迟卸载，等动画完成
    const timer = setTimeout(() => setInnerVisible(false), duration);
    return () => clearTimeout(timer);
  }, [visible, duration]);

  // 阻止滚动
  const preventTouchMove = (event: TouchEvent) => {
    if (!lockScroll)
      return;

    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
      event.preventDefault();
    }

    event.stopPropagation();
  };

  useEventListener('touchmove', preventTouchMove, { target: nodeRef, passive: false });

  const styles: CSSProperties = {
    ...style,
    zIndex,
    animationDuration: `${duration}ms`,
    touchAction: lockScroll ? 'none' : undefined,
  };

  const handleClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick) {
      props.onClick?.(e);
    }
  };

  return (
    innerVisible
      ? (
          <div
            ref={nodeRef}
            className={cn(
              'fixed top-0 left-0 size-full bg-[#000000b3]',
              visible ? 'animate-in fade-in' : 'animate-out fade-out',
              props.className,
            )}
            style={styles}
            onClick={handleClick}
          >
            {children}
          </div>
        )
      : null
  );
};

export default Overlay;

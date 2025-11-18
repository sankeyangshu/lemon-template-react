import type { CSSProperties, FC, ReactNode } from 'react';
import { useEventListener } from '@reactuses/core';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface OverlayProps {
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

  // 监听 visible 变化
  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => {
        setInnerVisible(true);
      });
    } else if (duration === 0) {
      queueMicrotask(() => {
        setInnerVisible(false);
      });
    }
  }, [visible, duration]);

  const shouldRender = visible || innerVisible;

  // 监听动画结束事件
  const handleAnimationEnd = (e: React.AnimationEvent) => {
    // 只处理遮罩本身的动画结束事件
    if (e.target === nodeRef.current && !visible) {
      setInnerVisible(false);
    }
  };

  // 阻止滚动
  const preventTouchMove = (event: TouchEvent) => {
    if (!lockScroll)
      return;

    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
      event.preventDefault();
    }

    event.stopPropagation();
  };

  useEventListener('touchmove', preventTouchMove, nodeRef, { passive: false });

  const styles = {
    ...style,
    zIndex,
    '--tw-duration': `${duration}ms`,
    'touchAction': lockScroll ? 'none' : undefined,
    'animationFillMode': 'both',
  };

  const handleClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick) {
      props.onClick?.(e);
    }
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={nodeRef}
      className={cn(
        'fixed top-0 left-0 size-full bg-[#000000b3]',
        visible ? 'animate-in fade-in' : 'animate-out fade-out',
        props.className,
      )}
      style={styles}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default Overlay;

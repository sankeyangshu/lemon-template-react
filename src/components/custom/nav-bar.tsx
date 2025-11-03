import type { CSSProperties, FC, ReactNode } from 'react';
import { isValidElement } from 'react';
import { cn } from '@/lib/utils';

interface NavBarProps {
  /**
   * 标题
   */
  title?: ReactNode;
  /**
   * 是否固定在顶部
   */
  fixed?: boolean;
  /**
   * 导航栏 z-index
   */
  zIndex?: number | string;
  /**
   * 左侧文案
   */
  leftText?: ReactNode;
  /**
   * 右侧文案
   */
  rightText?: ReactNode;
  /**
   * 自定义左侧箭头
   */
  leftArrow?: boolean | ReactNode;
  /**
   * 是否开启顶部安全区适配
   */
  safeAreaInsetTop?: boolean;
  /**
   * 固定在顶部时，是否在标签位置生成一个等高的占位元素
   */
  placeholder?: boolean;
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
  onClickLeft?: (e: React.MouseEvent) => void;
  onClickRight?: (e: React.MouseEvent) => void;
}

const NavBar: FC<NavBarProps> = (props) => {
  const {
    title,
    fixed,
    zIndex,
    leftText,
    rightText,
    leftArrow,
    safeAreaInsetTop,
    placeholder,
    children,
    className,
    style,
    onClickLeft,
    onClickRight,
  } = { fixed: false, safeAreaInsetTop: false, placeholder: false, zIndex: 10, ...props };

  const renderLeft = () => {
    if (typeof leftText !== 'string' && isValidElement(leftText)) {
      return leftText;
    }

    return (
      <div
        className={cn(
          'flex h-full max-w-31 cursor-pointer flex-row items-center gap-4 pr-4',
          {
            'box-border w-27': Boolean(title),
            'px-0': Boolean(leftText) === false && Boolean(leftArrow) === false,
          },
        )}
      >
        {Boolean(leftArrow) && (
          <div
            className="flex flex-row items-center justify-center gap-4"
            onClick={onClickLeft}
          >
            {leftArrow}
          </div>
        )}
        {leftText}
      </div>
    );
  };

  const renderRight = () => {
    if (typeof rightText !== 'string' && isValidElement(rightText)) {
      return rightText;
    }

    return (
      <div
        className={cn(`
          flex h-full max-w-31 cursor-pointer flex-row items-center justify-end gap-4 pl-4
        `, {
          'box-border w-27': Boolean(title),
        })}
        onClick={onClickRight}
      >
        {rightText}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div
        className={cn(
          'flex h-full flex-1 flex-row items-center text-center text-lg font-semibold',
          {
            'max-w-31 justify-center': Boolean(title),
          },
        )}
      >
        {title ?? children}
      </div>
    );
  };

  const styles = () => {
    return {
      ...style,
      zIndex,
    };
  };

  const renderWrapper = () => {
    return (
      <div
        className={cn(`
          relative box-border flex h-11 w-full flex-row items-center justify-between overflow-hidden
          bg-white px-4 text-sm text-base-content
          dark:bg-[#1C1C1E]
        `, {
          'fixed top-0 left-0 w-full': fixed,
          'pt-safe': safeAreaInsetTop,
        }, className)}
        style={styles()}
      >
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </div>
    );
  };

  return (
    <>
      {fixed && placeholder
        ? (
            <div className="h-11">
              {renderWrapper()}
            </div>
          )
        : (
            renderWrapper()
          )}
    </>
  );
};

export default NavBar;

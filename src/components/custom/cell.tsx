import type { CSSProperties, FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { isNotNil } from 'es-toolkit';
import { cloneElement } from 'react';
import { cn } from '@/lib/utils';
import SvgIcon from './svg-icon';

interface CellGroupProps {
  /**
   * 分组标题
   */
  title?: ReactNode;
  /**
   * 是否展示为圆角卡片风格
   */
  card?: boolean;
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
}

interface CellProps {
  /**
   * 左侧标题
   */
  title?: ReactNode;
  /**
   * 右侧内容
   */
  value?: number | string | ReactNode;
  /**
   * 标题下方的描述信息
   */
  label?: ReactNode;
  /**
   * 是否使内容垂直居中
   */
  center?: boolean;
  /**
   * 是否展示右侧箭头并开启点击反馈
   */
  isLink?: boolean;
  /**
   * 是否开启点击反馈
   */
  clickable?: boolean;
  /**
   * 左侧标题额外样式
   */
  titleStyle?: CSSProperties;
  /**
   * 左侧标题额外类名
   */
  titleClass?: string;
  /**
   * 右侧内容额外类名
   */
  valueClass?: string;
  /**
   * 描述信息额外类名
   */
  labelClass?: string;
  /**
   * 箭头方向
   */
  arrowDirection?: 'up' | 'down' | 'left' | 'right';
  /**
   * 是否显示内边框
   */
  border?: boolean;
  /**
   * 自定义左侧图标
   */
  icon?: ReactNode;
  /**
   * 右侧自定义图标
   */
  rightIcon?: ReactNode;
  /**
   * 自定义单元格最右侧的额外内容
   */
  extra?: ReactNode;
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
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const CellGroup: FC<CellGroupProps> = (props) => {
  const {
    title,
    card,
    children,
    className,
    style,
  } = props;

  const renderTitle = () => {
    if (isNotNil(title)) {
      return (
        <div className="px-4 pt-4 pb-2 text-sm leading-4 text-base-content">
          {title}
        </div>
      );
    }

    return null;
  };

  const renderGroup = () => (
    <div
      className={cn({ 'overflow-hidden rounded-lg px-4': card })}
    >
      {children}
    </div>
  );

  return (
    <div className={className} style={style}>
      {renderTitle()}
      {renderGroup()}
    </div>
  );
};

export const Cell: FC<CellProps> = (props) => {
  const renderLabel = () => {
    if (isNotNil(props.label)) {
      return (
        <div className={cn(`
          mt-1 text-xs leading-4 text-[#707070]
          dark:text-[#969799]
        `, props.labelClass)}
        >
          {props.label}
        </div>
      );
    }
    return null;
  };

  const renderTitle = () => {
    if (isNotNil(props.title)) {
      return (
        <div
          className={cn('flex-1', props.titleClass)}
          style={props.titleStyle}
        >
          {props.title}
          {renderLabel()}
        </div>
      );
    }
    return null;
  };

  const renderValue = () => {
    const hasTitle = isNotNil(props.title);
    const hasValue = isNotNil(props.children) || isNotNil(props.value);

    if (hasValue) {
      return (
        <div
          className={cn('relative flex-1 overflow-hidden text-right align-middle wrap-break-word', { 'text-left': !hasTitle }, props.valueClass)}
        >
          {isNotNil(props.children) ? props.children : <span>{props.value}</span>}
        </div>
      );
    }
    return null;
  };

  const renderLeftIcon = () => {
    if (isNotNil(props.icon)) {
      const iconElement = props.icon as ReactElement<{ className?: string }>;

      return cloneElement(iconElement, {
        className: cn('mr-2 inline-flex h-6 items-center justify-center text-base leading-6', iconElement?.props?.className),
      });
    }

    return null;
  };

  const renderRightIcon = () => {
    if (isNotNil(props.rightIcon)) {
      return <>{props.rightIcon}</>;
    }

    if (props.isLink) {
      const className = cn('ml-2 inline-flex h-6 items-center justify-center text-base leading-6');

      if (props.arrowDirection === 'left') {
        return <SvgIcon className={className} icon="mdi:chevron-left" />;
      } else if (props.arrowDirection === 'up') {
        return <SvgIcon className={className} icon="mdi:chevron-up" />;
      } else if (props.arrowDirection === 'down') {
        return <SvgIcon className={className} icon="mdi:chevron-down" />;
      } else {
        return <SvgIcon className={className} icon="mdi:chevron-right" />;
      }
    }

    return null;
  };

  const {
    className,
    style,
    extra,
    center,
    isLink,
    border = true,
    onClick,
  } = props;

  const clickable = isLink || props.clickable;

  return (
    <div
      className={cn(`
        relative box-border flex w-full overflow-hidden bg-white px-4 py-2.5 text-sm leading-6
        text-base-content
        after:pointer-events-none after:absolute after:inset-x-4 after:bottom-0 after:h-px
        after:origin-bottom after:scale-y-50 after:bg-[#EBEDF0]
        first:rounded-t-lg
        last:rounded-b-lg last:after:hidden
        dark:bg-[#1C1C1E] dark:after:bg-[#3a3a3c]
      `, {
        'cursor-pointer active:bg-[#F2F3F5] dark:active:bg-[#3a3a3c]': clickable,
        'items-center': center,
        'after:hidden': !border,
      }, className)}
      style={style}
      role={clickable ? 'button' : undefined}
      onClick={onClick}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
      {extra}
    </div>
  );
};

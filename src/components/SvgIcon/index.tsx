import { Icon as IconifyIcon, type IconifyIcon as IconType } from '@iconify/react';
import type { CSSProperties, FC } from 'react';

interface IconPropsType {
  /**
   * iconify name (图标名称)
   */
  icon?: string | IconType;
  /**
   * local svg icon (本地svg图标)
   */
  localIcon?: string;
  /**
   * icon class name (图标的类名)
   */
  className?: string;
  /**
   * icon size (图标大小)
   */
  size?: string | number;
  /**
   * icon color (图标颜色)
   */
  color?: string;
  /**
   * icon style (图标样式)
   */
  style?: CSSProperties;
}

const defaultLocalIcon = 'logo';

const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env;

const symbolId = (localIcon: string = defaultLocalIcon) => {
  const iconName = localIcon || defaultLocalIcon;

  return `#${prefix}-${iconName}`;
};

const SvgIcon: FC<IconPropsType> = ({
  icon,
  localIcon,
  size = '1em',
  color = 'currentColor',
  className = '',
  style = {},
}) => {
  // If localIcon is passed, render localIcon first
  return localIcon || !icon ? (
    <svg aria-hidden="true" height={size} width={size} className={className}>
      <use fill="currentColor" href={symbolId(localIcon)} />
    </svg>
  ) : (
    <IconifyIcon
      icon={icon}
      width={size}
      height={size}
      className={className}
      style={{ color, ...style }}
    />
  );
};

export default SvgIcon;

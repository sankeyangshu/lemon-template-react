import type { IconifyIcon } from '@iconify/react';
import type { CSSProperties, FC } from 'react';
import { Icon } from '@iconify/react';

interface SvgIconProps {
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * Iconify 图标名称
   */
  icon?: string | IconifyIcon;
  /**
   * 本地 SVG 图标名称
   */
  localIcon?: string;
  /**
   * 样式
   */
  style?: CSSProperties;
}

function symbolId(localIcon: string = 'no-icon') {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env;

  return `#${prefix}-${localIcon}`;
}

const SvgIcon: FC<SvgIconProps> = (props) => {
  const { icon, localIcon } = props;

  // If localIcon is passed, render localIcon first
  return localIcon !== undefined || icon === undefined
    ? (
        <svg
          height="1em"
          width="1em"
          aria-hidden="true"
          {...props}
        >
          <use
            fill="currentColor"
            href={symbolId(localIcon)}
          />
        </svg>
      )
    : (
        <Icon
          icon={icon}
          {...props}
        />
      );
};

export default SvgIcon;

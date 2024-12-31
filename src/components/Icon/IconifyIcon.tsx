import { Icon, type IconifyIcon as IconType } from '@iconify/react';
import './index.less';

interface IconPropsType {
  icon: string | IconType; // 图标的名称 ==> 必传
  className?: string; // 图标的样式 ==> 非必传
}

const IconifyIcon = ({ icon, className }: IconPropsType) => {
  /**
   * 图标类名
   */
  const iconClass = className ? `svg-icon ${className}` : 'svg-icon';

  return <Icon icon={icon} className={iconClass} />;
};

export default IconifyIcon;

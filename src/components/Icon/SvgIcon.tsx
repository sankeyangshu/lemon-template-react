import './index.less';

interface SvgPropsType {
  icon: string; // 图标的名称 ==> 必传
  className?: string; // 图标的样式 ==> 非必传
}

const SvgIcon = ({ icon, className }: SvgPropsType) => {
  /**
   * svg图标类名
   */
  const svgClass = className ? `svg-icon ${className}` : 'svg-icon';

  /**
   * 项目内图标
   */
  const iconName = icon ? `#icon-${icon}` : '#icon';

  return (
    <svg aria-hidden="true" className={svgClass}>
      <use href={iconName} />
    </svg>
  );
};

export default SvgIcon;

/**
 * 路由元信息
 */
export interface MetaType {
  /**
   * 路由标题
   */
  title: string;

  /**
   * 菜单icon
   */
  icon?: string;

  /**
   * 图标类型
   */
  iconType?: string;

  /**
   * 是否固定底部导航栏
   * @default false
   */
  tabBar?: boolean;

  /**
   * 是否固定顶部导航栏
   * @default true
   */
  hiddenNavBar?: boolean;

  /**
   * 路由key
   */
  key?: string;

  /**
   * keepAlive ==> 设为true 缓存
   */
  keepAlive?: boolean;

  /**
   * 国际化 key
   */
  i18n?: string;
}

/**
 * 路由
 */
export interface RouteObjectType {
  /**
   * 路由路径
   */
  path?: string;

  /**
   * 路由组件
   */
  element?: React.ReactNode;

  /**
   * 子路由
   */
  children?: RouteObjectType[];

  /**
   * 路由元信息
   */
  meta?: MetaType;

  /**
   * keepAlive ==> 设为true 缓存
   */
  keepAlive?: boolean;

  /**
   * 是否跳转
   */
  isLink?: string;
}

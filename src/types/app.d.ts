/**
 * The global namespace for the app
 * @descCN 应用全局类型
 */
declare namespace App {
  namespace Global {
    type UIMatch<Data = unknown, Handle = unknown> = import('react-router').UIMatch<Data, Handle>;

    type RouteObject = import('react-router').RouteObject;

    /**
     * route meta info
     * @descCN 路由元信息
     */
    interface RouteMeta {
      /**
       * route title
       * @descCN 路由标题
       */
      title: string;

      /**
       * router key - fullPath
       * @descCN 路由key
       */
      key: string;

      /**
       * page path - /src/pages/(pagePath)
       * @descCN 页面路径 - /src/pages/(页面路径)
       */
      pagePath?: string;

      /**
       * menu icon
       * @descCN 菜单图标
       */
      icon?: string;

      /**
       * icon type
       * @descCN 图标类型
       */
      iconType?: string;

      /**
       * whether to show the bottom navigation bar
       * @descCN 是否显示底部导航栏
       * @default false
       */
      tabBar?: boolean;

      /**
       * whether to show the top navigation bar
       * @descCN 是否显示顶部导航栏
       * @default true
       */
      hiddenNavBar?: boolean;

      /**
       * keepAlive ==> set to true to cache
       * @descCN 设为true 缓存
       */
      keepAlive?: boolean;

      /**
       * internationalization key
       * @descCN 国际化 key
       */
      i18n?: string;
    }

    /**
     * route object
     * @descCN 路由对象
     */
    type AppRouteObject = {
      meta?: RouteMeta;
      children?: AppRouteObject[];
    } & Omit<RouteObject, 'children'>;

    type Route<
      T = unknown,
      Q extends Record<string, string> | null = Record<string, string>,
      P extends Record<string, string | string[]> = Record<string, string | string[]>,
    > = Omit<UIMatch<T, RouteMeta>, 'params'> & {
      error: Error | null;
      fullPath: string;
      hash: string;
      matched: UIMatch<T, RouteMeta>[];
      params: P;
      pathname: string;
      query: Q;
      search: string;
    };
  }

  /**
   * Theme namespace
   * @descCN 主题命名空间
   */
  namespace Theme {
    /**
     * Other color - (error, info, success, warning)
     * @descCN 其他颜色
     */
    interface OtherColor {
      error: string;
      info: string;
      success: string;
      warning: string;
    }

    /**
     * Theme color
     * @descCN 主题颜色
     */
    interface ThemeColor extends OtherColor {
      primary: string;
    }

    /**
     * Theme color type key
     * @descCN 主题颜色类型key
     */
    type ThemeColorKey = keyof ThemeColor;

    /**
     * Color palette number
     * @descCN 颜色透明度
     */
    type ColorPaletteNumber = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

    /**
     * Theme palette color
     * @descCN 主题颜色不同透明度类型
     */
    type ThemePaletteColor = {
      [key in ThemeColorKey | `${ThemeColorKey}-${ColorPaletteNumber}`]: string;
    };

    /**
     * Theme setting token color
     * @descCN 主题设置样式颜色
     */
    interface ThemeSettingTokenColor {
      'base-text': string;
      'base-border': string;
      layout: string;
      container: string;
      nprogress?: string;
    }

    /**
     * Theme setting token
     * @descCN 主题设置样式
     */
    interface ThemeSettingToken {
      colors: ThemeSettingTokenColor;
    }

    type ThemeTokenColor = ThemePaletteColor & ThemeSettingTokenColor;

    /**
     * Theme token CSS variables
     * @descCN 主题样式 CSS变量
     */
    type ThemeTokenCSSVars = {
      colors: ThemeTokenColor & { [key: string]: string };
    };

    type BaseToken = Record<string, Record<string, string>>;

    /**
     * Theme setting
     * @descCN 主题设置
     */
    interface ThemeSetting {
      /**
       * Other color
       * @descCN 其他颜色
       */
      otherColor: OtherColor;
      /**
       * Theme color
       * @descCN 主题颜色
       */
      themeColor: string;
      /**
       * Define some theme settings tokens, will transform to css variables
       * @descCN 定义一些主题设置的tokens，转换为CSS变量
       */
      tokens: {
        dark?: {
          [K in keyof ThemeSettingToken]?: Partial<ThemeSettingToken[K]>;
        };
        light: ThemeSettingToken;
      };
    }

    /**
     * page animate
     * @descCN 动画设置
     */
    type PageAnimate =
      | 'zoom-fade'
      | 'zoom-out'
      | 'fade-slide'
      | 'fade'
      | 'fade-bottom'
      | 'fade-scale';
  }

  /**
   * I18n namespace
   * @descCN 国际化命名空间
   */
  namespace I18n {
    /**
     * Language type
     * @descCN 语言类型
     */
    type LangType = 'en-US' | 'zh-CN';

    /**
     * Language option
     * @descCN 语言选项
     */
    type LangOption = {
      value: LangType;
      label: string;
    };
  }
}

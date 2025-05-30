/**
 * The storage namespace
 * @descCN 存储命名空间
 */
declare namespace StorageType {
  type ThemeMode = import('ahooks/lib/useTheme').ThemeModeType;

  interface Local {
    /**
     * The dark mode
     * @descCN 暗黑模式
     */
    darkMode: boolean;
    /**
     * The i18n language
     * @descCN 国际化语言
     */
    language: App.I18n.LangType;
    /**
     * The theme mode
     * @descCN 主题模式
     */
    themeMode: ThemeMode;
    /**
     * The theme color
     * @descCN 主题颜色
     */
    themeColor: string;
  }
}

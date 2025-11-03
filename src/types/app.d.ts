/**
 * The global namespace for the app
 * @descCN 应用全局类型
 */
declare namespace App {
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
    interface LangOption {
      value: LangType;
      label: string;
    }

    /**
     * i18n scheme
     * @descCN i18n key
     */
    interface I18nScheme {
      api: {
        errMsg400: string;
        errMsg401: string;
        errMsg403: string;
        errMsg404: string;
        errMsg405: string;
        errMsg408: string;
        errMsg500: string;
        errMsg501: string;
        errMsg502: string;
        errMsg503: string;
        errMsg504: string;
        errMsgDefault: string;
      };
      system: {
        title: string;
        goHome: string;
        checkUrl: string;
        forbidden: string;
        notFound: string;
        serverError: string;
        errorFallback: string;
        refreshAgain: string;
        loading: string;
      };
    }
  }
}

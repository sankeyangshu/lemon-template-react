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
      text: string;
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
        errMsg505: string;
        errMsgDefault: string;
        requestCancelled: string;
        networkError: string;
        requestConfigError: string;
      };
      system: {
        checkUrl: string;
        errorFallback: string;
        forbidden: string;
        goHome: string;
        loading: string;
        notFound: string;
        refreshAgain: string;
        serverError: string;
        title: string;
        updateCancel: string;
        updateConfirm: string;
        updateContent: string;
        updateTitle: string;
        themeMode: string;
        systemTheme: string;
        confirm: string;
        cancel: string;
      };
      router: {
        home: string;
        example: string;
        mine: string;
        themeSetting: string;
        login: string;
        register: string;
        forgotPassword: string;
        mock: string;
        echarts: string;
        icon: string;
        keepAlive: string;
        notFound: string;
      };
      home: {
        info: string;
        react: string;
        typescript: string;
        reactUI: string;
        tailwind: string;
        zustand: string;
        router: string;
        hooks: string;
        utils: string;
        icons: string;
        eslint: string;
        git: string;
        theme: string;
        axios: string;
        loading: string;
        auth: string;
      };
      example: {
        exampleComponent: string;
        language: string;
        darkMode: string;
        basicSetting: string;
        keepAliveTips: string;
        mockTips: string;
        noData: string;
        request: string;
      };
      login: {
        username: string;
        password: string;
        login: string;
        register: string;
        registerAccount: string;
        forgotPassword: string;
        usernameError: string;
        passwordError: string;
        againEnterPassword: string;
        passwordInconsistent: string;
        privacyPolicy: string;
        userAgreement: string;
        readAgreement: string;
        and: string;
        pleaseEnterNewPasswordAgain: string;
        pleaseEnterNewPassword: string;
        pleaseEnterVerificationCode: string;
        code: string;
        pleaseEnterValidPhone: string;
        pleaseEnterPhone: string;
        confirmReset: string;
      };
      mine: {
        logoutTips: string;
        tips: string;
        logout: string;
        systemVersion: string;
        projectDocs: string;
      };
    }
  }
}

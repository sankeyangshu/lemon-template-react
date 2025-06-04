/**
 * Namespace Env
 * It is used to declare the type of the import.meta object
 * @descCN 声明 import.meta 对象的类型
 */
declare namespace Env {
  /**
   * Interface for import.meta
   * @descCN 声明 import.meta 对象的类型
   */
  interface ImportMeta extends ImportMetaEnv {
    /**
     * The title of the application
     * @descCN 应用标题
     */
    readonly VITE_APP_TITLE: string;
    /**
     * Base public path when served in development or production.
     * @descCN 开发或生产时，服务的基础公共路径
     */
    readonly VITE_BASE_URL: string;
    /**
     * The port of the application
     * @descCN 应用端口
     */
    readonly VITE_PORT: number;
    /**
     * Whether to automatically open the application
     * @descCN 是否自动打开应用
     */
    readonly VITE_OPEN: boolean;
    /**
     * Whether to use mock
     * @descCN 是否使用 mock
     */
    readonly VITE_USE_MOCK: boolean;
    /**
     * The compression algorithm
     * @descCN 压缩算法
     */
    readonly VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'gzip,brotli' | 'none';
    /**
     * Whether to delete the original file after compression
     * @descCN 是否删除原始文件
     */
    readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    /**
     * The proxy configuration
     * @descCN 跨域代理配置
     */
    readonly VITE_PROXY: [string, string][];
    /**
     * backend service base url
     * @descCN 后端服务基础 URL
     */
    readonly VITE_SERVICE_BASE_URL: string;
    /**
     * The homepage of the application
     * @descCN 应用首页
     */
    readonly VITE_APP_HOMEPAGE: string;
    /**
     * The prefix of the local icon
     * @descCN 本地图标前缀
     */
    readonly VITE_ICON_LOCAL_PREFIX: 'local-icon';
    /**
     * The prefix of the iconify icon
     * @descCN iconify 图标前缀
     */
    readonly VITE_ICON_PREFIX: 'icon';
    /**
     * Whether to generate a package preview file
     * @descCN 是否生成包预览文件
     */
    readonly VITE_REPORT: boolean;
    /**
     * Whether to drop console
     * @descCN 是否删除 console
     */
    readonly VITE_DROP_CONSOLE: boolean;
    /**
     * Used to differentiate storage across different domains
     * @descCN 用于区分不同域的存储
     */
    readonly VITE_STORAGE_PREFIX?: string;
  }
}

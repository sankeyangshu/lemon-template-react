export {};

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  /* Vite */
  type Recordable<T = any> = Record<string, T>;

  interface ImportMeta {
    readonly env: Env.ImportMeta;
  }
}

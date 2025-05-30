/** Build app info of the project */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
  };
  lastBuildTime: string;
};

interface ImportMeta {
  readonly env: Env.ImportMeta;
}

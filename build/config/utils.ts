import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { sum } from 'es-toolkit';
import { isEmpty } from 'es-toolkit/compat';
import colors from 'picocolors';

export function isDevFn(mode: string): boolean {
  return mode === 'development';
}

export function isProdFn(mode: string): boolean {
  return mode === 'production';
}

export function isTestFn(mode: string): boolean {
  return mode === 'test';
}

/**
 * Whether to generate package preview
 */
export function isReportMode(): boolean {
  return process.env.VITE_REPORT === 'true';
}

/**
 * Read all environment variable configuration files to process.env
 * @descCN 读取并处理所有环境变量配置文件 .env
 * @param envConf - A record of environment variables to be processed.
 * @returns An object containing the processed environment variables with appropriate types.
 */
export function wrapperEnv(envConf: Env.ImportMeta): Env.ImportMeta {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    // 去除空格
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(colors.red(`wrapper vite env error:\n${error}`));
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }

  return ret;
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}

/**
 * Format bytes
 * @descCN 格式化字节
 * @param bytes - The number of bytes to format
 * @returns A string representing the size in a human-readable format
 */
export function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

/**
 * Get the size of the package
 * @descCN 获取包的大小
 * @param options - The options for the package size calculation
 * @param options.folder - The folder to calculate the size of
 * @param options.callback - The callback function to call with the size
 * @param options.format - Whether to format the size
 */
export function getPackageSize(options: {
  folder?: string;
  callback: (size: string | number) => void;
  format?: boolean;
}) {
  const { folder = 'dist', callback, format = true } = options;

  const calculateFolderSize = (folderPath: string, onComplete: (size: number) => void) => {
    fs.readdir(folderPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(colors.red(`read dir ${folderPath} error: ${err}`));
        onComplete(0);
        return;
      }

      if (isEmpty(files)) {
        onComplete(0);
        return;
      }

      let count = 0;
      const fileSizes: number[] = [];

      const checkEnd = (size: number = 0) => {
        fileSizes.push(size);

        if (++count === files.length) {
          onComplete(sum(fileSizes));
        }
      };

      files.forEach((item: string) => {
        const itemPath = path.join(folderPath, item);

        fs.stat(itemPath, (error, stats) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log(colors.red(`get file status ${itemPath} error: ${error}`));
            checkEnd(0);
            return;
          }

          if (stats.isFile()) {
            checkEnd(stats.size);
          } else if (stats.isDirectory()) {
            calculateFolderSize(itemPath, checkEnd);
          } else {
            checkEnd(0);
          }
        });
      });
    });
  };

  calculateFolderSize(folder, (totalSize) => {
    callback(format ? formatBytes(totalSize) : totalSize);
  });
}

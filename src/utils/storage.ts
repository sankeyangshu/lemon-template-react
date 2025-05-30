const storagePrefix = import.meta.env.VITE_STORAGE_PREFIX || '';

/**
 * The storage type
 * @descCN 存储类型
 */
export type StorageType = 'local' | 'session';

/**
 * add prefix to key
 * @descCN 添加前缀到key
 * @param key key
 * @returns key with prefix
 */
export const addPrefix = (key: string) => `${storagePrefix}${key}`;

/**
 * create storage
 * @descCN 创建storage
 * @param type storage type
 * @returns storage
 */
export const createStorage = <T extends object>(type: StorageType) => {
  const stg = type === 'session' ? window.sessionStorage : window.localStorage;

  const storage = {
    /**
     * get item from localStorage
     * @descCN 从localStorage获取item
     * @param key key
     * @returns item
     */
    getItem<K extends keyof T>(key: K): T[K] | null {
      const result = stg.getItem(addPrefix(key as string));

      if (result) {
        let value: T[K] | null = null;

        try {
          value = JSON.parse(result);
        } catch {}

        if (value) {
          return value as T[K];
        }
      }

      stg.removeItem(addPrefix(key as string));

      return null;
    },
    /**
     * set item to localStorage
     * @descCN 设置item到localStorage
     * @param key key
     * @param value value
     */
    setItem<K extends keyof T>(key: K, value: T[K]) {
      stg.setItem(addPrefix(key as string), JSON.stringify(value));
    },
    /**
     * remove item from localStorage
     * @descCN 从localStorage移除item
     * @param key key
     */
    removeItem(key: keyof T) {
      stg.removeItem(addPrefix(key as string));
    },
    /**
     * clear all items from localStorage
     * @descCN 清除localStorage所有item
     */
    clear() {
      stg.clear();
    },
  };

  return storage;
};

/**
 * The local storage
 * @descCN 本地存储
 */
export const localStg = createStorage<StorageType.Local>('local');

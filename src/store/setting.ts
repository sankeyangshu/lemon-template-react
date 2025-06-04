import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { themeSettings } from '@/theme';
import { addPrefix } from '@/utils/storage';

/**
 * 系统设置store类型
 */
export interface settingsStoreType {
  /**
   * Theme color
   * @descCN 主题颜色
   */
  themeColor: App.Theme.ThemeColor;

  /**
   * Set theme color
   * @descCN 设置主题颜色
   */
  setThemeColor: (key: App.Theme.ThemeColorKey, val: string) => void;
}

export const useSettingStore = create<settingsStoreType>()(
  persist(
    (set, get) => ({
      themeColor: {
        primary: themeSettings.themeColor,
        ...themeSettings.otherColor,
      },

      setThemeColor: (key: App.Theme.ThemeColorKey, val: string) => {
        const { themeColor } = get();
        const newThemeColor = { ...themeColor, [key]: val };

        set({ themeColor: newThemeColor });
      },
    }),
    {
      // 进行持久化存储
      name: addPrefix('settingStorage'), // 本地存储的名称
    }
  )
);

/**
 * use theme color config store hook
 * @descCN 使用主题颜色配置 store hook
 */
export const useThemeColorConfig = () => useSettingStore((state) => state.themeColor);

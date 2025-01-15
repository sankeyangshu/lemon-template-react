import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_THEMECOLOR } from '@/config';

/**
 * 暗黑主题配置类型
 */
export type darkModeThemeType = 'light' | 'dark';

/**
 * 系统设置store类型
 */
export interface settingsStoreType {
  darkMode: darkModeThemeType;
  themeColor: string;
  isPageAnimate: boolean;
  pageAnimateType: string;
  language: string;
  setThemeDark: (value: darkModeThemeType) => void;
  setThemeColor: (value: string) => void;
  setPageAnimate: (value: boolean) => void;
  setPageAnimateType: (value: string) => void;
  setLanguage: (value: string) => void;
}

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useSettingStore = create<settingsStoreType>()(
  persist(
    (set) => ({
      themeColor: DEFAULT_THEMECOLOR, // 主题颜色
      darkMode: prefersDark ? 'dark' : 'light', // 暗黑模式
      isPageAnimate: true, // 是否开启路由动画
      pageAnimateType: 'zoom-fade', // 路由动画类型
      language: localStorage.getItem('language') || 'zh-CN', // 语言

      // 设置暗黑模式
      setThemeDark: (value: darkModeThemeType) => set({ darkMode: value }),

      // 设置主题颜色
      setThemeColor: (value: string) => set({ themeColor: value }),

      // 设置路由动画
      setPageAnimate: (value: boolean) => set({ isPageAnimate: value }),

      // 设置路由动画类型
      setPageAnimateType: (value: string) => set({ pageAnimateType: value }),

      // 设置语言
      setLanguage: (value: string) => {
        set({ language: value });
        localStorage.setItem('language', value);
      },
    }),
    {
      // 进行持久化存储
      name: 'settingStorage', // 本地存储的名称
    }
  )
);

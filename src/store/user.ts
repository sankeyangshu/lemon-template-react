import type { loginDataType, userInfoType } from '@/api/system/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { postLoginAPI } from '@/api/system/user';

/**
 * 用户信息store类型
 */
export interface UserState {
  token: string;
  userInfo: userInfoType | null;
  setToken: (value: string) => void;
  setUserInfo: (value: userInfoType) => void;
  login: (value: loginDataType) => Promise<void>;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist((set) => ({
    token: '', // 登录token
    userInfo: null, // 用户信息

    setToken: (value: string) => set({ token: value }),

    setUserInfo: (value: userInfoType) => set({ userInfo: value }),

    login: async (value: loginDataType) => {
      const { username, password } = value;

      const { token, user } = await postLoginAPI({ username: username.trim(), password });

      set({ token, userInfo: user });
    },

    logout: () => set({ token: '', userInfo: null }),
  }), {
    name: 'LEMON-REACT_userStorage',
  }),
);

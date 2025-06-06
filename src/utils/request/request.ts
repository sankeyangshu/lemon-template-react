import { Toast } from '@nutui/nutui-react';
import axios from 'axios';
import { useUserStore } from '@/store/user';
import { checkStatus } from './CheckStatus';
import type { AxiosError, AxiosResponse } from 'axios';

// 创建新的axios实例
const service = axios.create({
  // 公共接口
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5000,
});

// 添加一个请求拦截器
service.interceptors.request.use(
  (config) => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
    // 每次发送请求之前判断zustand中是否存在token，如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    const token = useUserStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    // 请求错误，这里可以用全局提示框进行提示
    Toast.show({
      content: '请求错误，请稍后再试',
      icon: 'fail',
    });
    return Promise.reject(error);
  }
);

// 添加一个响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    if (status === 200) {
      // 接口网络请求成功，关闭等待提示
      if (data.code === 0) {
        // 接口请求结果正确
        return data;
      } else {
        checkStatus(data.code, data.message);
        return Promise.reject(data);
      }
    }
  },
  (error: AxiosError) => {
    const { response } = error;
    // 响应失败，关闭等待提示
    // 提示错误信息
    if (JSON.stringify(error).includes('Network Error')) {
      Toast.show({
        content: '网络超时',
        icon: 'fail',
      });
    }
    // 根据响应的错误状态码，做不同的处理
    if (response) {
      checkStatus(response.status);
    }
    return Promise.reject(error);
  }
);

export default service;

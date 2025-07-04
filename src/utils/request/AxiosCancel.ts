import axios from 'axios';
import { isFunction } from 'es-toolkit';
import qs from 'qs';
import type { AxiosRequestConfig, Canceler } from 'axios';

// Store pending requests
let pendingMap = new Map<string, Canceler>();

/**
 * Get the unique identifier for the request
 * @descCN 获取请求的唯一标识
 * @param {AxiosRequestConfig} config Request configuration (请求配置)
 * @returns {string} Request identifier (请求的唯一标识)
 */
export const getPendingUrl = (config: AxiosRequestConfig): string =>
  [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&');

/**
 * Remove request from pending map
 * @descCN 从Map中移除请求
 * @param {AxiosRequestConfig} config Request configuration
 */
export const removePending = (config: AxiosRequestConfig): void => {
  const url = getPendingUrl(config);
  if (pendingMap.has(url)) {
    const cancel = pendingMap.get(url);
    if (cancel && isFunction(cancel)) {
      cancel(url);
    }
    pendingMap.delete(url);
  }
};

/**
 * Add request to pending map
 * @descCN 添加请求到Map中
 * @param {AxiosRequestConfig} config Request configuration
 */
export const addPending = (config: AxiosRequestConfig): void => {
  removePending(config);
  const url = getPendingUrl(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(url)) {
        pendingMap.set(url, cancel);
      }
    });
};

/**
 * Remove all pending requests
 * @descCN 移除所有pending中的请求
 */
export const removeAllPending = (): void => {
  pendingMap.forEach((cancel) => {
    if (cancel && isFunction(cancel)) {
      cancel();
    }
  });
  pendingMap.clear();
};

/**
 * Reset pending map
 * @descCN 重置Map
 */
export const reset = (): void => {
  removeAllPending();
  pendingMap = new Map<string, Canceler>();
};

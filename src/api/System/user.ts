import http from '@/utils/request';

/**
 * 登录请求参数类型
 */
export type loginDataType = {
  username: string;
  password: string;
};

/**
 * 登录返回参数类型
 */
export interface userInfoRepType {
  user: userInfoType;
  token: string;
}

/**
 * 用户信息类型
 */
export interface userInfoType {
  id: number;
  username: string;
  phone: string;
  nickname: string;
  avatar: string;
  sign?: string;
}

// api接口
const api = {
  example: '/example', // 示例接口
  login: '/auth/login', // 用户登录接口
};

/**
 * 获取示例数据
 * @returns 示例数据
 */
export function getExampleAPI() {
  return http.get<{ content: string; date: number }>(api.example);
}

/**
 * 用户登录
 * @param data 登录请求参数
 * @returns 登录结果
 */
export function postLoginAPI(data: loginDataType) {
  return http.post<userInfoRepType>(api.login, data);
}

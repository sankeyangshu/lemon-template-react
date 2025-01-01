import { Toast } from 'react-vant';

/**
 * 校验网络请求状态码
 * @param {number} status 状态码
 * @param {string | string[]} msg 错误提示信息
 */
export const checkStatus = (status: number, msg?: string | Array<string>): void => {
  // const userStore = useUserStore();

  let errMsg = ''; // 错误提示信息
  if (msg) {
    errMsg = typeof msg === 'string' ? msg : msg[0];
  }

  switch (status) {
    case 400:
      Toast.fail(errMsg || '请求失败！请您稍后重试');
      break;
    case 401:
      Toast.fail(errMsg || '登录失效！请您重新登录');
      // 退出登录
      // userStore.logout(true);
      break;
    case 403:
      Toast.fail(errMsg || '当前账号无权限访问！');
      break;
    case 404:
      Toast.fail(errMsg || '你所访问的资源不存在！');
      break;
    case 405:
      Toast.fail(errMsg || '请求方式错误！请您稍后重试');
      break;
    case 408:
      Toast.fail(errMsg || '请求超时！请您稍后重试');
      break;
    case 500:
      Toast.fail(errMsg || '服务异常！');
      break;
    case 502:
      Toast.fail(errMsg || '网络错误！');
      break;
    case 503:
      Toast.fail(errMsg || '服务不可用，服务器暂时过载或维护！');
      break;
    case 504:
      Toast.fail(errMsg || '网络超时！');
      break;
    default:
      Toast.fail(errMsg || '请求失败！');
  }
};

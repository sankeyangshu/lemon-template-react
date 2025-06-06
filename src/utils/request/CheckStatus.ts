import { Toast } from '@nutui/nutui-react';
import { i18n } from '@/locales';

/**
 * 校验网络请求状态码
 * @param {number} status 状态码
 * @param {string | string[]} msg 错误提示信息
 */
export const checkStatus = (status: number, msg?: string | Array<string>): void => {
  let errMsg = ''; // 错误提示信息
  if (msg) {
    errMsg = typeof msg === 'string' ? msg : msg[0];
  }

  switch (status) {
    case 400:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg400'),
        icon: 'fail',
      });
      break;
    case 401:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg401'),
        icon: 'fail',
      });
      break;
    case 403:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg403'),
        icon: 'fail',
      });
      break;
    case 404:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg404'),
        icon: 'fail',
      });
      break;
    case 405:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg405'),
        icon: 'fail',
      });
      break;
    case 408:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg408'),
        icon: 'fail',
      });
      break;
    case 500:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg500'),
        icon: 'fail',
      });
      break;
    case 501:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg501'),
        icon: 'fail',
      });
      break;
    case 502:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg502'),
        icon: 'fail',
      });
      break;
    case 503:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg503'),
        icon: 'fail',
      });
      break;
    case 504:
      Toast.show({
        content: errMsg || i18n.t('api.errMsg504'),
        icon: 'fail',
      });
      break;
    default:
      Toast.show({
        content: errMsg || i18n.t('api.errMsgDefault'),
        icon: 'fail',
      });
  }
};

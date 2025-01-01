import Mock from 'mockjs';

/**
 * 成功返回函数
 * @param result 返回结果
 * @param param1 message 消息
 * @returns result
 */
export function resultSuccess<T = Recordable>(result: T, { message = 'success' } = {}) {
  return Mock.mock({
    code: 0,
    data: result,
    message,
    timestamp: new Date().getTime(),
  });
}

export function resultError(message = 'Request failed', { code = 500, result = null } = {}) {
  return {
    code,
    data: result,
    message,
    type: 'error',
  };
}

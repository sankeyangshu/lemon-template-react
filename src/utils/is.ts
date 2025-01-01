const toString = Object.prototype.toString;

/**
 * 数据类型
 */
export enum DataType {
  Object = 'Object',
  Array = 'Array',
  Date = 'Date',
  RegExp = 'RegExp',
  Function = 'Function',
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Undefined = 'Undefined',
  Null = 'Null',
  Symbol = 'Symbol',
  Set = 'Set',
  Map = 'Map',
  Promise = 'Promise',
  Window = 'Window',
  AsyncFunction = 'AsyncFunction',
}

export type _DataType = keyof typeof DataType;

/**
 * 判断值是否为某个类型
 * @param {unknown} val 值
 * @param {_DataType} type 类型
 * @returns  判断结果
 */
export const is = (val: unknown, type: _DataType) => {
  return toString.call(val) === `[object ${type}]`;
};

// 我们可以通过 is 关键字更为精准的控制类型，以下代码相当于告诉编译器，如果返回结果为 true，则代表 val 是 T 类型
/**
 * 判断是否是函数
 * @param {unknown} val 值
 * @returns 如果 val 是 Function，则返回 true，否则返回 false
 */
export const isFunction = (val: unknown) => {
  return is(val, 'Function');
};

/**
 * 是否为对象
 * @param {any} val 值
 * @returns 如果 val 是 Object，则返回 true，否则返回 false
 */
export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object');
};

/**
 * 判断是否为null
 * @param {unknown} val 值
 * @returns 如果 val 是 null，则返回 true，否则返回 false
 */
export const isNull = (val: unknown): val is null => {
  return val === null;
};

/**
 * 是否已定义
 * @param {T} val 值
 * @returns 判断结果
 */
export const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== 'undefined';
};

/**
 * 是否未定义
 * @param {T} val 值
 * @returns 判断结果
 */
export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val);
};

/**
 * 是否为时间
 * @param {unknown} val 值
 * @returns 如果 val 是 Date，则返回 true，否则返回 false
 */
export const isDate = (val: unknown): val is Date => {
  return is(val, 'Date');
};

/**
 * 是否为数值
 * @param {unknown} val 值
 * @returns 如果 val 是 Number，则返回 true，否则返回 false
 */
export const isNumber = (val: unknown): val is number => {
  return is(val, 'Number');
};

/**
 *  是否为AsyncFunction
 * @param {unknown} val 值
 * @returns 如果 val 是 AsyncFunction，则返回 true，否则返回 false
 */
export const isAsyncFunction = <T = any>(val: unknown): val is Promise<T> => {
  return is(val, 'AsyncFunction');
};

/**
 * 是否为promise
 * @param {unknown} val 值
 * @returns 如果 val 是 Promise，则返回 true，否则返回 false
 */
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

/**
 * 是否为字符串
 * @param {unknown} val 值
 * @returns 如果 val 是 String，则返回 true，否则返回 false
 */
export const isString = (val: unknown): val is string => {
  return is(val, 'String');
};

/**
 * 是否为boolean类型
 * @param {unknown} val 值
 * @returns 如果 val 是 Boolean，则返回 true，否则返回 false
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

/**
 * 是否为数组
 * @param {any} val 值
 * @returns 如果 val 是 Array，则返回 true，否则返回 false
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * 是否为浏览器
 * @param {any} val 值
 * @returns 如果 val 是 Window，则返回 true，否则返回 false
 */
export const isWindow = (val: any): val is Window => {
  return typeof window !== 'undefined' && is(val, 'Window');
};

/**
 * 是否是Element
 * @param {unknown} val 值
 * @returns 如果 val 是 Element，则返回 true，否则返回 false
 */
export const isElement = (val: unknown): val is Element => {
  return isObject(val) && !!val.tagName;
};

/**
 * 是否客户端
 * @returns 如果是客户端，则返回 true，否则返回 false
 */
export const isClient = () => {
  return typeof window !== 'undefined';
};

export const isServer = typeof window === 'undefined';

/**
 * 是否为Map
 * @param {unknown} val 值
 * @returns 如果 val 是 Map，则返回 true，否则返回 false
 */
export const isMap = (val: unknown): val is Map<any, any> => {
  return is(val, 'Map');
};

/**
 * 是否为正则
 * @param {unknown} val 值
 * @returns 如果 val 是 RegExp，则返回 true，否则返回 false
 */
export const isRegExp = (val: unknown): val is RegExp => {
  return is(val, 'RegExp');
};

/**
 * 是否为图片节点
 * @param {Element} o 节点
 * @returns 如果 o 是图片节点，则返回 true，否则返回 false
 */
export const isImageDom = (o: Element) => {
  return o && ['IMAGE', 'IMG'].includes(o.tagName);
};

/**
 * 是否为空并且未定义
 * @param {unknown} val 值
 * @returns 如果 val 是 null 或 undefined，则返回 true，否则返回 false
 */
export const isNullAndUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) && isNull(val);
};

/**
 * 是否为空或未定义
 * @param {unknown} val 值
 * @returns 如果 val 是 null 或 undefined，则返回 true，否则返回 false
 */
export const isNullOrUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) || isNull(val);
};

/**
 * 是否是url
 * @param {string} path 路径
 * @returns 如果 path 是 url，则返回 true，否则返回 false
 */
export const isUrl = (path: string): boolean => {
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/;
  return reg.test(path);
};

/**
 * 是否为空
 * @param {T} val 值
 * @returns 如果 val 是空，则返回 true，否则返回 false
 */
export const isEmpty = <T = unknown>(val: T): val is T => {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
};

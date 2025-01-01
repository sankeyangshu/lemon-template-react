import { Toast } from 'react-vant';
import { isArray } from './is';

/**
 * hex颜色转rgb颜色
 * @param {string} str 颜色值字符串
 * @returns {number[]} 返回RGB颜色数组
 */
export function hexToRgb(str: string) {
  let hexs: number[] = [];
  const reg = /^#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(str)) return Toast.fail('请输入正确的hex颜色值');

  str = str.replace('#', '');
  hexs = str.match(/../g)?.map((val) => Number.parseInt(val, 16)) || [];
  return hexs;
}

/**
 * rgb颜色转Hex颜色
 * @param {number} r 代表红色 0-255
 * @param {number} g 代表绿色 0-255
 * @param {number} b 代表蓝色 0-255
 * @returns {string} 返回hex颜色值
 */
export function rgbToHex(r: number, g: number, b: number) {
  const reg = /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  if (!reg.test(String(r)) || !reg.test(String(g)) || !reg.test(String(b))) {
    return Toast.fail('请输入正确的RGB颜色值(0-255)');
  }
  const hexs = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) {
    if (hexs[i].length === 1) hexs[i] = `0${hexs[i]}`;
  }
  return `#${hexs.join('')}`;
}

/**
 * 加深颜色值
 * @param {string} color 颜色值字符串
 * @param {number} level 加深的程度，限0-1之间
 * @returns {string} 返回处理后的颜色值
 */
export function getDarkColor(color: string, level: number) {
  const reg = /^#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return Toast.fail('请输入正确的hex颜色值');

  const rgb = hexToRgb(color);
  if (!rgb || !isArray(rgb)) return;

  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(rgb[i] * (1 - level));
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

/**
 * 变浅颜色值
 * @param {string} color 颜色值字符串
 * @param {number} level 加深的程度，限0-1之间
 * @returns {string} 返回处理后的颜色值
 */
export function getLightColor(color: string, level: number) {
  const reg = /^#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return Toast.fail('请输入正确的hex颜色值');

  const rgb = hexToRgb(color);
  if (!rgb || !isArray(rgb)) return;

  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(255 * level + rgb[i] * (1 - level));
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

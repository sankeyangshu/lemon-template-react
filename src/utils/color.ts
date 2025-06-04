import { colord, extend } from 'colord';
import labPlugin from 'colord/plugins/lab';
import mixPlugin from 'colord/plugins/mix';
import namesPlugin from 'colord/plugins/names';
import type { AnyColor, HslColor, RgbColor } from 'colord';

extend([namesPlugin, mixPlugin, labPlugin]);

/**
 * Check if a color is valid
 * @descCN 检查一个颜色是否有效
 * @param color - Color
 * @returns True if the color is valid, false otherwise
 */
export const isValidColor = (color: AnyColor) => {
  return colord(color).isValid();
};

/**
 * Get the hex value of a color
 * @descCN 获取一个颜色的十六进制值
 * @param color - Color
 * @returns The hex value of the color
 */
export const getHex = (color: AnyColor) => {
  return colord(color).toHex();
};

/**
 * Get the RGB value of a color
 * @descCN 获取一个颜色的RGB值
 * @param color - Color
 * @returns The RGB value of the color
 */
export const getRgb = (color: AnyColor) => {
  return colord(color).toRgb();
};

/**
 * Get the HSL value of a color
 * @descCN 获取一个颜色的HSL值
 * @param color - Color
 * @returns The HSL value of the color
 */
export const getHsl = (color: AnyColor) => {
  return colord(color).toHsl();
};

/**
 * Get the HSV value of a color
 * @descCN 获取一个颜色的HSV值
 * @param color - Color
 * @returns The HSV value of the color
 */
export const getHsv = (color: AnyColor) => {
  return colord(color).toHsv();
};

/**
 * Get the delta E value of two colors
 * @descCN 获取两个颜色的Delta E值
 * @param color1 - First color
 * @param color2 - Second color
 * @returns The delta E value of the two colors
 */
export const getDeltaE = (color1: AnyColor, color2: AnyColor) => {
  return colord(color1).delta(color2);
};

/**
 * Transform an HSL color to a hex color
 * @descCN 将HSL颜色转换为十六进制颜色
 * @param color - HSL color
 * @returns The hex value of the HSL color
 */
export const transformHslToHex = (color: HslColor) => {
  return colord(color).toHex();
};

/**
 * Add color alpha
 * @descCN 添加颜色透明度
 * @param color - Color
 * @param alpha - Alpha (0 - 1)
 * @returns The hex value of the color with the alpha value
 */
export const addColorAlpha = (color: AnyColor, alpha: number) => {
  return colord(color).alpha(alpha).toHex();
};

/**
 * Mix color
 * @descCN 混合颜色
 * @param firstColor - First color
 * @param secondColor - Second color
 * @param ratio - The ratio of the second color (0 - 1)
 * @returns The hex value of the mixed color
 */
export const mixColor = (firstColor: AnyColor, secondColor: AnyColor, ratio: number) => {
  return colord(firstColor).mix(secondColor, ratio).toHex();
};

/**
 * Transform color with opacity to similar color without opacity
 * @descCN 将颜色透明度转换为不透明颜色
 * @param color - Color
 * @param alpha - Alpha (0 - 1)
 * @param bgColor Background color (usually white or black)
 * @returns The hex value of the color with the opacity
 */
export const transformColorWithOpacity = (color: string, alpha: number, bgColor = '#ffffff') => {
  const originColor = addColorAlpha(color, alpha);
  const { b: oB, g: oG, r: oR } = colord(originColor).toRgb();

  const { b: bgB, g: bgG, r: bgR } = colord(bgColor).toRgb();

  const calRgb = (or: number, bg: number, al: number) => {
    return bg + (or - bg) * al;
  };

  const resultRgb: RgbColor = {
    b: calRgb(oB, bgB, alpha),
    g: calRgb(oG, bgG, alpha),
    r: calRgb(oR, bgR, alpha),
  };

  return colord(resultRgb).toHex();
};

/**
 * Is white color
 * @descCN 判断一个颜色是否为白色
 * @param color - Color
 * @returns True if the color is white, false otherwise
 */
export const isWhiteColor = (color: AnyColor) => {
  return colord(color).isEqual('#ffffff');
};

export { colord };

import { DARK_CLASS } from '@/provider/Theme/utils';
import { themeSettings, themeVars } from '@/theme';
import { getRgb } from '@/utils/color';
import { getColorPalette } from './colorPalette';
import type { ConfigProviderProps } from '@nutui/nutui-react';

/**
 * Get the ui components theme
 * @descCN 获取组件库主题
 * @param colors - The colors of the theme
 */
export const getUIComponentsTheme = (colors: App.Theme.ThemeColor) => {
  // 获取主题颜色
  const { primary, info, success, warning, error } = colors;

  // 创建主题
  const theme: ConfigProviderProps['theme'] = {
    nutuiColorPrimary: primary,
    nutuiColorPrimaryStop1: primary,
    nutuiColorPrimaryStop2: primary,
    nutuiColorInfo: info,
    nutuiColorSuccess: success,
    nutuiColorWarning: warning,
    nutuiColorDanger: error,
  };

  return theme;
};

/**
 * Create theme palette colors
 * @descCN 创建主题颜色
 * @param colors - The colors of the theme
 * @returns The theme palette colors
 */
export const createThemePaletteColors = (colors: App.Theme.ThemeColor) => {
  const colorKeys = Object.keys(colors) as App.Theme.ThemeColorKey[];
  const colorPaletteVar = {} as App.Theme.ThemePaletteColor;

  colorKeys.forEach((key) => {
    const colorMap = getColorPalette(colors[key]);

    colorPaletteVar[key] = colorMap.get(500)!;

    colorMap.forEach((hex, number) => {
      colorPaletteVar[`${key}-${number}`] = hex;
    });
  });

  return colorPaletteVar;
};

/**
 * Create theme tokens
 * @descCN 创建主题token
 * @param colors - The colors of the theme
 * @param tokens - The tokens of the theme
 * @returns The theme tokens
 */
export const createThemeToken = (
  colors: App.Theme.ThemeColor,
  tokens?: App.Theme.ThemeSetting['tokens']
) => {
  const paletteColors = createThemePaletteColors(colors);

  const { dark, light } = tokens || themeSettings.tokens;

  const themeTokens: App.Theme.ThemeTokenCSSVars = {
    colors: {
      ...paletteColors,
      nprogress: paletteColors.primary,
      ...light.colors,
    },
  };

  const darkThemeTokens: App.Theme.ThemeTokenCSSVars = {
    colors: {
      ...themeTokens.colors,
      ...dark?.colors,
    },
  };

  return {
    darkThemeTokens,
    themeTokens,
  };
};

/**
 * Get css var by tokens
 * @descCN 获取css变量
 * @param tokens - The tokens of the theme
 * @returns The css var
 */
const getCssVarByTokens = (tokens: App.Theme.BaseToken) => {
  const styles: string[] = [];

  function removeVarPrefix(value: string) {
    return value.replace('var(', '').replace(')', '');
  }

  function removeRgbPrefix(value: string) {
    return value.replace('rgb(', '').replace(')', '');
  }

  for (const [key, tokenValues] of Object.entries(themeVars)) {
    for (const [tokenKey, tokenValue] of Object.entries(tokenValues)) {
      let cssVarsKey = removeVarPrefix(tokenValue);
      let cssValue = tokens[key][tokenKey];

      if (key === 'colors') {
        cssVarsKey = removeRgbPrefix(cssVarsKey);
        const { b, g, r } = getRgb(cssValue);
        cssValue = `${r} ${g} ${b}`;
      }

      styles.push(`${cssVarsKey}: ${cssValue}`);
    }
  }

  const styleStr = styles.join(';');

  return styleStr;
};

/**
 * Add theme vars to global
 * @descCN 添加主题变量到全局
 * @param tokens - The tokens of the theme
 * @param darkTokens - The dark tokens of the theme
 */
export const addThemeVarsToGlobal = (
  tokens: App.Theme.BaseToken,
  darkTokens: App.Theme.BaseToken
) => {
  const cssVarStr = getCssVarByTokens(tokens);
  const darkCssVarStr = getCssVarByTokens(darkTokens);

  const css = `
   :root {
      ${cssVarStr}
    }
  `;

  const darkCss = `
    html.${DARK_CLASS} {
      ${darkCssVarStr}
    }
  `;

  const styleId = 'theme-vars';

  const style = document.querySelector(`#${styleId}`) || document.createElement('style');

  style.id = styleId;

  style.textContent = css + darkCss;

  document.head.appendChild(style);
};

/**
 * Setup theme vars to html
 * @descCN 设置主题变量到html
 * @param themeColors - The colors of the theme
 * @param tokens - The tokens of the theme
 */
export const setupThemeVarsToHtml = (
  themeColors: App.Theme.ThemeColor,
  tokens?: App.Theme.ThemeSetting['tokens']
) => {
  const { darkThemeTokens, themeTokens } = createThemeToken(themeColors, tokens);
  addThemeVarsToGlobal(themeTokens, darkThemeTokens);
};

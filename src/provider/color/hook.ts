import { createContext, use } from 'react';

export const PRIMARY_COLORS = {
  teal: '#009688',
  beige: '#daa96e',
  oceanBlue: '#0c819f',
  emeraldGreen: '#27ae60',
  hotPink: '#ff5c93',
  coralRed: '#e74c3c',
  salmonPink: '#fd726d',
  orange: '#f39c12',
  violet: '#9b59b6',
} as const;

export type PrimaryColor = keyof typeof PRIMARY_COLORS;

interface ColorProviderState {
  primaryColor: PrimaryColor;
  setPrimaryColor: (color: PrimaryColor) => void;
}

const initialState: ColorProviderState = {
  primaryColor: 'teal',
  setPrimaryColor: () => null,
};

export const ColorProviderContext = createContext<ColorProviderState>(initialState);

export function useThemeColor() {
  const context = use(ColorProviderContext);

  if (context === undefined)
    throw new Error('useThemeColor must be used within a ColorProvider');

  return context;
}

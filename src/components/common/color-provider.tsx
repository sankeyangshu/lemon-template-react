import { createContext, use, useEffect, useState } from 'react';
import { localStg } from '@/lib/storage';

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

interface ColorProviderProps {
  children: React.ReactNode;
  defaultColor?: PrimaryColor;
  storageKey?: 'primaryColor';
}

interface ColorProviderState {
  primaryColor: PrimaryColor;
  setPrimaryColor: (color: PrimaryColor) => void;
}

const initialState: ColorProviderState = {
  primaryColor: 'teal',
  setPrimaryColor: () => null,
};

const ColorProviderContext = createContext<ColorProviderState>(initialState);

export function ColorProvider({
  children,
  defaultColor = 'teal',
  storageKey = 'primaryColor',
  ...props
}: ColorProviderProps) {
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor>(
    () => (localStg.getItem(storageKey)) || defaultColor,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.style.setProperty('--color-primary', PRIMARY_COLORS[primaryColor]);
  }, [primaryColor]);

  const value = {
    primaryColor,
    setPrimaryColor: (color: PrimaryColor) => {
      localStg.setItem(storageKey, color);
      setPrimaryColor(color);
    },
  };

  return (
    <ColorProviderContext {...props} value={value}>
      {children}
    </ColorProviderContext>
  );
}

export function useThemeColor() {
  const context = use(ColorProviderContext);

  if (context === undefined)
    throw new Error('useThemeColor must be used within a ColorProvider');

  return context;
}

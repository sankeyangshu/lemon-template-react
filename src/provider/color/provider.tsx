import type { PrimaryColor } from './hook';
import { useEffect, useState } from 'react';
import { localStg } from '@/lib/storage';
import { ColorProviderContext, PRIMARY_COLORS } from './hook';

export interface ColorProviderProps {
  children: React.ReactNode;
  defaultColor?: PrimaryColor;
  storageKey?: 'primaryColor';
}

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

import { domMax, LazyMotion, m } from 'motion/react';
import type { FC, PropsWithChildren } from 'react';

/**
 * animation lazy load
 * @descCN 动画懒加载
 */
export const LazyAnimate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LazyMotion strict features={domMax}>
      <m.div style={{ height: '100%' }}> {children} </m.div>
    </LazyMotion>
  );
};

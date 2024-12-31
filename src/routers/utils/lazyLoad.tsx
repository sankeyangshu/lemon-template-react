import { Suspense } from 'react';
import { Loading } from 'react-vant';
import type { LazyExoticComponent, ReactNode } from 'react';

/**
 * 路由懒加载
 * @param Component 需要访问的组件
 * @returns element
 */
const lazyLoad = (Component: LazyExoticComponent<any>): ReactNode => {
  return (
    <Suspense fallback={<Loading type="ball" className="h-full flex-center" />}>
      <Component />
    </Suspense>
  );
};

export default lazyLoad;

import { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import IconifyIcon from '@/components/Icon/IconifyIcon';
import SvgIcon from '@/components/Icon/SvgIcon';
import './index.less';

const Home = () => {
  const [contentList] = useState([
    '👑 React18 + Vite6',
    '🍕 TypeScript',
    '✨ React Vant 组件库',
    '🌀 UnoCSS 原子类框架',
    '🔥 Zustand 状态管理',
    '🚀 React-Router v7',
    '🌠 React Hooks',
    '🎉 内置 Echarts aHooks',
    '👏 集成多种图标方案',
    '🔧 零配置 ESlint，集成Prettier',
    '🎨 使用 Git Hook 进行规范化提交',
    '🌓 主题配置，支持深色模式',
    '👓 vmin 视口适配',
    '🎨 Axios 封装',
    '🎁 打包资源 gzip 压缩',
    '🚀 首屏加载动画',
    '🔒 完善的登录系统',
  ]);

  // 加载首页动画效果
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="box-border wh-full flex-center px-12">
      <div className="wh-full">
        <div className="mx-auto mb-40 mt-100 h-100 w-100">
          <SvgIcon icon="logo" className="wh-full" />
        </div>
        <div className="my-10 box-border w-full rounded-12 bg-[var(--color-block-background)] px-20 py-12 text-18">
          <a
            className="flex-center leading-35"
            href="https://github.com/sankeyangshu/lemon-template-react"
          >
            <div className="font-bold">Lemon-Template-React</div>
            <IconifyIcon icon="mdi:github" className="ml-8 text-22" />
          </a>
          <div className="mb-6 mt-12 text-14 leading-24">
            基于 React 生态系统的移动 Web 应用模板
          </div>
        </div>

        <TransitionGroup className="grid mt-16 gap-12 pb-24 text-center text-14">
          {contentList.map((item, index) => (
            <CSSTransition nodeRef={nodeRef} key={item} timeout={200} classNames="scale-in" appear>
              <div
                ref={(el) => (itemRefs.current[index] = el)}
                className="animated-item box-border w-full truncate border border-[var(--color-border)] rounded-12 border-solid p-12"
              >
                {item}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Home;

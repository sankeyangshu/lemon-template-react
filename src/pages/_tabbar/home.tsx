import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcon from '@/components/custom/svg-icon';

export const Route = createFileRoute('/_tabbar/home')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();

  const contentList = [
    `👑 ${t('home.react')}`,
    `🍕 ${t('home.typescript')}`,
    `✨ ${t('home.reactUI')}`,
    `🌀 ${t('home.tailwind')}`,
    `🔥 ${t('home.zustand')}`,
    `🚀 ${t('home.router')}`,
    `🌠 ${t('home.hooks')}`,
    `🎉 ${t('home.utils')}`,
    `👏 ${t('home.icons')}`,
    `🔧 ${t('home.eslint')}`,
    `🎨 ${t('home.git')}`,
    `🌓 ${t('home.theme')}`,
    `👓 ${t('home.axios')}`,
    `🚀 ${t('home.loading')}`,
    `🔒 ${t('home.auth')}`,
  ];

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animatedIndexes = useRef(new Set<number>());
  const isInitialLoad = useRef(true);
  const initialVisibleIndexes = useRef<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);

          if (entry.isIntersecting && !animatedIndexes.current.has(index)) {
            animatedIndexes.current.add(index);

            let delay = 0;

            if (isInitialLoad.current) {
              const positionInInitial = initialVisibleIndexes.current.indexOf(index);
              if (positionInInitial !== -1) {
                delay = positionInInitial * 100;
              }
            }

            setTimeout(() => {
              const element = entry.target as HTMLElement;
              element.classList.remove('opacity-0', 'scale-80');
              element.classList.add('animate-in', 'fade-in', 'zoom-in', 'slide-in-from-bottom', 'duration-500');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          initialVisibleIndexes.current.push(index);
        }
        observer.observe(ref);
      }
    });

    const timer = setTimeout(() => {
      isInitialLoad.current = false;
    }, initialVisibleIndexes.current.length * 100 + 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="box-border px-3">
      <div className="mx-auto mt-25 mb-10 size-25">
        <SvgIcon localIcon="icon-logo" className="size-full!"></SvgIcon>
      </div>
      <div className="my-2.5 box-border w-full rounded-xl px-5 py-3 text-lg">
        <a
          className="flex items-center justify-center leading-9"
          href="https://github.com/sankeyangshu/lemon-mobile-react"
        >
          <div className="font-bold">Lemon-Mobile-React</div>
          <SvgIcon icon="mdi:github" className="ml-2 text-2xl" />
        </a>
        <div className="mt-3 mb-1.5 text-center text-sm leading-6">{t('home.info')}</div>
      </div>

      <div className="mt-4 grid gap-3 pb-6 text-center text-sm">
        {contentList.map((item, index) => (
          <div
            key={item}
            ref={(el) => { itemRefs.current[index] = el; }}
            className={`
              box-border w-full scale-80 truncate rounded-xl border border-solid border-[#424242]
              p-3 opacity-0
            `}
            style={
              {
                '--tw-enter-scale': '0.8',
                '--tw-enter-translate-y': '20px',
              } as React.CSSProperties
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

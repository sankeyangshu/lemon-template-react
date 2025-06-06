import { m } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MotionContainer } from '@/components/Animate';
import { varFade } from '@/components/Animate/variants/fade';
import SvgIcon from '@/components/SvgIcon';

const Home = () => {
  // 使用i18n全局函数
  const { t } = useTranslation();

  const [contentList] = useState([
    `👑 ${t('page.home.react')}`,
    `🍕 ${t('page.home.typescript')}`,
    `✨ ${t('page.home.reactNut')}`,
    `🌀 ${t('page.home.unocss')}`,
    `🔥 ${t('page.home.zustand')}`,
    `🚀 ${t('page.home.router')}`,
    `🌠 ${t('page.home.hooks')}`,
    `🎉 ${t('page.home.utils')}`,
    `👏 ${t('page.home.icons')}`,
    `🔧 ${t('page.home.eslint')}`,
    `🎨 ${t('page.home.git')}`,
    `🌓 ${t('page.home.theme')}`,
    `👓 ${t('page.home.viewport')}`,
    `🎨 ${t('page.home.axios')}`,
    `🎁 ${t('page.home.gzip')}`,
    `🚀 ${t('page.home.loading')}`,
    `🔒 ${t('page.home.auth')}`,
  ]);

  return (
    <div className="box-border wh-full px-12">
      <div className="mx-auto mb-40 mt-100 h-100 w-100">
        <SvgIcon localIcon="logo" className="wh-full" />
      </div>
      <div className="my-10 box-border w-full rounded-12 bg-[var(--color-block-background)] px-20 py-12 text-18">
        <a
          className="flex-center leading-35"
          href="https://github.com/sankeyangshu/lemon-template-react"
        >
          <div className="font-bold">Lemon-Template-React</div>
          <SvgIcon icon="mdi:github" className="ml-8 text-22" />
        </a>
        <div className="mb-6 mt-12 text-center text-14 leading-24">{t('page.home.info')}</div>
      </div>

      <MotionContainer className="grid mt-16 gap-12 pb-24 text-center text-14">
        {contentList.map((item) => (
          <m.div
            key={item}
            variants={varFade().inUp}
            className="box-border w-full truncate border-(1 base-border solid) rounded-12 p-12"
          >
            {item}
          </m.div>
        ))}
      </MotionContainer>
    </div>
  );
};

export default Home;

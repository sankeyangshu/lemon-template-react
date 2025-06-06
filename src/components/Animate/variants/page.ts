import { varTranEnter, varTranExit, varTranHover } from './transition';

/**
 * Page transition animations
 * @descCN 页面切换动画
 */
export const varPage = {
  // 渐变 - 对应 zoom-fade
  zoomFade: {
    initial: { opacity: 0, scale: 0.92 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        transform: varTranHover({ duration: 0.2 }),
        opacity: varTranEnter({ durationIn: 0.3 }),
      },
    },
    exit: {
      opacity: 0,
      scale: 1.06,
      transition: {
        transform: varTranHover({ duration: 0.2 }),
        opacity: varTranExit({ durationOut: 0.3 }),
      },
    },
  },

  // 闪现 - 对应 zoom-out
  zoomOut: {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.1, ease: 'easeInOut' },
        transform: { duration: 0.15, ease: 'easeOut' },
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        opacity: { duration: 0.1, ease: 'easeInOut' },
        transform: { duration: 0.15, ease: 'easeOut' },
      },
    },
  },

  // 滑动 - 对应 fade-slide
  fadeSlide: {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: varTranEnter({ durationIn: 0.3 }),
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: varTranExit({ durationOut: 0.3 }),
    },
  },

  // 消退 - 对应 fade
  fade: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  },

  // 底部消退 - 对应 fade-bottom
  fadeBottom: {
    initial: { opacity: 0, y: '-10%' },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.25 },
        transform: varTranEnter({ durationIn: 0.3 }),
      },
    },
    exit: {
      opacity: 0,
      y: '10%',
      transition: {
        opacity: { duration: 0.25 },
        transform: varTranExit({ durationOut: 0.3 }),
      },
    },
  },

  // 缩放消退 - 对应 fade-scale
  fadeScale: {
    initial: { opacity: 0, scale: 1.2 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: varTranEnter({ durationIn: 0.28 }),
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: varTranExit({ durationOut: 0.28 }),
    },
  },
};

/**
 * Get page animation variants by type
 * @descCN 根据类型获取页面动画变体
 */
export const getPageAnimateVariants = (type: App.Theme.PageAnimate) => {
  switch (type) {
    case 'fade':
      return varPage.fade;
    case 'fade-slide':
      return varPage.fadeSlide;
    case 'fade-bottom':
      return varPage.fadeBottom;
    case 'fade-scale':
      return varPage.fadeScale;
    case 'zoom-fade':
      return varPage.zoomFade;
    case 'zoom-out':
      return varPage.zoomOut;
    default:
      return varPage.fade;
  }
};

/**
 * Animation type
 * @descCN 动画类型
 */
declare namespace Animate {
  /**
   * Animation config
   * @descCN 动画配置类型
   */
  type Variants = {
    durationIn?: number;
    durationOut?: number;
    easeIn?: [];
    easeOut?: [];
    distance?: number;
    path?: {
      opacity?: number[];
      top?: string[];
      bottom?: string[];
      left?: string[];
      right?: string[];
    };
  };

  /**
   * Transition animation type
   * @descCN 过渡动画类型
   */
  type TranHover = {
    duration?: number;
    ease?: [];
  };

  /**
   * Transition animation enter type
   * @descCN 过渡动画进入类型
   */
  type TranEnter = {
    durationIn?: number;
    easeIn?: [];
  };

  /**
   * Transition animation exit type
   * @descCN 过渡动画退出类型
   */
  type TranExit = {
    durationOut?: number;
    easeOut?: [];
  };
}

/**
 * transition hover
 * @descCN 过渡动画 hover
 * @param props transition hover type
 */
export const varTranHover = (props?: Animate.TranHover) => {
  const duration = props?.duration || 0.32;
  const ease = props?.ease || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};

/**
 * transition enter
 * @descCN 过渡动画 enter
 * @param props transition enter type
 */
export const varTranEnter = (props?: Animate.TranEnter) => {
  const duration = props?.durationIn || 0.64;
  const ease = props?.easeIn || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};

/**
 * transition exit
 * @descCN 过渡动画 exit
 * @param props transition exit type
 */
export const varTranExit = (props?: Animate.TranExit) => {
  const duration = props?.durationOut || 0.48;
  const ease = props?.easeOut || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};

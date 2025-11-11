import { useRef } from 'react';

/** 方向 */
type Direction = '' | 'vertical' | 'horizontal';

/** 最小移动距离 */
const MIN_DISTANCE = 10;

/**
 * 获取方向
 * @param x - 移动距离的 x 坐标
 * @param y - 移动距离的 y 坐标
 * @returns 方向，'' | 'vertical' | 'horizontal'
 */
function getDirection(x: number, y: number): Direction {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

/**
 * 处理移动端的触摸手势检测和方向判断
 * @link 移植自vant：https://github.com/3lang3/react-vant/blob/main/packages/react-vant/src/components/hooks/use-touch.ts
 */
export default function useTouch() {
  const startX = useRef(0);
  const startY = useRef(0);
  const deltaX = useRef(0);
  const deltaY = useRef(0);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const direction = useRef<Direction>('');
  const firstMove = useRef<boolean>(null);

  const isVertical = () => direction.current === 'vertical';
  const isHorizontal = () => direction.current === 'horizontal';

  const reset = () => {
    deltaX.current = 0;
    deltaY.current = 0;
    offsetX.current = 0;
    offsetY.current = 0;
    direction.current = '';
    firstMove.current = null;
  };

  const start = ((event: TouchEvent) => {
    reset();
    startX.current = event.touches[0].clientX;
    startY.current = event.touches[0].clientY;
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];
    // safari back will set clientX to negative number
    deltaX.current = touch.clientX < 0 ? 0 : touch.clientX - startX.current;
    deltaY.current = touch.clientY - startY.current;
    offsetX.current = Math.abs(deltaX.current);
    offsetY.current = Math.abs(deltaY.current);

    if (firstMove.current === null) {
      firstMove.current = true;
    } else {
      firstMove.current = false;
    }

    if (!direction.current) {
      direction.current = getDirection(offsetX.current, offsetY.current);
    }
  }) as EventListener;

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
    firstMove,
  };
}

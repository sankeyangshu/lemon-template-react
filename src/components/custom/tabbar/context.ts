import { createContext } from 'react';

export interface TabbarContext {
  /** 当前选中标签的名称或索引值 */
  selectIndex?: string | number;
  /** 选中标签的颜色 */
  activeColor?: string;
  /** 未选中标签的颜色 */
  inactiveColor?: string;
}

const tabbarContext = createContext<TabbarContext | null>(null);

export default tabbarContext;

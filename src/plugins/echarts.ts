import {
  BarChart,
  GaugeChart,
  LineChart,
  MapChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  ScatterChart,
} from 'echarts/charts'; // 引入图表，图表后缀都为 Chart
import {
  AriaComponent,
  CalendarComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  ParallelComponent,
  PolarComponent,
  RadarComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'; // 引入标题，提示框，直角坐标系，数据集，内置数据转换器等组件，组件后缀都为 Component
import * as echarts from 'echarts/core'; // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { LabelLayout, UniversalTransition } from 'echarts/features'; // 标签自动布局、全局过渡动画等特性
import { CanvasRenderer } from 'echarts/renderers'; // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步

// 注册必要的组件
echarts.use([
  // 图表类型
  BarChart,
  GaugeChart,
  LineChart,
  MapChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  ScatterChart,

  // 组件
  AriaComponent,
  CalendarComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  ParallelComponent,
  PolarComponent,
  RadarComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,

  // 特性
  LabelLayout,
  UniversalTransition,

  // 渲染器
  CanvasRenderer,
]);

// 导出 echarts 实例和类型
export { echarts };

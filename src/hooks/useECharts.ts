import { useDebounceFn, useSize } from 'ahooks';
import { useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import echarts from '@/plugins/ECharts';
import { useSettingStore } from '@/store/setting';
import type { EChartsCoreOption, EChartsInitOpts, SetOptionOpts } from 'echarts';

interface ConfigPropsType {
  /**
   * init函数基本配置
   * @see https://echarts.apache.org/zh/api.html#echarts.init
   */
  echartsInitOpts?: EChartsInitOpts;
  /**
   * 是否开启过渡动画
   * @default true
   */
  animation?: boolean;
  /**
   * 过渡动画持续时间(ms)
   * @default 300
   */
  animationDuration?: number;
  /**
   * 是否自动调整大小
   * @default true
   */
  autoResize?: boolean;
  /**
   * 防抖时间(ms)
   * @default 300
   */
  resizeDebounceWait?: number;
  /**
   * 最大防抖时间(ms)
   * @default 500
   */
  maxResizeDebounceWait?: number;
  /**
   * 主题模式
   * @default 'default'
   */
  themeMode?: 'dark' | 'light' | 'default';
}

/**
 * 使用ECharts图表
 * @param {RefObject<HTMLDivElement | HTMLCanvasElement>} domRef - 图表容器
 * @param {ConfigPropsType} config - 配置项
 * @returns 返回图表实例
 */
export const useECharts = (
  domRef: RefObject<HTMLDivElement | HTMLCanvasElement>,
  config: ConfigPropsType = {}
) => {
  const {
    echartsInitOpts,
    animation = true,
    animationDuration = 300,
    autoResize = true,
    resizeDebounceWait = 300,
    maxResizeDebounceWait = 500,
    themeMode = 'default',
  } = config;

  const darkMode = useSettingStore((state) => state.darkMode);

  /** 当前主题 */
  const currentTheme = useMemo(() => {
    return themeMode === 'default' ? darkMode : themeMode;
  }, [themeMode, darkMode]);

  /** 图表实例 */
  const chartInstance = useRef<echarts.ECharts | null>(null);

  /** 图表配置项 */
  const [chartOptions, setChartOptions] = useState<EChartsCoreOption | null>(null);

  /** Loading 状态控制 */
  const toggleLoading = (show: boolean) => {
    if (!chartInstance.current) return;
    if (show) {
      chartInstance.current.showLoading('default');
    } else {
      chartInstance.current.hideLoading();
    }
  };

  /** 图表初始化 */
  const initChart = async () => {
    const dom = domRef.current;
    if (!dom || echarts.getInstanceByDom(dom)) return;
    chartInstance.current = echarts.init(dom, currentTheme, echartsInitOpts);
    toggleLoading(true);
  };

  /** 图表销毁 */
  const destroyChart = () => {
    if (chartInstance.current) {
      chartInstance.current.dispose();
      chartInstance.current = null;
    }
  };

  /**
   * 图表渲染
   * @param options 图表数据集
   * @param opts 图表配置项
   */
  const renderChart = (options: EChartsCoreOption, opts: SetOptionOpts = { notMerge: true }) => {
    if (!chartInstance.current) return;
    const finalOptions = { ...options, backgroundColor: 'transparent' };
    chartInstance.current.setOption(finalOptions, opts);
    setChartOptions(finalOptions);
    toggleLoading(false);
  };

  /** 调整图表尺寸 */
  const resize = () => {
    if (!chartInstance.current) return;
    chartInstance.current.resize({
      animation: {
        duration: animation ? animationDuration : 0,
      },
    });
  };

  /** 防抖处理的resize */
  const { run: resizeDebounceHandler } = useDebounceFn(resize, {
    wait: resizeDebounceWait,
    maxWait: maxResizeDebounceWait,
  });

  /** 重置图表 */
  const resetChart = () => {
    if (!chartInstance.current) return;
    chartInstance.current.clear();
  };

  // 监听主题变化，自动重新初始化图表
  useEffect(() => {
    const handleThemeChange = async () => {
      if (!chartInstance.current) return;

      // 销毁旧图表
      destroyChart();

      // 初始化新图表
      await initChart();

      // 渲染图表
      if (chartOptions) {
        renderChart(chartOptions);
      }
    };

    handleThemeChange();
  }, [currentTheme]);

  // 监听容器尺寸变化
  const size = useSize(domRef);
  useEffect(() => {
    if (autoResize) {
      resizeDebounceHandler();
    }
  }, [size]);

  // 组件挂载时初始化图表
  useEffect(() => {
    initChart();
    return () => {
      destroyChart();
    };
  }, []);

  return {
    getChartInstance: () => chartInstance.current,
    renderChart,
    resetChart,
    toggleLoading,
  };
};

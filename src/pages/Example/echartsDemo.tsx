import { useEffect, useRef } from 'react';
import { useECharts } from '@/hooks/useECharts';
import type { EChartsOption } from 'echarts';

const EchartsDemo = () => {
  const lineChartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };
  const lineChartRef = useRef<HTMLDivElement>(null);

  const { renderChart: setLineChart } = useECharts(lineChartRef);

  const barChartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  const barChartRef = useRef<HTMLDivElement>(null);
  const { renderChart: setBarChart } = useECharts(barChartRef);

  const pieChartOptions: EChartsOption = {
    title: {
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  const pieChartRef = useRef<HTMLDivElement>(null);
  const { renderChart: setPieChart } = useECharts(pieChartRef);

  const loadCharts = () => {
    setLineChart(lineChartOptions);
    setBarChart(barChartOptions);
    setPieChart(pieChartOptions);
  };

  useEffect(() => {
    loadCharts();
  }, []);

  return (
    <div className="box-border w-full p-20">
      <div ref={lineChartRef} className="mb-20 h-350" />
      <div ref={barChartRef} className="mb-20 h-350" />
      <div ref={pieChartRef} className="h-350" />
    </div>
  );
};

export default EchartsDemo;

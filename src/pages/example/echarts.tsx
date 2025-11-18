import type { EChartsOption } from 'echarts';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/custom/nav-bar';
import SvgIcon from '@/components/custom/svg-icon';
import { useECharts } from '@/hooks/use-chart';

export const Route = createFileRoute('/example/echarts')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const { t } = useTranslation();

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
  const { renderChart: renderLineChart } = useECharts(lineChartRef);

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
  const { renderChart: renderBarChart } = useECharts(barChartRef);

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
  const { renderChart: renderPieChart } = useECharts(pieChartRef);

  const loadCharts = () => {
    renderLineChart(lineChartOptions);
    renderBarChart(barChartOptions);
    renderPieChart(pieChartOptions);
  };

  useEffect(() => {
    loadCharts();
  }, []);

  return (
    <>
      <NavBar
        title={t('router.echarts')}
        fixed
        placeholder
        leftArrow={(
          <SvgIcon className="text-2xl" icon="mdi:chevron-left" />
        )}
        onClickLeft={() => router.history.back()}
      />

      <div className="box-border grid w-full gap-4 p-4">
        <div ref={lineChartRef} className="h-87.5" />
        <div ref={barChartRef} className="h-87.5" />
        <div ref={pieChartRef} className="h-87.5" />
      </div>
    </>
  );
}

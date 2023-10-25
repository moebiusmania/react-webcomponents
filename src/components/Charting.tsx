import { useState, useEffect } from "react";

import layout from "../styles/layout.module.css"

type ChartData = {
  title: {
    text: string;
  };
  tooltip: {};
  xAxis: {
    data: string[];
  };
  yAxis: {};
  series: {
    name: string;
    type: string;
    data: number[];
  }[];
};

const chartData: ChartData = {
  title: {
    text: "ECharts entry example",
  },
  tooltip: {},
  xAxis: {
    data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

const rand = (val: number): number => Math.floor(Math.random() * 100);

export const Charting = (): JSX.Element => {
  const [data, setData] = useState<ChartData>(chartData);

  const randomData = (): void => {
    const series: number[] = chartData.series[0].data.map((e: number): number =>
      rand(e)
    );
    chartData.series[0].data = series;
    setData({ ...chartData });
  };

  let interval: ReturnType<typeof setInterval>;

  useEffect(() => {
    interval = setInterval((): void => randomData(), 2500);
    import(/* webpackChunkName: "chart-element" */ "./../elements/chart");

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={layout.prose}>
      <p>
        This is a <b>React</b> component.
      </p>
      <e-chart chart-data={JSON.stringify(data)}></e-chart>
    </section>
  );
};

import React from 'react';

import ChartElement from './../../elements/chart';

const chartData = {
  title: {
    text: 'ECharts entry example'
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [{
    name: 'sales',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};

const rand = (val) => Math.floor(Math.random() * 100);

export default class Charting extends React.Component {
  constructor(props) {
    super();

    this.state = { chartData };
  }

  randomData(){
    const series = chartData.series[0].data.map(e => rand(e));
    chartData.series[0].data = series;
    this.setState({ chartData });
  }

  componentDidMount() {
    this.interval = setInterval(this.randomData.bind(this), 2500);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <section>
        <p>This is a <b>React</b> component.</p>
        <e-chart chart-data={JSON.stringify(this.state.chartData)}></e-chart>
      </section>
    );
  }
}
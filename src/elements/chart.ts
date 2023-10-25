import * as echarts from "echarts";
import type { ECharts } from "echarts";

export default class ChartElement extends HTMLElement {
  resizeCb: () => void;
  myChart: ECharts;

  static get observedAttributes(): string[] {
    return ["chart-data"];
  }

  render(): void {
    const echart: string =
      "https://ecomfe.github.io/echarts-doc/public/en/index.html";

    this.innerHTML = `
      <p>Standard <b>Web Component</b> drawing a chart, 
      receiving data from the React parent component:</p>
      <div class="chart" style="width: 100%; height: 400px;"></div>
      <p><small>(you can resize the window and watch the chart adapt to its container)</small></p>
      <p>Charts rendered by the <a href="${echart}" target="_blank">Echart</a> library.</p>
    `;
  }

  resize(): void {
    this.myChart.resize();
  }

  attributeChangedCallback(
    _name: string,
    _oldValue: string,
    newValue: string
  ): void {
    const chart = this.myChart;
    chart ? chart.setOption(JSON.parse(newValue)) : null;
  }

  connectedCallback(): void {
    this.resizeCb = this.resize.bind(this);

    window.addEventListener("resize", this.resizeCb);

    this.render();

    const chartData: string = this.getAttribute("chart-data") || "";
    const node: HTMLElement = this.querySelector(`.chart`) as HTMLElement;

    this.myChart = echarts.init(node);
    this.myChart.setOption(JSON.parse(chartData));
  }

  disconnectedCallback(): void {
    window.removeEventListener("resize", this.resizeCb);
  }
}

customElements.define("e-chart", ChartElement);

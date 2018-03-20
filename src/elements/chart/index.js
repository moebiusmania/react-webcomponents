
import echarts from 'echarts';
import styles from './style.scss';

export default class ChartElement extends HTMLElement {
  static get observedAttributes() { return ['chart-data']; }

  render() {
    const echart = 'https://ecomfe.github.io/echarts-doc/public/en/index.html';

    this.innerHTML = `
      <p>Standard <b class="${styles.highlight}">Web Component</b> drawing a chart, 
      receiving data from the React parent component:</p>
      <div class="${styles.chart}"></div>
      <p><small>(you can resize the window and watch the chart adapt to its container)</small></p>
      <p>Charts rendered by the <a href="${echart}" target="_blank">Echart</a> library.</p>
    `;
  }

  resize() {
    this.myChart.resize();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.myChart.setOption(JSON.parse(newValue));
  }

  connectedCallback() {
    window.addEventListener('resize', this.resize.bind(this));

    this.render();

    const chartData = this.getAttribute('chart-data') || {};
    const node = this.querySelector(`.${styles.chart}`);

    this.myChart = echarts.init(node);
    this.myChart.setOption(JSON.parse(chartData));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.resize.bind(this));
  }
}

customElements.define('e-chart', ChartElement);
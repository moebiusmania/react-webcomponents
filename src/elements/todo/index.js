
import styles from './../../components/basic/style.scss';

export default class ExampleTodo extends HTMLElement {
  static get observedAttributes() { return ['data']; }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const data = this.getAttribute('data') || '[]';
    const parsed = JSON.parse(data);

    this.innerHTML = `
      <section class="${styles.check}">
        <label>Web Component</label>
        <div class="${styles.list}">
          ${parsed.map((e,i) => {
            const done = e.done ? 'checked' : '';
            return `<label data-key="${i}">
              <input type="checkbox" ${done}> ${e.label}
            </label>`}).join('')}
        </div>
      </section>
    `;
    
  }

  toggleItem(evt) {
    console.log(evt, evt.currenTarget);
  }

  connectedCallback() {
    this.render();
  }

}

customElements.define('example-todo', ExampleTodo);
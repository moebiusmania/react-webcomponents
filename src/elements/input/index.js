
export default class ExampleInput extends HTMLElement {
  static get observedAttributes() { return ['value']; }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render(){
    const value = this.getAttribute('value') || '';

    this.innerHTML = `
      <div>
        <label>Web Component</label>
        <input value="${value}" />
      </div>
    `;
  }

  connectedCallback(){
    this.render();
  }

}

customElements.define('example-input', ExampleInput);
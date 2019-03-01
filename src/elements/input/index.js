
export default class ExampleInput extends HTMLElement {
  static get observedAttributes() { return ['value']; }

  attributeChangedCallback(name, oldValue, newValue) {
    const value = this.getAttribute('value') || '';
    const input = this.querySelector('input');
    input ? input.value = value : null;
  }

  connectedCallback(){
    const value = this.getAttribute('value') || '';

    this.innerHTML = `
      <div>
        <label>Web Component</label>
        <input value="${value}" />
      </div>
    `;
  }

}

customElements.define('example-input', ExampleInput);
import elements from "../styles/main.module.css"

export default class ExampleInput extends HTMLElement {
  static get observedAttributes(): string[] {
    return ["value"];
  }

  attributeChangedCallback(): void {
    const value: string = this.getAttribute("value") || "";
    const input: HTMLInputElement = this.querySelector(
      "input"
    ) as HTMLInputElement;
    input ? (input.value = value) : null;
  }

  connectedCallback(): void {
    const value: string = this.getAttribute("value") || "";

    this.innerHTML = `
      <div>
        <label class=${elements.label}>Web Component</label>
        <input value="${value}" class=${elements.textInput} />
      </div>
    `;
  }
}

customElements.define("example-input", ExampleInput);

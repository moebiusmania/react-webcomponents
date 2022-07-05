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
        <label class="bg-sky-100 px-2 py-1">Web Component</label>
        <input value="${value}" class="rounded-none input input-bordered block w-full" />
      </div>
    `;
  }
}

customElements.define("example-input", ExampleInput);

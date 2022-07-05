type Todo = {
  done: boolean;
  label: string;
};

export default class ExampleTodo extends HTMLElement {
  static get observedAttributes(): string[] {
    return ["data"];
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    const data: string = this.getAttribute("data") || "[]";
    const parsed: Todo[] = JSON.parse(data);

    this.innerHTML = `
      <section class="">
        <label class="bg-sky-100 px-2 py-1">Web Component</label>
        <div class="grid grid-cols-6 gap-5">
          ${parsed
            .map((e: Todo, i: number): string => {
              const done: string = e.done ? "checked" : "";
              return `<label class="label justify-start gap-3">
              <input data-key="${i}" class="checkbox" type="checkbox" ${done}> <span class="label-text">${e.label}</span>
            </label>`;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  toggleItem(evt: MouseEvent): void {
    console.log(evt, evt.currentTarget);
  }

  connectedCallback(): void {
    this.render();
  }
}

customElements.define("example-todo", ExampleTodo);

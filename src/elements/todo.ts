import elements from "../styles/main.module.css"
import layout from "../styles/layout.module.css"

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
      <section>
        <label class=${elements.label}>Web Component</label>
        <div class=${layout.grid2}>
          ${parsed
            .map((e: Todo, i: number): string => {
              const done: string = e.done ? "checked" : "";
              return `<label class=${elements.checkbox}>
              <input data-key="${i}" type="checkbox" ${done}> <span>${e.label}</span>
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

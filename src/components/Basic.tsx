import { useState, useRef, useEffect } from "react";

import elements from "../styles/main.module.css"
import layout from "../styles/layout.module.css"

import "./../elements/input";
import "./../elements/todo";

type Todo = {
  label: string;
  done: boolean;
};

export const Basic = (): JSX.Element => {
  /**
   * defining refs for the custom elements
   */
  const customInput = useRef<HTMLElement>(null);
  const customCheckboxes = useRef<HTMLElement>(null);

  const [simple, setSimple] = useState<string>("some text...");
  const [complex, setComplex] = useState<Todo[]>([
    { label: "write components", done: true },
    { label: "use react", done: false },
    { label: "use standards!", done: true },
  ]);

  const toggle = (index: number): void => {
    const list: Todo[] = complex.map((e: Todo, i: number): Todo => {
      i === index ? (e.done = !e.done) : null;
      return e;
    });
    setComplex(list);
  };

  const CEtext = ({ target }: KeyboardEvent): void => {
    setSimple((target as HTMLInputElement).value);
  };

  const CEboxes = ({ target }: Event): void => {
    const index: number = parseInt(
      (target as HTMLInputElement).dataset.key as string
    );
    toggle(index);
  };

  /**
   * adding event listeners to the custom elements when they are mounted
   */
  useEffect(() => {
    customInput?.current?.addEventListener("keyup", CEtext);
    customCheckboxes?.current?.addEventListener("change", CEboxes);

    /**
     * removing event listeners when the component is unmounted
     */
    return () => {
      customInput?.current?.removeEventListener("keyup", CEtext);
      customCheckboxes?.current?.removeEventListener("change", CEboxes);
    };
  }, [customInput]);

  return (
    <section className={layout.prose}>
      <p>Data bind and event listening between React and Web Component.</p>

      <h3 className={elements.subtitle}>Simple data (string)</h3>
      <section className={layout.grid1}>
        <div>
          <label className={elements.label}>React component</label>
          <input
            value={simple}
            onChange={(event) => setSimple(event.target.value)}
            className={elements.textInput}
          />
        </div>
        <example-input ref={customInput} value={simple}></example-input>
      </section>

      <h3 className={elements.subtitle}>Structured data (array of objects)</h3>
      <section className={layout.marginBottom}>
        <label className={elements.label}>React component</label>
        <div className={layout.grid2}>
          {complex.map(
            (e: Todo, i: number): JSX.Element => (
              <label
                key={i}
                onClick={() => toggle(i)}
                className={elements.checkbox}
              >
                <input
                  type="checkbox"
                  checked={e.done}
                  readOnly
                />{" "}
                <span>{e.label}</span>
              </label>
            )
          )}
        </div>
      </section>
      <example-todo
        ref={customCheckboxes}
        data={JSON.stringify(complex)}
      ></example-todo>
    </section>
  );
};

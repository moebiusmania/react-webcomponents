import { useState, useRef, useEffect, ChangeEvent } from "react";

import "./../elements/input";
import "./../elements/todo";

type Todo = {
  label: string;
  done: boolean;
};

export const Basic = (): JSX.Element => {
  const customInput = useRef<HTMLElement>(null);
  const customCheckboxes = useRef<HTMLElement>(null);

  const [simple, setSimple] = useState<string>("some text...");
  const [complex, setComplex] = useState<Todo[]>([
    { label: "write components", done: true },
    { label: "use react", done: false },
    { label: "use standards, also!", done: true },
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

  useEffect(() => {
    customInput?.current?.addEventListener("keyup", CEtext);
    customCheckboxes?.current?.addEventListener("change", CEboxes);

    return () => {
      customInput?.current?.removeEventListener("keyup", CEtext);
      customCheckboxes?.current?.removeEventListener("change", CEboxes);
    };
  }, [customInput]);

  return (
    <section className="prose-xl">
      <p>Data bind and event listening between React and Web Component.</p>

      <h3>Simple data (string)</h3>
      <section className="grid grid-cols-2 gap-5">
        <div>
          <label className="bg-sky-100 px-2 py-1">React component</label>
          <input
            value={simple}
            onChange={(event) => setSimple(event.target.value)}
            className="rounded-none input input-bordered block w-full"
          />
        </div>
        <example-input ref={customInput} value={simple}></example-input>
      </section>

      <h4>Structured data (array of objects)</h4>
      <section className="mb-4">
        <label className="bg-sky-100 px-2 py-1">React component</label>
        <div className="grid grid-cols-6 gap-5">
          {complex.map(
            (e: Todo, i: number): JSX.Element => (
              <label
                key={i}
                onClick={() => toggle(i)}
                className="label justify-start gap-3"
              >
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={e.done}
                  readOnly
                />{" "}
                <span className="label-text">{e.label}</span>
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

import { Routes, Route, NavLink } from "react-router-dom";

import { Intro } from "./components/Intro";
import { Basic } from "./components/Basic";
import { Charting } from "./components/Charting";

import elements from "./styles/main.module.css"
import layout from "./styles/layout.module.css"

type Nav = {
  label: string;
  route: string;
};

const nav: Nav[] = [
  { label: "Intro", route: "" },
  { label: "Basic", route: "basic" },
  { label: "Charting", route: "charting" },
];

function App(): JSX.Element {
  const getClasses = (isActive: boolean): string =>
    [
      elements.navLink,
      isActive ? elements.active : undefined,
    ].join(" ");

  return (
    <main className={layout.container}>
      <h1 className={elements.title}>React & Web Components</h1>

      <hr className={elements.hr} />

      <ul>
        {nav.map(
          (item: Nav, index: number): JSX.Element => (
            <li key={index}>
              <NavLink
                to={item.route}
                className={({ isActive }) => getClasses(isActive)}
              >
                {item.label}
              </NavLink>
            </li>
          )
        )}
      </ul>

      <hr className={elements.hr} />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="basic" element={<Basic />} />
        <Route path="charting" element={<Charting />} />
      </Routes>

      <hr className={elements.hr} />

      <footer>
        <p>
          Brought to you by{" "}
          <a
            href="https://github.com/moebiusmania"
            target="_blank"
            className={elements.link}
          >
            @moebiusmania
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

export default App;

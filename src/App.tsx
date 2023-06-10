import { Routes, Route, NavLink } from "react-router-dom";

import { Intro } from "./components/Intro";
import { Basic } from "./components/Basic";
import { Charting } from "./components/Charting";

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
      "text-primary",
      "underline",
      "hover:text-primary-focus",
      isActive ? "font-bold" : undefined,
    ].join(" ");

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold">React & Web Components</h1>

      <hr className="my-5 border-dashed" />

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

      <hr className="my-5 border-dashed" />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="basic" element={<Basic />} />
        <Route path="charting" element={<Charting />} />
      </Routes>

      <hr className="my-5 border-dashed" />

      <footer>
        <p>
          Brought to you by{" "}
          <a
            href="https://github.com/moebiusmania"
            target="_blank"
            className="text-primary underline"
          >
            @moebiusmania
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;

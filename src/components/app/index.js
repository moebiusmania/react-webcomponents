import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import pkg from './../../../package.json';
import styles from './style.scss';
import Charting from './../charting';
import Intro from './../intro';

export class App extends React.Component {

  render() {

    return (
      <Router>
        <section>
          <h1 className={styles.title}>{pkg.displayName}</h1>
          <ul>
            <li><Link to="/">Intro</Link></li>
            <li><Link to="/basic">Basic concepts</Link></li>
            <li><Link to="/chart">Charting example</Link></li>
          </ul>
          <article className={styles.content}>
            <Route exact path="/" component={Intro} />
            <Route path="/basic" component={Intro} />
            <Route path="/chart" component={Charting} />
          </article>
          <footer>
            <p>Brought to you by <a href="https://github.com/moebiusmania" target="_blank">@moebiusmania</a>.</p>
          </footer>
        </section>
      </Router>
    );
  }
}
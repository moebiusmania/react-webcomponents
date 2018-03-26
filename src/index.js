import React from 'react';
import ReactDOM from 'react-dom';

import '@webcomponents/webcomponentsjs/webcomponents-sd-ce';

import { App } from './components/app';
import './globals.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
import React from 'react';

import styles from './style.scss';

export default class Basic extends React.Component {
  constructor(props){
    super();

    this.state = {
      simple: 'some text...',
      complex: ['red', 'green', 'blue']
    }
  }

  render() {

    return (
      <div>
        <p>Data bind from React to Web Component</p>
        <section className={styles.inputs}>
          <div>
            <input />
          </div>
          <input />
        </section>
      </div>
    );
  }
}
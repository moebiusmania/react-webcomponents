import React from 'react';

import ExampleInput from './../../elements/input';
import ExampleTodo from './../../elements/todo';

import styles from './style.scss';

const getKey = elem => parseInt(elem.dataset.key);

export default class Basic extends React.Component {
  constructor(props){
    super();

    this.state = {
      simple: 'some text...',
      complex: [
        { label: 'write components', done: true},
        { label: 'use react', done: false},
        { label: 'use standards, also!', done: true}
      ]
    }
  }

  setText(value) {
    const simple = Object.assign({}, this.state, { simple: value });
    this.setState(simple);
  }

  toggle(index) {
    const list = this.state.complex.map((e,i) => {
      i === index ? e.done = !e.done : null;
      return e;
    });
    const complex = Object.assign({}, this.state, { complex: list});
    this.setState(complex);
  }

  componentDidMount() {
    this.exampleInput.addEventListener('keyup', 
      evt => this.setText(evt.target.value));

    this.exampleTodo.addEventListener('change',
      evt => this.toggle(getKey(evt.target)));
  }

  componentWillUnmount() {
    this.exampleInput.removeEventListener('keyup',
      evt => this.setText(evt.target.value));

    this.exampleTodo.removeEventListener('change',
      evt => this.toggle(getKey(evt.target)));
  }

  render() {

    return (
      <div>
        <p>Data bind and event listening between React and Web Component.</p>

        <h4>Simple data (string)</h4>
        <section className={styles.inputs}>
          <div>
            <label>React component</label>
            <input 
              value={this.state.simple} 
              onChange={(event) => this.setText(event.target.value)} 
            />
          </div>
          <example-input
            ref={(input) => { this.exampleInput = input; }}
            value={this.state.simple}>
          </example-input>
        </section>

        <h4>Structured data (array of objects)</h4>
        <section className={styles.check}>
          <label>React component</label>
          <div className={styles.list}>
            {this.state.complex.map((e,i) => (
              <label key={i} onClick={() => this.toggle(i)} >
                <input type="checkbox" checked={e.done} readOnly /> {e.label}
              </label>
            ))}
          </div>
        </section>
        <example-todo
          ref={(todo) => { this.exampleTodo = todo; }}
          data={JSON.stringify(this.state.complex)}
        ></example-todo>
      </div>
    );
  }
}
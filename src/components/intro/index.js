import React from 'react';

export default class Intro extends React.Component {
  render() {

    return (
      <div>
        <p>This is a small project to demonstrate that you <b>can</b> integrate
        Web Components (<i>refering to the v1 spec</i>) inside a React
        application/workflow.</p>

        <p>By the time I am writing this, React (<i>v16</i>) supports <b>render</b> and <b>data-bind</b> of 
        simple data types to Web Components, but does <b>not</b> support integration with custom events.</p>
      
        <p>Brief explanations of the examples can be found on the 
          project's <a href="https://github.com/moebiusmania/react-webcomponents" 
          target="_blank">readme</a> file.</p>
      </div>
    );
  }
}
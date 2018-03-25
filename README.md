# React & WebComponents
> Some examples of integrating Web Components within a React application.

Built on top of the [react-minimal](https://github.com/moebiusmania/react-minimal) starter kit.

### Introduction
As the [official React documentation](https://reactjs.org/docs/web-components.html#using-web-components-in-react) states, you **can** use Web Components within a React application. 

Without additional code or techniques, Web Components are rendered inside the React Application as regular HTML elements, what is missing seamless integration between the two.

While this is being discussed (*and hopefully, implemented in a near future*) by the React team, as of React v16 you can manually implement the integration with a few lines of code.

### Data binding
To pass simple data type from React to a Web Component you can easily use React's data binding system:

```javascript
// Component.jsx
state = { text: 'hey there!' }

render(){
  return(
    <div className="widget">
      <my-element text={this.state.text}></my-element>
    </div>
  )
}
```

When it comes to `object` or `array` it will not work, a string conversion will be necessary: 

```javascript
// Component.jsx
state = { list: ['red', 'green', 'blue'] }

render(){
  const list = JSON.stringify(this.state.list);

  return(
    <div className="widget">
      <my-element list={list}></my-element>
    </div>
  )
}
```

on the Web component side you will have to decode it back to data using `JSON.parse()`, but since this is a limitation of the spec itself chances are that this is already happening or that the component is authored with a framework (*like Polymer, Svelte, HyperHTML, ecc..*) that handle the issue.

### Events
React uses a *synthetic* event system while Web Components work with standard events extended with custom ones, so out-of-the-box they don't cooperate between each other.

But since React is built on top of Javascript you can use the `.addEventListener()` API to listen events from DOM nodes. In order to get DOM elements without using the `.querySelector()` api you can use React's `refs` to achieve the result:

```javascript
// Component.jsx
componentDidMout(){
  this.element
    .addEventListener('myevent', this.doSomething.bind(this));
}

componentWillUnmount(){
  this.element
    .removeEventListener('myevent', this.doSomething.bind(this));
}

doSomething(event) { ... }

render(){
  return(
    <div className="widget">
      <my-element
        ref={(element) => { this.element = element; }} 
      ></my-element>
    </div>
  )
}
```

The most annoying part of this workaround is that you have to manually listen for events and, for performance reasons, manually remove the listener when the React's parent is being removed from the DOM.

---

### Run locally
A few steps to quick-start the project:

Clone the repo on your machine, then

```
$ yarn
```
to install dependencies, and

```
$ yarn start
``` 
to start webserver on `localhost:8090`

### License
Released under the [MIT license](LICENSE).
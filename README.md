# React & WebComponents
> Some examples of integrating Web Components within a React application.

Built on top of the [react-minimal](https://github.com/moebiusmania/react-minimal) starter kit.

### Get started
A few steps to quick-start a new project:

Clone the repo on your machine, then

```
$ yarn
```
to install dependencies, and

```
$ yarn start
``` 
to start webserver on `localhost:8090`

### Build & publish

To create deployable static files in the `./dist` folder:
```
$ yarn build
```

to deploy the `./dist` folder as a Github page:
```
$ yarn deploy
```

if you are lazy and want to do both build & publish in a single command:
```
$ yarn build:deploy
```

### Styles
This starter kit supports both regular CSS and SASS, with a little difference in how they are managed:

* `.css` files are loaded as style tag in the main document, this is great for global styles and precompiled libraries.
* `.scss` files are loaded as CSS modules, this is a best fit for components.

### License
Released under the [MIT license](LICENSE).
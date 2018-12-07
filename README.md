# CSS Playground

This example application shows different ways of styling:

- for isolation various (React) Apps on one page
- overriding styles from a base component in specialized components (with CSS Modules, where the actual classnames are not known to "outer" components)

# Run the example

```
yarn install

yarn start
```

The application runs on [http://localhost:9080](http://localhost:9080)

- **React App #1** is rendered "unisolated" and inherits globals styles that are already present on the page (due to global `styles.css` file)
- **React App #2** is rendered "isolated" using shadow dom. It does not inherit any global styles
- **React App #3** also is rendered "isolated" in its own shadow dom.

**React App #1** and **React App #2** modify the styling of a button that is included in a "base component" with global classnames (to "escape" CSS modules scoping)

**React App #3** uses [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to override background-color of a button depending on the parent component that uses the button

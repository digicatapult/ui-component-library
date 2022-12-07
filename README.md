# UI Component Library

React components built for Digital Catapult projects 🧠

## Installation

`@digicat/components` are available as an [npm package](https://www.npmjs.com/package/@digicat/components).

```sh
// with npm
npm install @digicat/components

// with yarn
yarn add @digicat/components
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@digicat/components'

function App() {
  return <Button>hello</Button>
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## Documentation

Check out our [storybook](https://digicat-components.netlify.app/) for documentation of individual components.

## Contributing

Read the [contributing guide](/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements.

## License

This project is licensed under the terms of the
[Apache License](/LICENSE).

## Stack

[React](https://reactjs.org/)  
[Babel](https://babeljs.io/)  
[Lerna](https://lerna.js.org/)  
[styled-components](https://styled-components.com/)  
[Storybook](https://storybook.js.org/)  
[Jest](https://jestjs.io/)

## Installation

Link local packages together and install remaining package dependencies:

```bash
npm run bootstrap
```

Installs with [Lerna bootstrap](https://github.com/lerna/lerna/tree/main/commands/bootstrap#usage)

## Run Storybook

```bash
cd storybook
```

install packages

```bash
npm install
```

start storybook

```bash
npm run start
```

This will open the browser and will run storybook at [localhost:9000](http://localhost:9000/)

## Local linking for development

If you want to link @digicat/components to your project while developing

run

```bash
npm run prelink
```

```bash
cd packages/components
```

```bash
npm run link
```

In your project run the following command

```bash
npm run link "@digicat/components"
```

In the root directory /ui-component-library run:

```bash
npm run build:watch
```

And you should be able to see the changes in your project as you add/change components in this library.

## Bumping package versions

Following [this guide](https://docs.npmjs.com/about-semantic-versioning#incrementing-semantic-versions-in-published-packages)

To see which packages have changed:

```bash
npx lerna changed
```

To see which lines specifically have changed:

```bash
npx lerna diff
```

To bump version of packages changed since the last release

```bash
npx lerna version
```

You should see a suggestion for changes and a prompt asking "Are you sure you want to create these versions?"

### Guide

Given a version number MAJOR.MINOR.PATCH, increment the:
MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.

**PATCH bump examples:**

- Updating docs
- Refactoring while keeping the same usage, for instance, renaming files and things that do not affect behaviour
- Fixing typos of variable or type names
- Upgrading dependencies with minor or patch releases

**MINOR bump examples:**

- New components
- New features
- CSS improvements without any style changes
- Fixing small bugs such as bugs related to browser compatibility, or bugs with property types
- Adding new property for a component

**MAJOR bump examples:**

- Anything that breaks existing behaviour
- Changing the styling of a component with any visually noticeable change that will break the desired UI.
- Upgrading dependencies by major versions only if:
  - The component library somehow exposed the internals of the dependency upgraded (hence it becomes a public API change)
  - The component library needs to change its public API in a non-backward compatible way to adapt to the dependency upgraded.
    > If none of the above (for instance a bump in the package.json and rebuild without changes for a non-exported dependency), it should be a patch release.
- Changes/fixes/new features around security breaches.

### Publishing to NPM

```bash
lerna publish
```

### Testing

Make sure you have installed all dependencies ( If you linked your project locally, `npm run prelink` has only installed dependencies, make sure you installed devDependencies before running tests)

```bash
npm
```

```bash
npm run test
```

- Test with coverage report

```bash
npm run coverage
```

- Update snapshots and test

```bash
npm run test -u
```

### Dependency check

```bash
npm run depcheck
```

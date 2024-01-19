# UI Component Library

React components built for Digital Catapult projects 🧠

## Installation / Adding to the Package.json

`@digicatapult/ui-component-library` are available as an [npm package](https://www.npmjs.com/package/@digicatapult/ui-component-library). This should get instlled along with `n` In order to use your local version in the project please use `npm link` more on it -> [here](https://docs.npmjs.com/cli/v10/commands/npm-link) and below in this document

```sh
// with npm
npm install @digicatapult/ui-component-library
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@digicatapult/ui-component-library'

function App() {
  return <Button onClick={(e) => window.alert(e)}>My Button</Button>
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## Accessing storybook locally

```sh
npm run storybook
# and if browser won't open visit http://localhost:9000/ url
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
[typescript](https://www.typescriptlang.org/)
[styled-components](https://styled-components.com/)
[Storybook](https://storybook.js.org/)
[Jest](https://jestjs.io/)

## Configuration

At **BUILD** time, `storybook` is configured using environment variables in a `.env` file at root:

| variable               | required | default | description                                                     |
| :--------------------- | :------: | :-----: | :-------------------------------------------------------------- |
| STORYBOOK_MAPBOX_TOKEN |    N     |    -    | Required for the `Map` component. Token for your Mapbox account |

## Dependency Installation

```bash
npm install
```

## Run Storybook

start storybook

```bash
npm run storybook
```

This will open the browser and will run storybook at [localhost:9000](http://localhost:9000/)

## Local linking for development

If you want to link `@digicatapult/ui-component-library` to your project while developing

run

```bash
npm run build:watch
```

In another terminal, `npm link` to your project's `react`. This prevents issues arising from two Reacts — one in the project folder and the one in `ui-component-library`. Next create a global symlink for `ui-component-library` e.g.

```bash
npm link ../hii-client/node_modules/react
npm link
```

Finally, in your project run the following command

```bash
npm link "@digicatapult/ui-component-library"
```

And you should be able to see the changes in your project as you add/change components in this library.

## Bumping package versions

Following [this guide](https://docs.npmjs.com/about-semantic-versioning#incrementing-semantic-versions-in-published-packages)

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

#### TODOs
[ ] - re-organize components e.g. maybe group like actionable vs view, etc
[ ] - QR reader / Map + other components that use externals (into one folder?)
[ ] - more configurable basic components e.g. button/input 
[ ] - create themes [default, hyproof] along with the rename of HII to HyProof
[ ] - have a version of each html default e.g. checkbox/radio/h1
[ ] - sort typography - got out of sync or we are not using, should have headings,sub,etc
[ ] - publish storybook
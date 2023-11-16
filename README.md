# Project set-Up

- this project is run by `Bun`.
- To run this project locally follow the [instructions here](https://bun.sh/docs/installation)
- CD in to the project folder and run `bun install` and `bun run dev`

# Project description

- This is a small app that fetches data from a public products API and. Based on the data the UI is built.
- The provided functionality is: search by product name, filter by product line, view product details by clicking on the item.
- There is a list of improvements to be made.

* Create a filter data slice in redux to avoid prop drilling and make filter values persistent.
* Search input needs more work to match figma designs.
* Filter needs more work to convert to a multiselect dropdown with the right check-box design
* Product details page does not show the complete information, noticed too late that the displayed information depends on `device.line` and has additional data which needs to display
* Need to think of a better solution to get the right product image resolution.
* Add validation and serialization to input

- And the best I could do in 1,5 days to make the deadline.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

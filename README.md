# Tennis players App

A React application with serverless functions for fetching random players, hosted on Netlify.

## Tech

| Logo                                                                                                                       | Name           | Link                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------- |----------------| ------------------------------------------------------------------------------------ |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo"> | Typescript     | [https://github.com/microsoft/TypeScript](https://github.com/microsoft/TypeScript)   |
| <img height="70" src="https://vitejs.dev/logo.svg" alt="Vite logo">                                                        | Vite           | [https://github.com/vitejs/vite](https://github.com/vitejs/vite)                     |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue 3 logo">             | React          | [https://github.com/facebook/react](https://github.com/facebook/react)                       |
| <img height="70" src="https://vitest.dev/logo.svg" alt="Vitest logo">                                                      | Vitest         | [https://github.com/vitest-dev/vitest](https://github.com/vitest-dev/vitest)         |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint logo">              | ESLint         | [https://github.com/eslint/eslint](https://github.com/eslint/eslint)                 |
| <img height="70" src="https://prettier.io/icon.png" alt="Prettier logo">                                                   | Prettier       | [https://github.com/prettier/prettier](https://github.com/prettier/prettier)         |

| Script     | Description                                                                            |
|------------|----------------------------------------------------------------------------------------|
| `dev`      | Starts the development server.                                                         |
| `build`    | Compiles TypeScript files and builds the production-ready application with Vite.       |
| `preview`  | Starts a local web server that serves the built solution from `./dist` for previewing. |
| `prettier` | Format source code.                                                                    |
| `test`     | Runs unit tests with Vitest.                                                           |
| `lint`     | Runs ESLint on all relevant files.                                                     |
| `lint:fix` | Runs ESLint on all relevant files, fixing errors and caching results.                  |
| `prepare`  | Install Husky hooks.                                                                   |


## Get started

1. Clone this repo.
```bash
git clone git@github.com:plecrx/tennis-players.git
cd tennis-players
```

2. Install all dependencies. (yarn as default)
```bash
yarn
```

3. Run the project with serverless functions.
```bash
netlify dev
```

## Project structure

-   `.github/` : The deployment pipeline supported by env variable
-   `.husky/` : scripts which lint and format the staged files before committing
-   `netlify/`
    -   `functions/` : The default root folder that Netlify uses to deploy serverless functions
-   `src/` : The application source code
    -   `assets/` : The static files (fonts, images, ...)
    -   `components/` : The components which will be used in pages
    -   `data-access/` : The requests that access API
    -   `features/` : The use-cases as custom hooks
    -   `layouts/` : The app layouts
    -   `router/` : React router configuration files
    -   `pages/` : The application pages
    -   `types/` : Global types
    -   `utils/` : Development tools
    -   `main.tsx` : The app entry point
-   `tests/` : The unit and integration tests
    -   `components/` : The tests of the components
    -   `data-access/` : The tests of the data-access
    -   `pages/` : The tests of the pages
    -   `router/` : The tests of the router

## Author

[Prescilla Lecurieux](mailto:prescilla.lecurieux@gmail.com)
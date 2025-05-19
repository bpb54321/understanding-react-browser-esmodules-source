# Understanding React - With React Source Code Converted to ES Modules

This repo follows along the course [Understanding React](https://understandingreact.com/) by Tony Alicea.

## React Source Code

In order to provide a better experience when logging and debugging in the browser, the React source code was processed in the following way.

1. `react` and `react-dom` packages were installed via `npm` and downloaded to the `node_modules` folder.
1. The necessary React bundle files (in CommonJS format) were copied from `node_modules` to `src`.
1. The CommonJS bundle files in `src` were manually updated to convert CommonJS to ESModule format.
1. The React source files were processed with ES Lint and Prettier to make them easier to read (in my opinion).
1. The source files are referenced from src/main.js using standard browser ES Module syntax.

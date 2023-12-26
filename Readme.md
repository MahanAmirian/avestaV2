# Web App README

This repository contains a web application built using various technologies and dependencies. It provides an overview of the project structure, scripts, and dependencies required to run and develop the application.

## Project Setup

To set up the project on your local machine, follow these steps:

1. Clone the repository to your local machine using Git.

2. Navigate to the project's root directory.

3. Install the project dependencies by running the following command:

   ```
   npm install
   ```

## Scripts

The following scripts are available for running and building the application:

- `dev`: Starts the development server using Vite, allowing you to work on the application and see live updates as you make changes.

  ```
  npm run dev
  ```

- `build`: Builds the application for production. The optimized and minified files will be generated in the `dist` directory.

  ```
  npm run build
  ```

- `lint`: Lints the source code using ESLint, checking for code quality and enforcing coding standards.

  ```
  npm run lint
  ```

- `preview`: Creates a production-like preview of the built application, allowing you to test and validate the production build locally.

  ```
  npm run preview
  ```

## Dependencies

The project relies on the following dependencies:

- `@headlessui/react`: Provides accessible and composable UI components for React.
- `@hookform/resolvers`: Collection of resolvers for validating forms with React Hook Form.
- `axios`: Promise-based HTTP client for making API requests.
- `flowbite`: CSS framework for building responsive web interfaces.
- `flowbite-react`: React components for Flowbite CSS framework.
- `i18next`: Internationalization framework for JavaScript applications.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point for React applications to interact with the DOM.
- `react-hook-form`: Performant and flexible forms library for React.
- `react-icons`: Icon library for React applications.
- `react-router-dom`: Declarative routing for React applications.
- `react-table`: Lightweight and extensible data table library for React.
- `react-toastify`: Toast notifications for React applications.
- `swiper`: Mobile touch slider and framework for building engaging web experiences.
- `yup`: JavaScript schema builder for value parsing and validation.
- `react-i18next`: Internationalization support for React using i18next.

## Development Dependencies

The project uses the following development dependencies:

- `@types/react`: TypeScript type definitions for React.
- `@types/react-dom`: TypeScript type definitions for React DOM.
- `@vitejs/plugin-react`: Official Vite plugin for React integration.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes automatically.
- `eslint`: Pluggable and configurable linter for JavaScript and JSX.
- `eslint-plugin-react`: ESLint plugin for React-specific linting rules.
- `eslint-plugin-react-hooks`: ESLint plugin for enforcing rules of React Hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for linting React Refresh syntax.
- `postcss`: Tool for transforming CSS with JavaScript.
- `tailwindcss`: Utility-first CSS framework for rapidly building custom user interfaces.
- `vite`: Next-generation frontend build tooling.

## License

The project is licensed under the [MIT License](LICENSE.md).

Feel free to explore and modify the project according to your needs.
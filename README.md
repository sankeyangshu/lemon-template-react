<div align="center">
<a href="https://github.com/sankeyangshu/lemon-mobile-react">
  <img alt="Lemon-Mobile-React" width="200" height="200" src="./public/logo.png">
</a>

<h1 align="center">
  lemon-mobile-react
</h1>

English / [简体中文](./README.zh-CN.md)

An mobile web apps template based on the React ecosystem.

<p>
  <img src="https://img.shields.io/github/license/sankeyangshu/lemon-mobile-react" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/sankeyangshu/lemon-mobile-react" alt="version" />
  <img src="https://img.shields.io/github/languages/top/sankeyangshu/lemon-mobile-react" alt="languages" />
  <img src="https://img.shields.io/github/repo-size/sankeyangshu/lemon-mobile-react" alt="repo-size" />
  <img src="https://img.shields.io/github/issues-closed/sankeyangshu/lemon-mobile-react" alt="issues" />
</p>

[Docs](https://lemon-template-docs.vercel.app/mobile-react/) / [Feedback](https://github.com/sankeyangshu/lemon-mobile-react/issues)

</div>

---

## Introduction

🚀🚀🚀 **lemon-mobile-react** is built using the latest technologies, including `React19`, `Vite7`, `TanStack Router`, `TanStack Query`, `Daisyui`, `Zustand`, `TypeScript`, and `Tailwindcss V4`. It integrates features like `Dark Mode`, system theme colors, and Mock data.

You can directly start developing your business logic on this template! Hope you enjoy it. 👋👋👋

> [!NOTE]
> If this project is helpful to you, please click the "Star" button in the top-right corner. Thank you!

## Preview

👓 [Click Demo](https://lemon-mobile-react.vercel.app) (Switch to mobile view on PC browsers)

## Other Templates

- [lemon-mobile-vue](https://github.com/sankeyangshu/lemon-mobile-vue) - A mobile web apps template based on the Vue 3 ecosystem
- [lemon-mobile-uniapp](https://github.com/sankeyangshu/lemon-mobile-uniapp) - An mobile web apps template based on the UniApp ecosystem

## Features

- ⚡️ Developed with `React` + `Hooks`
- ✨ Uses `Vite7` as the development and build tool (includes `Gzip` packaging, `TSX` syntax, proxy support, etc.)
- 🍕 Fully integrates `TypeScript`
- 🚦 Uses `TanStack Router` for routing management, providing a type-safe routing system
- 🔄 Uses `TanStack Query` for server state management, simplifying data fetching and caching
- 🍍 Uses `Zustand` for state management, lightweight, simple and easy to use
- 📦 `@reactuses/core` High quality and reliable React Hooks library
- 🎨 `Daisyui` component library
- 🌀 `Tailwindcss` for instant atomic CSS engine
- 👏 Integrates multiple icon solutions
- 🌓 Supports Dark Mode
- 🌍 Multi-language support with `i18n`
- 🔥 Integrates `ECharts` for data visualization, with `useECharts` Hooks encapsulation
- ⚙️ Uses `Vitest` for unit testing
- ☁️ `Axios` encapsulation
- 💾 Local `Mock` data simulation support
- 📱 Browser compatibility
- 📥 `Gzip` compression for packaged resources
- 🛡️ First screen loading animation
- 💪 Integrates `Eslint` code validation standards, with `Prettier` as the default code formatter
- 🌈 Uses `simple-git-hooks`, `lint-staged`, and `commitlint` to standardize commit messages

## Prerequisites

Familiarity with the following concepts will help you use this template effectively:

- [React](https://react.dev/) - Familiar with `React` basic syntax
- [Vite](https://cn.vitejs.dev/) - Understand `Vite` features
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - Proficient in using `Zustand`
- [TypeScript](https://www.typescriptlang.org/) - Master basic `TypeScript` syntax
- [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview) - Familiar with `TanStack Router` basic usage
- [Icones](https://icones.js.org/) - Recommended icon library for the project, but `SVG Icon` is also an option
- [Tailwind CSS](https://tailwindcss.com/) - High-performance and extremely flexible instant atomic CSS engine
- [@reactuses/core](https://reactuse.com/en-US/) - A high-quality and reliable React Hooks library
- [Daisyui](https://daisyui.com/docs/intro/) - Tailwind CSS plugin for faster, cleaner, and simpler Tailwind CSS development
- [ECharts6](https://echarts.apache.org/handbook/zh/get-started/) - Familiar with basic `ECharts` usage
- [Mock.js](https://github.com/nuysoft/Mock) - Understand basic `Mock.js` syntax
- [ES6+](http://es6.ruanyifeng.com/) - Proficient in `ES6+` syntax

## Environment Setup

Ensure the following tools are installed locally: [Pnpm](https://pnpm.io/), [Node.js](http://nodejs.org/), and [Git](https://git-scm.com/).

- Recommended to use [pnpm>=8.15.4](https://pnpm.io/), otherwise dependencies may not install properly, causing build errors.
- [Node.js](http://nodejs.org/) version requirement is `18.x` or above. Recommended: `^18.18.0 || >=20.0.0`.

## VSCode Extensions

If you use [VSCode](https://code.visualstudio.com/) (recommended), install the following extensions for improved development efficiency and code formatting:

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS IntelliSense plugin
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - `.env` file highlighting
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Better error visualization
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - Maintain consistent coding styles across IDEs
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Script linting
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All-in-one i18n support
- [JavaScript and TypeScript VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sankeyangshu.vscode-javascript-typescript-snippets) - Visual Studio Code snippets for JavaScript and TypeScript
- [React Collection VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sankeyangshu.vscode-react-collection-snippets) - A React Code Snippets Extension

## Usage

### Use the CLI

```bash
# Copy the command - 'project' is your project name
pnpm create lemon project -t mobile-react
```

### GitHub Template

[Use this template to create a repository](https://github.com/sankeyangshu/lemon-mobile-react/generate)

### Clone

```bash
# Clone the project
git clone https://github.com/sankeyangshu/lemon-mobile-react.git

# Enter the project directory
cd lemon-mobile-react

# Install dependencies - recommended to use pnpm
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build
```

## Git Commit Guidelines

### Commit Standards

The project enforces Git commit messages using `simple-git-hooks` and `commitlint`, adhering to the widely adopted [Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) guidelines.

- `feat`: Add new features
- `fix`: Fix bugs
- `docs`: Documentation changes
- `style`: Code formatting (does not affect functionality, e.g., spacing, semicolons, etc.)
- `refactor`: Code refactoring (neither bug fixes nor new features)
- `perf`: Performance optimizations
- `test`: Add or update test cases
- `build`: Changes to build process or external dependencies (e.g., updating npm packages, modifying webpack configuration)
- `ci`: Changes to CI configuration or scripts
- `chore`: Changes to build tools or auxiliary libraries (does not affect source files or tests)
- `revert`: Revert a previous commit

## Community

You can use [issues](https://github.com/sankeyangshu/lemon-mobile-react/issues) to report problems or submit a Pull Request.

## Browser Support

- For local development, we recommend using the latest version of Chrome. [Download](https://www.google.com/intl/en/chrome/).
- The production environment supports modern browsers. IE is no longer supported. For more details on browser support, check [Can I Use ES Module](https://caniuse.com/?search=ESModule).

| [<img src="https://i.imgtg.com/2023/04/11/8z7ot.png" alt=" IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                      not support                                                                       |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## License

[MIT](./LICENSE) License © 2023-PRESENT [sankeyangshu](https://github.com/sankeyangshu)

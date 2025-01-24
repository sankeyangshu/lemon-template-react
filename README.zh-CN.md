<div align="center">
<a href="https://github.com/sankeyangshu/lemon-template-react">
  <img alt="Lemon-Template-React" width="200" height="200" src="./public/logo.png">
</a>

<h1 align="center">
  lemon-template-react
</h1>

[English](./README.md) / 简体中文

一个基于 React 生态系统的移动 web 应用模板。

<p >
  <img src="https://img.shields.io/github/license/sankeyangshu/lemon-template-react" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/sankeyangshu/lemon-template-react" alt="version" />
  <img src="https://img.shields.io/github/languages/top/sankeyangshu/lemon-template-react" alt="languages" />
  <img src="https://img.shields.io/github/repo-size/sankeyangshu/lemon-template-react" alt="repo-size" />
  <img src="https://img.shields.io/github/issues-closed/sankeyangshu/lemon-template-react" alt="issues" />
</p>

[文档](https://sankeyangshu.github.io/lemon-template-docs/react/) / [反馈](https://github.com/sankeyangshu/lemon-template-react/issues)

</div>

---

## 简介

🚀🚀🚀 **lemon-template-react** 使用了最新的`React18`、`Vite6`、`react-vant`、`Zustand`、`Typescript`、`UnoCSS`等主流技术开发，集成 `Dark Mode`（暗黑）模式和系统主题色、Mock数据等功能。

你可以在此之上直接开发你的业务代码！希望你能喜欢。👋👋👋

> [!NOTE]
> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！

## 在线预览

👓 [点击这里](https://lemon-template-react.vercel.app)（PC浏览器请切换手机端模式）

## 其他模版

- [lemon-template-vue](https://github.com/sankeyangshu/lemon-template-vue) - 基于 Vue 3 生态系统的移动 web 应用模板

## 项目功能

- ⚡️ 使用 React + Hooks 开发
- ✨ 采用 Vite6 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理…）
- 🍕 整个项目集成了 TypeScript
- 🍍 使用 Zustand 做状态管理，轻量、简单、易用
- 📦 ahooks 高质量可靠的 React Hooks 库
- 🎨 react-vant 组件库
- 🌀 UnoCSS 即时原子化 CSS 引擎
- 👏 集成多种图标方案
- 🌓 支持深色模式
- 🌍 多语言国际化，支持 i18n国际化方案
- 🔥 集成 Echarts 数据可视化图表，封装 useECharts Hooks
- ⚙️ 使用 Vitest 进行单元测试
- ☁️ Axios 封装
- 💾 本地 Mock 数据模拟的支持
- 📱 浏览器适配 - 使用 viewport vw/vh 单位布局
- 📥 打包资源 gzip 压缩
- 🛡️ 首屏加载动画
- 💪 集成 Eslint 代码校验规范，并且该 Eslint 配置默认使用 Prettier 格式化代码，
- 🌈 使用 simple-git-hooks、lint-staged、commitlint 规范提交信息

## 基础知识

提前了解和学习这些知识会对使用本项目有很大的帮助。

- [React](https://react.dev/) - 熟悉 `React` 基础语法
- [Vite](https://cn.vitejs.dev/) - 熟悉 `Vite` 特性
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - 熟悉 `Zustand` 基本使用
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本语法
- [React-Router](https://reactrouter.com/en/main) - 熟悉 `React-Router`基本使用
- [Icones](https://icones.js.org/) - 本项目推荐图标库，当然你也可以使用 `IconSVg`
- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- [ahooks](https://ahooks.js.org/zh-CN/) - 一套高质量可靠的 React Hooks 库
- [React Vant](https://react-vant.3lang.dev/) - 轻量、可靠的移动端 React 组件库
- [ECharts5](https://echarts.apache.org/handbook/zh/get-started/) - 熟悉 `Echarts` 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - 了解 `Mockjs` 基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 `ES6` 基本语法

## 环境准备

本地环境需要安装 [Pnpm](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

- 推荐使用 [pnpm>=8.15.4](https://www.pnpm.cn/)，否则依赖可能安装不上，出现打包报错等问题。
- [Node.js](http://nodejs.org/) 版本要求`18.x`以上，这里推荐 `^18.18.0 || >=20.0.0`。

## Vscode 配套插件

如果你使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS 提示插件
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - `.env` 文件 高亮
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - 更好的错误定位
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 不同 IDE 维护一致的编码样式
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 I18n 支持
- [JavaScript and TypeScript Vscode Snippets](https://marketplace.visualstudio.com/items?itemName=sankeyangshu.vscode-javascript-typescript-snippets) - JavaScript 和 TypeScript 代码片段
- [React Collection Vscode Snippets](https://marketplace.visualstudio.com/items?itemName=sankeyangshu.vscode-react-collection-snippets) - 提供 React 代码片段支持

## 安装和使用

### 使用脚手架

> 开发中

### GitHub 模板

[使用这个模板创建仓库](https://github.com/sankeyangshu/lemon-template-react/generate)

### 克隆使用

```bash
# 克隆项目
git clone https://github.com/sankeyangshu/lemon-template-react.git

# 进入项目目录
cd lemon-template-react

# 安装依赖 - 推荐使用pnpm
pnpm install

# 启动服务
pnpm dev

# 打包发布
pnpm build
```

## Git 提交规范

### 提交规范

项目使用 `simple-git-hooks` 和 `commitlint` 规范 Git 提交信息，遵循社区主流的 [Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) 规范。

- `feat`: 新增功能
- `fix`: 修复 bug
- `docs`: 文档变更
- `style`: 代码格式（不影响功能，例如空格、分号等格式修正）
- `refactor`: 代码重构（不包括 bug 修复、功能新增）
- `perf`: 性能优化
- `test`: 添加、修改测试用例
- `build`: 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
- `ci`: 修改 CI 配置、脚本
- `chore`: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
- `revert`: 回滚 commit

## 社区

您可以使用 [issue](https://github.com/sankeyangshu/lemon-template-react/issues) 来反馈问题，或者提交一个 Pull Request。

## 浏览器支持

- 本地开发推荐使用 Chrome 最新版浏览器 [Download](https://www.google.com/intl/zh-CN/chrome/)。
- 生产环境支持现代浏览器，不在支持 IE 浏览器，更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

| [<img src="https://i.imgtg.com/2023/04/11/8z7ot.png" alt=" IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                      not support                                                                       |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## 许可证

[MIT](./LICENSE) License © 2023-PRESENT [sankeyangshu](https://github.com/sankeyangshu)

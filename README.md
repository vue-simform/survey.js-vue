# Vue 3 + TypeScript + Vite + Survey.js

This boilerplate is starting point of any project that uses survey.js and Vite with all batteries included. you can directly start development without spending time on project setup, you just have to configure survey.js according to you requirements.

The stack of this boilerplate is focused on web app front end, therefore I’ll keep it simple and mainly focuses on following technologies - Vue 3, Vite and survey.js library.

# Things to update before start

- update readme file to remove/add project related documenation.
- update `name` key in `package.json` file
- update git remote using `git remote set-url origin new.git.url/here` command
- [Demo](https://dev.d4mpru5o2tc5l.amplifyapp.com/) section from this file
- remove unnecessary files.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Tech Stack

**Client:** [Vue3](https://vuejs.org/), [Typescript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/),
[Survey.js](https://surveyjs.io/)

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

`Clone URL : https://github.com/vue-simform/survey.js-vue.git`

Clone repo using HTTP or SSH method.

To use SSH method, please [Follow this tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

To use HTTP method, developer has to pass username in git clone url like this `https://{username}@github.com:vue-simform/survey.js-vue.git`
It will promte for application password that you can generate from [here](https://github.com/settings/tokens)

run `npm i` command

run `npm run dev` command to start development server.

## Author

Trishant Kumar (trishant.k@simformsolutions.com)

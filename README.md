# Minimal react-redux boilerplate (2018)
Minimal React + Redux starter kit for experiments.

It has bare minimum to start development:
* React
* Redux
* Webpack
* Babel and css loaders

Credits to: https://enkot.github.io/Minimal-React/ for the starting project.

## Installation
Clone from repository:
```
$ git clone https://github.com/droidpl/miniplate-react-redux
```
Install dependencies:
```js
$ npm install
```

## Running
Build files and start local server in watch mode:
```js
$ npm run start
```
This will open the browser at `http://localhost:8080/`.

If you want to create a distributable file you can run:
```$xslt
npm run build
```

This will create a ``dist`` directory with the bundle.js and the the index.html for your react application.


## Debugger setup

To setup the debugger in intellij:
- Setup the npm run start command
- Setup a 'javascript debugger' task
-- In the configuration, setup in the root folder the following mapping:
```webpack:///.```
- Run the start command
- Run the javascript debugger task with the debugger mode
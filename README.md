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
This will open the browser at `http://localhost:8080/` and you will see simple project management app (like Trello board): 

![alt text](https://image.ibb.co/jrPv6k/Screen_Shot_2017_08_30_at_3_57_29_PM.png)

If you want to create a distributable file you can run:
```$xslt
npm run build
```

This will create a ``dist`` directory with the bundle.js and the the index.html for your react application.

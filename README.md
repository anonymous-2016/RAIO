# antd &  react-router-dom

```sh

$ npm i -S antd react-router-dom

$ npm i -S react-router-dom

$ npm i -S antd 

``` 

https://github.com/JedWatson/classnames



https://github.com/necolas/normalize.css



# PropTypes


```sh

$ npm i -S prop-types

```

```js
import PropTypes from 'prop-types'; // ES6 

var PropTypes = require('prop-types'); // ES5 with npm 
``` 





## Project Structure

> tree

```sh

$ tree --help
$ tree 

```


```sh

.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies


```

























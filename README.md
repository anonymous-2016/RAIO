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

```sh

$ tree src


├─Actions
├─Ant_Components
│  ├─React_Template
│  └─Redux_Template
├─app
├─components
│  ├─AM                      # 权限管理
│  │  └─RM
│  ├─IM                      # 信息管理
│  │  ├─MM
│  │  │  └─ReactTreeMenu
│  │  ├─ModuleM
│  │  ├─PM
│  │  └─RM
│  ├─json-datas
│  ├─Modals
│  ├─Search
│  ├─UM                       # 用户管理
│  └─utils
├─img
├─Reducers
│  ├─AM
│  ├─IM
│  └─UM
├─Routers
├─Sass
└─Store




```



# react-redux & redux 


```sh

$ npm i -S react-redux redux 

$ npm i -S react-redux 

$ npm i -S redux 

```

# Presentational Components & Container Components

http://redux.js.org/docs/basics/UsageWithReact.html#designing-component-hierarchy


> 设计组件层次结构






Warning: Each record in table should have a unique `key` prop,or set `rowKey` to an unique primary key.


`rowKey={record => record.uid} `

https://ant.design/components/table-cn/#


```js
// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
// Most often you would use IDs from your data as keys:
const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);

// When you don't have stable IDs for rendered items, you may use the item `index`as a key as a last resort:

const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index}>
        {todo.text}
    </li>
);

```

https://facebook.github.io/react/docs/lists-and-keys.html#keys



```js

const Datas = items.map((item, index) => {
        return(
            <li key={`id_${index}`}>
                {item.text}
            </li>
        );
    }
);

```





# eslint 0, 1, 2 means

http://eslint.org/docs/user-guide/getting-started#configuration

```md

"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code will be 1)

```

http://eslint.cn/docs/user-guide/configuring

http://eslint.cn/demo/

http://eslint.org/docs/2.0.0/user-guide/configuring

http://eslint.org/docs/3.0.0/user-guide/configuring

http://eslint.org/docs/4.0.0/user-guide/configuring



"no-unused-vars":"off",
"no-unused-vars":"warn",
"no-unused-vars":"error",












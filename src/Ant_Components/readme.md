# 可视化

https://antv.alipay.com/g2/doc/index.html



https://antv.alipay.com/g6/doc/index.html

## 可视化基础

https://antv.alipay.com/vis/doc/chart/index.html



# eslint error

> babel-eslint

https://github.com/eslint/eslint/issues/4636#issuecomment-162910216


```sh
$ npm i -D eslint babel-eslint eslint-plugin-react

```

# `"parser": "babel-eslint",`


```js

{
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn"
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    }
}

```




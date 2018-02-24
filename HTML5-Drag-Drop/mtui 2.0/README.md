# MTUI2.0 UI React

> Web components build with React.


https://www.npmjs.com/package/mtui


http://mtui.h5ds.com/

* Node v6.9.5+
* React v15+

## 使用

### npm安装使用

- 安装使用

```sh

$ npm i mtui
# OR
$ npm i -S mtui

```

```js

    import 'mtui/style.css';
    import {DatePicker} from 'mtui/index';
    /*
        mountNode
    */
    const mountNode = document.querySelector(`[data-dom="root-app"]`);
    ReactDOM.render(
        <DatePicker format="yyyy-mm-dd"/>,
        mountNode
    );

```

## 开发及构建

### 目录结构

```sh

# Shell tree
# CMD clip
    ├── package.json
    ├── build         # 生成目录
    ├── dev           # 源文件目录
    ├── dev/mtui      # 组件库目录
    └── lib           # npm 包构建目录
```

### 开发

使用之前先安装相关开发依赖：

```sh

$ npm i webpack -g
$ npm i

```
浏览器输入 http://localhost:4001

```sh

#开发
$ npm start

#构建
$ npm run build

```










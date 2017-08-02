# table


```js

/*
数据源

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    }, 
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    }, 
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
    }
];

<Table dataSource={dataSource} columns={columns} />

用户ID 用户姓名 登录名 手机号 邮件 激活状态 有效日期

*/



/* 
    ,
    {
        title: '操作',
        key: 'action',
        render: (text, data) => (
            <span>
                <a href={"#"+data.uname}>更新</a>
                <span className="ant-divider" />
                <a href="#">删除</a>
                <span className="ant-divider" />
                <a href="#" className="ant-dropdown-link">
                    More <Icon type="down" />
                </a>
            </span>
        )
    } 
*/

// http://localhost:8000/user/450000197702084698

// xiagq gildata 23 Male 18123456789 xiagq@gildata.com 上海 上海市 浦东新区 2017-07-03 15:26:50




{/* <Table columns={columns} dataSource={data} /> */}


```


# whatwg-fetch



```js

import 'whatwg-fetch';
// import * as fetch from 'whatwg-fetch';
// https://github.com/github/fetch#json



```

# CSS in JS & css-modules

```jsx


import * as CSSinJS from './styles.css';


// CSSinJS.css1

<div className={CSSinJS.css1}>
    <h1>CSS in JS </h1>
</div>

import logo from '../img/logo.png';
import './App.css';




```

https://github.com/airbnb/react-with-styles

https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e

https://speakerdeck.com/vjeux/react-css-in-js

https://github.com/css-modules/css-modules


```jsx


/* Thumbnail.css.js */
export default {
    image: {
        borderRadius: '3px'
    }
}

/* Thumbnail.jsx */
import styles from './Thumbnail.css.js';

render() {
    return(
        <img className={styles.image}/>
    );
}


/* Rendered DOM */
<img style="border-radius: 3px;"/>

```


```jsx


/* Thumbnail.css */
.image {
    border-radius: 3px;
}

/* Thumbnail.jsx */
import styles from './Thumbnail.css';

// import * as CSSinJS from './styles.css';

render() {
    return(
        <img className={styles.image}/>
    );
}

/* Rendered DOM */
<img class="Thumbnail__image___1DA66"/>

/* Processed Thumbnail.css */
.Thumbnail__image___1DA66 {
    border-radius: 3px;
}


```


# demo

```jsx
/*

.css-in-js-h1 {
    color: #0f0;
    font-size: 2rem;
    text-shadow: 3px 3px #000;
    background: rgba(255, 255, 255, 0.7);
}

.css_in_js_h1 {
    color: #0f0;
    font-size: 2rem;
    text-shadow: 3px 3px #000;
    background: rgba(255, 255, 255, 0.7);
}


*/


import styles from './Item1.css';
// css in js



<span className={styles.css_in_js_h1}>
    CSS in JS Testing
</span>
<span className="css-in-js-h1">
    className Testing
</span>


```

https://github.com/css-modules/css-modules


# webpack

> css-loader?modules

https://github.com/webpack/css-loader

https://github.com/css-modules/webpack-demo

https://github.com/css-modules/css-modules/blob/master/docs/get-started.md#webpack


```sh

$ npm i -D css-loader

```

## webpack.config.js

https://github.com/webpack-contrib/css-loader

```js

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}

```

# CSS Modules Webpack Demo

https://github.com/css-modules/webpack-demo


```sh

$ npm i
$ npm start & open http://localhost:8080

```

https://github.com/webpack/style-loader

https://github.com/airbnb/react-with-styles


# CSS :nth-of-type


```css

/* 
2n+1 

https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type

:nth-of-type(2n)
*/


```




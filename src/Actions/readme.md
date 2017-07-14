# Actions


返回 pure object



## Actions

http://redux.js.org/docs/basics/Actions.html

> Actions 是信息的有效载荷, 将数据从应用程序发送到你的 Store。

它们是 Store 唯一的信息来源。
你可以使用 store.dispatch() 将它们发送到 Store。

```js

const ADD_TODO = 'ADD_TODO';

{
    type: ADD_TODO,
    text: 'Build my first Redux app'
}

```
> Actions 是纯 JavaScript 对象。

Actions 必须有一个 type 属性，指示正在执行的 action 的类型。

通常将类型定义为`字符串常量`。

一旦你的应用程序足够大，你可能需要将其移动到`单独的模块(常量模块)`中。

> 除了 type 之外，一个 action 对象的结构完全取决于你。

### Flux Standard Action

https://github.com/acdlite/flux-standard-action



```js

import { ADD_TODO, REMOVE_TODO } from '../actionTypes';

```


### Action Creators

> Action creators 正是创建 actions 的函数。

在 Redux 中 action creators 只是返回一个 action：

```js

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

// 实际发起一个 dispatch, 将结果传递给 dispatch() 函数

dispatch(addTodo(text));
dispatch(completeTodo(index));

// 或者，绑定 action creator, 自动 dispatch

const boundAddTodo = (text) => dispatch(addTodo(text));
const boundCompleteTodo = (index) => {
    return dispatch(completeTodo(index));
};

boundAddTodo(text);
boundCompleteTodo(index);

```


```js

// actions.js

// action 类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// 其他 constants
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators
export function addTodo(text) {
    return {type: ADD_TODO, text};
}

export function toggleTodo(index) {
    return {type: TOGGLE_TODO, index};
}

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter};
}


```














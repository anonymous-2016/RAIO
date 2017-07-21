# ES6


##  Object.assign() & Object properties auto assign


> Shorthand property names (ES6) & Object initializer




```js

// 菜单管理
const MENU_CHECK = 'MENU_CHECK';
const MENU_ADD = 'MENU_ADD';

const MENU_MODEFY = 'MENU_MODEFY';
const MENU_ASSOCIATE = 'MENU_ASSOCIATE';

const OBJ_CONSTANTS = Object.assign({}, {
    MENU_CHECK,
    MENU_ADD,
    MENU_MODEFY,
    MENU_ASSOCIATE
});


OBJ_CONSTANTS.MENU_CHECK;


export OBJ_CONSTANTS;

import * as ConstTypes from './constants/index.jsx'


```

```js


// 菜单管理
const MENU_CHECK = 'MENU_CHECK';
const MENU_ADD = 'MENU_ADD';

const MENU_MODEFY = 'MENU_MODEFY';
const MENU_ASSOCIATE = 'MENU_ASSOCIATE';

const Obj = Object.assign({}, {
    MENU_CHECK,
    MENU_ADD,
    MENU_MODEFY,
    MENU_ASSOCIATE
});

Obj;
// {MENU_CHECK: "MENU_CHECK", MENU_ADD: "MENU_ADD", MENU_MODEFY: "MENU_MODEFY", MENU_ASSOCIATE: "MENU_ASSOCIATE"}MENU_ADD: "MENU_ADD"MENU_ASSOCIATE: "MENU_ASSOCIATE"MENU_CHECK: "MENU_CHECK"MENU_MODEFY: "MENU_MODEFY"__proto__: Object

Obj.MENU_ADD;
// "MENU_ADD"

```


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer

```js

// Shorthand property names (ES6)
let a = "foo", b = 42, c = {};
let obj = { a, b, c };

// Shorthand method names (ES6)
let obj = {
    property([parameters]) {},
    get property() {},
    set property(value) {},
    * generator() {}
};

// Computed property names (ES6)
let prop = "foo";
let obj = {
    [prop]: "hey",
    ["b" + "ar"]: "there",
};


```


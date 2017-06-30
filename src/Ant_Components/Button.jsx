import React, {Component} from 'react';

import {Button} from 'antd';

const BTN = (props) => {
    return(
        <div>
            <Button icon="search" onClick={props.searchHandler}>Search</Button>
            <Button type="danger" icon="logout" onClick={}>Search</Button>
        </div>
    );
};




/*

<Icon type="link-circle-o" />

<Icon type="link" />

<Icon type="loading" />

<Icon type="question" spin style={{ fontSize: 16, color: '#08c' }} />


实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；

-circle（实心）

-o（描线）

命名顺序：[图标名]-[形状?]-[描线?]-[方向?]。

? 为可选。 boolean	false



https://ant.design/components/icon-cn/#API



https://ant.design/components/button-cn/#API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：

type -> shape -> size -> loading -> disabled



<Button type="dashed/primary/danger/null" icon="search">Search</Button>

<Button shape="circle" icon="search">Search</Button>

large small 若不设置 size，则尺寸为中。

onClick

ghost

loading

disabled





https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type


submit

reset: 

button: 

menu:

*/






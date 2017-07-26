# Reducers


处理 actions, 更新 state


(prevState, action) => newState

(previousState, action) => newState


## React-Native/React/Redux snippets for es6/es7


https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux



```js

"editor.snippetSuggestions": "top",

```


rct	Redux constant
crr	Connect Redux

rrd	Redux Reducer
rpf	Redux Pure Function
rpc	Redux Pure Function Const


```sh
    # Snippets List

    ## Snippets	Content
    imr	Import React
    imrc	Import React Component
    imrn	Import React-Native Element
    ims	Import Styled-Components
    imsn	Import Styled-Components Native

    rct	Redux constant
    crr	Connect Redux

    sl	Stateless Component
    slr	Stateless Component Return
    slc	Stateless Component Function
    ccs	Component Class
    edccs	Export default Component Class

    rrd	Redux Reducer
    rpf	Redux Pure Function
    rpc	Redux Pure Function Const

    cwm	ComponentWillMount
    cdm	ComponentDidMount
    cdu	ComponentDidUpdate
    cwu	ComponentWillUpdate
    cwum	ComponentWillUnmount
    cwrp	ComponentWillReceiveProps
    ess	EStyleSheet Style
    ed	Export default
    edl	EslintDisableLine
    styc	Styled Component
    estyc	Export Styled Component
    edstyc	Export default Styled Component
    cmmb	Comment Big Block
    log	Console Log
    tdesc	Test Describe
    tit	Test It

```


# React Redux ES6 Snippets

https://marketplace.visualstudio.com/items?itemName=timothymclane.react-redux-es6-snippets

```md

    # → === Tab

    reducer→	
    Redux reducer skeleton

    container→	
    Redux container with mapStateToProps, mapDispatchToProps, mergeProps, and connect functions

    mapStateToProps→	
    mapStateToProps arrow function

    mapDispatchToProps→	
    mapDispatchToProps arrow function

    mapDispatchToPropsBind→	
    mapDispatchToProps arrow function using bindActionCreators

    mergeProps→	
    mergeProps arrow function

    connect→	
    export default connect function

    component→	
    functional React component

    componentReturn→	
    functional React component with implicit return


```

# react redux es6 snippets, better code style!

# snippets strict

https://github.com/timothymclane/vscode-react-redux-snippets/blob/master/src/server/snippets/strict/index.ts

https://github.com/timothymclane/vscode-react-redux-snippets/blob/master/src/server/snippets/strict/functional-react.ts

https://github.com/timothymclane/vscode-react-redux-snippets/blob/master/src/server/snippets/strict/redux.ts

```jsx


const initialState = {};
const allReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state;
        case ACTION_TYPE_2:
            return state;
        default:
            return state;
    }
};


export {allReducer};
export default allReducer;

```


# Object.assign()

```js

this.state = {
    data: []
}

Object.assign(
    {},
    state,
    {
        data: newDatas
    }
);

```




```js

const state = {
    show: false
};
state.show;
// false

Object.assign(
    {},
    state,
    {
        show: !state.show
    }
);
state.show;
// false


let newState = Object.assign(
    {},
    state,
    {
        show: !state.show
    }
);
newState.show;
// true




```







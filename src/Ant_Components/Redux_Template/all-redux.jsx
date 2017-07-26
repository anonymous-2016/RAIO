/* Action Creators & actions */
const inc = () => {
    return {
        type: 'INCREMENT',
        payload: {
            data: `
                    data can be any type of js data-type (object, array, ...),
                    except functions & promise!
            `
        }
    };
};
const dec = () => {
    return {
        type: 'DECREMENT',
        payload: {
            data: `
                    js native immutable data type:
                    number, string, boolean, null, undefined!
            `
        }
    };
};
/* Reducers */
const initialState = { counter: 0 };
// 调用 reduce 时设置默认 state, ES6 default value
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign(
                {},
                state,
                {
                    counter: ++state.counter
                }
            );
        case 'DECREMENT':
            return Object.assign(
                {},
                state,
                {
                    counter: --state.counter
                }
            );
        default:
            return state; 
        // 如果没有指定 action 的 type ，则返回一个原来的 state
    }
};
/* createStore(reducer) */
const store = Redux.createStore(reducer);

/* store.getState() */
console.log(store.getState());
// { counter: 0 }

/* store.dispatch(action))  */
store.dispatch(inc());
console.log(store.getState());
// { counter: 1 }

store.dispatch(inc());
console.log(store.getState());
// { counter: 2 }

store.dispatch(dec());
console.log(store.getState());
// { counter: 1 }
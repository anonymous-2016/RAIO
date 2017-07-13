const initialState = {
    state1: "state1"
};



export default (state = initialState, action) => {
    switch (action.type) {
        case "type1":
            return (
                // Object.assign(target, ...sources)
                // Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。
                Object.assign(
                    {}, 
                    state, 
                    {
                        state1:  `new ${state.state1}`
                    }
                )
            );
        default:
            return state;
    }
};
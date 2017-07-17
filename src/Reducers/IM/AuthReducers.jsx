export default (state = {}, action) => {
    switch (action.type) {
        case 'Type_01':
            return Object.assign(
                {},
                state,
                {
                    data: {}
                }
            );
        default:
            return state;
    }
};
// immutable.js


const initailState = {
    data: {
        id: 'NO-001',
        name: 'user01'
    }
};

// default state value
const UserReducers = (state = initailState, action) => {
    switch (action.type) {
        case 'Edit':
            return Object.assign(
                {},
                state,
                {
                    data: {
                        id: 'newID',
                        name: 'newName'
                    }
                }
            );
        case 'Delete':
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

export default UserReducers;




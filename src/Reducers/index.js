// allReducer

/* 
    export default (state = , action) => {
        switch (action.type) {
            case :
                
            default:
                return state;
        }
    };

*/

import {OBJ_CONSTANT} from '../constants/index.jsx';

// actions ???

import {FEWF, FEWF_R1, FEWF_R2} from '../Actions/index.jsx';


const initialState = {};
const allReducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state;
        case ACTION_TYPE_2:
            return state;
        default:
            return state;
    }
};


export {allReducers};
export default allReducers;





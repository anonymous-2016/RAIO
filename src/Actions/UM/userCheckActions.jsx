import * as OBJ_CONSTANTS from '../../constants/actionTypes';



function userCheck(searchText) {
    return {
        type: OBJ_CONSTANTS.USER_CHECK,
        playload: {
            data: searchText
        }
    }
}




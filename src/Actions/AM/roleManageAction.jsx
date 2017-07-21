import * as OBJ_CONSTANTS from '../../constants/actionTypes';

function roleManageSearch(searchText) {
    return {
        type: OBJ_CONSTANTS.ROLE_CHECK,
        playload: {
            data: searchText
        }
    }
}


function roleManageAdd(addText) {
    return {
        type: OBJ_CONSTANTS.ROLE_ADD,
        playload: {
            data: addText
        }
    }
}
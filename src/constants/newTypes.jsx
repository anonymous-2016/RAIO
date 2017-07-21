// actions type constant


// UM 用户管理
// 用户查询
export const USER_CHECK = `USER_CHECK`;


// AM 权限管理
// 角色管理
export const ROLE_CHECK = 'ROLE_CHECK';
export const ROLE_ADD = 'ROLE_ADD';


// IM 信息管理
// 产品管理
export const PRODUCT_CHECK = 'PRODUCT_CHECK';
export const PRODUCT_ADD = 'PRODUCT_ADD';

export const PRODUCT_DEFINE = 'PRODUCT_DEFINE';
export const PRODUCT_ASSOCIATE = 'PRODUCT_ASSOCIATE';

// 模块管理
export const MODULE_CHECK = 'MODULE_CHECK';
export const MODULE_ADD = 'MODULE_ADD';

export const MODULE_DEFINE = 'MODULE_DEFINE';
export const MODULE_LIBS_DEFINE = 'MODULE_LIBS_DEFINE';

// 类库管理
export const LIBS_CHECK = 'LIBS_CHECK';
export const LIBS_ADD = 'LIBS_ADD';

export const LIBS_DEFINE = 'LIBS_DEFINE';

// 功能管理
export const FEATURES_CHECK = 'FEATURES_CHECK';
export const FEATURES_ADD = 'FEATURES_ADD';

export const FEATURES_DEFINE = 'FEATURES_DEFINE';
export const FEATURES_MODULE_DEFINE = 'FEATURES_MODULE_DEFINE';

// 资源管理
export const RESOURCES_CHECK = 'RESOURCES_CHECK';
export const RESOURCES_ADD = 'RESOURCES_ADD';

export const RESOURCES_DEFINE = 'RESOURCES_DEFINE';
export const RESOURCES_CLASSFICATION = 'RESOURCES_CLASSFICATION';

// 菜单管理
export const MENU_CHECK = 'MENU_CHECK';
export const MENU_ADD = 'MENU_ADD';

export const MENU_MODEFY = 'MENU_MODEFY';
export const MENU_ASSOCIATE = 'MENU_ASSOCIATE';



const OBJ_CONSTANTS = Object.assign(
    {}, 
    {
        USER_CHECK,
        
        ROLE_CHECK,
        ROLE_CHECK,

        PRODUCT_ADD,
        PRODUCT_ASSOCIATE,
        PRODUCT_CHECK,
        PRODUCT_DEFINE,

        MODULE_ADD,
        MODULE_CHECK,
        MODULE_DEFINE,
        MODULE_LIBS_DEFINE,

        LIBS_ADD,
        LIBS_CHECK,
        LIBS_DEFINE,

        FEATURES_ADD,
        FEATURES_CHECK,
        FEATURES_DEFINE,
        FEATURES_MODULE_DEFINE,

        RESOURCES_ADD,
        RESOURCES_CHECK,
        RESOURCES_DEFINE,
        RESOURCES_CLASSFICATION,

        MENU_CHECK,
        MENU_ADD,
        MENU_MODEFY,
        MENU_ASSOCIATE
    }
);

export default OBJ_CONSTANTS;


// no export const, no IDE Intelligence



/* 

https://github.com/Microsoft/vscode/issues/14030#issuecomment-316963299

## VScode 

> `Ctrl + F & Alt + Enter`

=== 

## SublimeText 

> `Alt + F3`


*/
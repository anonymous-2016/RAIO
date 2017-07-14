import React, {Component, PropTypes} from 'react';

import {MMF} from './Form';

class MenuManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 
        };
    }
    render () {
        return (
            <div>
                <MMF />
            </div>
        );
    }
}
MenuManage.propTypes = {
    // 
};

const MM = MenuManage;

export {MM};
export default MM;

// rcfc



/* 

产品名称：金融终端/Fans
菜单版本:
类型:	
菜单名称：
显示状态:	是/否
样式:
查询	添加

                                            
    菜单树	名称	产品	功能	版本	类型	操作	移动		
                    关联			修改	上移 下移		
一级										
|  二级										
|   | 三级										
|   |  | 四级										
|   |  |  |	五级									
|   |  |  |										
|   |  |  |										
|   |  |  |										
|   |  | 四级										
|   | 三级										
|  二级										
一级										
|  二级										



*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {MMF} from './Form';
import {WMF} from './MModal';
import {FM} from './FModal';

import {RMT} from './ReactTreeMenu';

import {MenuTree} from './Menu';


class MenuManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 
        };
    }
    onClick = (e) => {
        // 阻止事件的默认行为，防止事件冒泡！
        e.preventDefault();
        e.stopPropagation();
        // alert(`e`, e.key);
        console.log('e.key', e.key);
        console.log('e.text', e.text);
    };
    render () {
        const datas = [
            {
                text: 'root',
                children: [
                    {
                        text: 'chlid1',
                        children: [
                            {
                                text: 'chlid3'
                            }
                        ]
                    }
                ]
            }
        ];
        return (
            <div>
                <MMF />
                <WMF />
                <FM />
                {/* <MenuTree/> */}
                {/* <RMT data={datas} onClick={this.onClick}/> */}
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
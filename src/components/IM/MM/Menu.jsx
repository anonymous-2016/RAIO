import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Menu, Dropdown, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

/* 

router ???

links


*/

class MenuTree extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // 
        };
    }
    clickHandler = (e) => {
        console.log(e);
        // alert('clicked e.key', e.key);
    }
    render () {
        return (
            <div style={{border: '1px solid #000', width: '800px', boxSizing: 'border-box'}}>
                <span>
                    多级菜单
                </span>
                <div style={{border: '1px solid red', width: '252px', boxSizing: 'border-box'}}>
                    <Menu
                        style={{width: '250px'}}
                        onClick={(e) => this.clickHandler(e)}
                        >
                        <MenuItem
                            key="key01">
                            1st menu item
                        </MenuItem>
                        <MenuItem
                            key="key02">
                            2nd menu item
                        </MenuItem>
                        <SubMenu title="sub menu">
                            <MenuItem
                                key="key03">
                                3d menu item
                            </MenuItem>
                            <MenuItem
                                key="key04">
                                4th menu item
                            </MenuItem>
                        </SubMenu>
                        <SubMenu title="sub menu">
                            <MenuItem key="key05">
                                5d menu item
                            </MenuItem>
                            <MenuItem key="key06">
                                6th menu item
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
                <div style={{border: '1px solid #000', clear: 'left', float: 'left', width: '400px', }}>
                    this is content!
                </div>
            </div>
        );
    }
}

MenuTree.propTypes = {
    /*  */
};

export {MenuTree};
export default MenuTree;
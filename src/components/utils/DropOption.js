import React from 'react';
import PropTypes from 'prop-types';

import {Dropdown, Button, Icon, Menu} from 'antd';

const DropOption = ({onMenuClick, menuOptions = [], buttonStyle, dropdownProps}) => {
    // 列出 menu 所有的 items
    const menuItems = menuOptions.map(
        (item) => {
            // console.log(`item `, item);
            // console.log(`item.key `, item.key);
            // console.log(`typeof item.key `, typeof(item.key));
            // if(item.key === "2" || item.name === "删除")
            if(item.name === "删除"){
                return(
                    <Menu.Item key={item.key} style={{color: "red", border: '1px solid red', borderRadius: '5px', textAlign: 'center'}}>
                        {item.name}
                    </Menu.Item>
                )
            }else{
                return(
                    <Menu.Item key={item.key} style={{color: "#000", border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center'}}>
                        {item.name}
                    </Menu.Item>
                )
            }
        }
    );
    return (
        <Dropdown
            overlay={
                <Menu onClick={onMenuClick}>
                    {menuItems}
                </Menu>
            }
            trigger={['click']}
            {...dropdownProps}
            >
            <Button
                style={
                    {
                        border: 'none', 
                        background: '#ccc',
                        ...buttonStyle
                    }
                }
                >
                <Icon 
                    style={{marginRight: 5}} 
                    type="bars"
                />
                <Icon type="down" />
            </Button>
        </Dropdown>
    );
};

DropOption.propTypes = {
    onMenuClick: PropTypes.func,
    menuOptions: PropTypes.array.isRequired,
    buttonStyle: PropTypes.object,
    dropdownProps: PropTypes.object
};

export {DropOption};
export default DropOption;

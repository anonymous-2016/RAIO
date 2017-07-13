import React, {Component} from 'react';

import ReactDOM from 'react-dom';



import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">1st</a>
        </Menu.Item>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">2nd</a>
        </Menu.Item>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">3rd</a>
        </Menu.Item>
    </Menu>
);


const APP = () => {
    return(
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
                Hover me
                <Icon type="down" />
            </a>
        </Dropdown>
    );
}

export default APP;
import React, {Component} from 'react';

import {AppDatePicker} from '../Ant_Components/DatePicker';
import {SpinApp} from '../Ant_Components/Spin';
import {ModalApp} from '../Ant_Components/Modal';
import {ProgressApp} from '../Ant_Components/Progress';

import {RoleManagement} from './AM/RoleManagement';





class Item2 extends Component {
    render() {
        return (
            <div>
                {/*<h1>登陆统计</h1>*/}
                {/*<h1>角色管理</h1>*/}
                {/*<AppDatePicker />
                <SpinApp />
                <ModalApp />
                <ProgressApp />*/}
                <a href="#角色管理">角色管理</a>
                <div className="user-search">
                    <RoleManagement />
                </div>
            </div>
        );
    }
}

export {Item2};
export default Item2;
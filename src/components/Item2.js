import React, {Component} from 'react';

/* import {AppDatePicker} from '../Ant_Components/DatePicker';
import {SpinApp} from '../Ant_Components/Spin';
import {ModalApp} from '../Ant_Components/Modal';
import {ProgressApp} from '../Ant_Components/Progress'; */

import {RoleManagement} from './AM/RoleManagement';

// amrm



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


/* 

https://www.google.com/search?q=react+%E4%B8%8A%E7%A7%BB+%E4%B8%8B%E7%A7%BB+table&oq=react+%E4%B8%8A%E7%A7%BB+%E4%B8%8B%E7%A7%BB++table&aqs=chrome..69i57.8351j0j4&sourceid=chrome&ie=UTF-8

http://www.w3school.com.cn/html5/att_input_type.asp

*/
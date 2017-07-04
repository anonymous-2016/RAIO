import React, {Component} from 'react';

import {AppDatePicker} from '../Ant_Components/DatePicker';
import {SpinApp} from '../Ant_Components/Spin';
import {ModalApp} from '../Ant_Components/Modal';
import {ProgressApp} from '../Ant_Components/Progress';


class Item2 extends Component {
    render() {
        return (
            <div>
                <h1>登陆统计</h1>
                <AppDatePicker />
                <SpinApp />
                <ModalApp />
                <ProgressApp />
            </div>
        );
    }
}

export {Item2};
export default Item2;
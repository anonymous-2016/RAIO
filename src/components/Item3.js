import React, {Component} from 'react';


import {LayoutFixedSider} from '../Ant_Components/LayoutFixedSider';

import {SiderTrigger} from '../Ant_Components/Trigger';

import {ModalApp} from '../Ant_Components/Modal';

import {RadioApp} from '../Ant_Components/Radio';

import {ProductManagement} from './ProductManagement';


class Item3 extends Component {
    render() {
        return (
            <div>
                <h1>行为分析</h1>
                <hr/>
                {/*<LayoutFixedSider />*/}
                <div>
                    {/*<SiderTrigger />*/}
                </div>
                <ModalApp />
                <RadioApp />
                <ProductManagement />
            </div>
        );
    }
}

export default Item3;
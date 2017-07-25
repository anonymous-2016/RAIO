import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {MMF} from './Form';

// import {FM} from './FModal';

// import {RMT} from './ReactTreeMenu'; 

// import {MenuTree} from './Menu';

import {MainTable} from './MainTable';


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

class MenuManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
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
        return (
            <div>
                <MMF /> 
                {/* <WMF /> */}
                {/* <FM />  */}
                <MainTable />
                {/* <MenuTree/>  */}
                {/* <RMT data={datas} onClick={this.onClick}/>  */}
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

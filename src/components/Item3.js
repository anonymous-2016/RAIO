import React, {Component} from 'react';


import {LayoutFixedSider} from '../Ant_Components/LayoutFixedSider';

import {SiderTrigger} from '../Ant_Components/Trigger';

import {ModalApp} from '../Ant_Components/Modal';

import {RadioApp} from '../Ant_Components/Radio';


import {ModalForm} from '../Ant_Components/ModalForm';

import {M} from '../Ant_Components/M';

import {ProductManagement} from './ProductManagement';

import AU from './AddUser.jsx';

import {NMF} from './utils/ModalF';

import {MFL} from './utils/ModalFormList';

class Item3 extends Component {
    constructor(props){
        super(props);
        this.state  = {
            showSate: true
        };
    }
    setModalVisible = (value) => {
        this.setState({
            showSate: value
        });
    };
    OK = (value) => {
        this.setState({
            showSate: value
        });
        // () => this.setModalVisible(false)
        // alert(`OK!`);
    };
    onMakeSure = (e) => {
        // alert(e);
        console.log(`e = \n`, e);
    };
    CH = () => {
        this.setState({
            showSate: false
        });
    }
    render() {
        const showSate = this.state.showSate;
        return (
            <div>
                <h1>行为分析</h1>
                <div>
                    <AU />
                </div>
                <button onClick={this.setModalVisible}>
                   showModal
                </button>
                <div>
                    <ModalForm 
                        onMakeSure={this.onMakeSure} 
                        showSate={this.state.showSate} 
                        onOk={this.OK} 
                        setModalVisible={this.setModalVisible}
                        />
                    {
                        showSate ? <MFL /> : ''
                    }
                    {/*<M onMakeSure={this.onMakeSure}/>*/}
                </div>
                <hr/>
                {/*<LayoutFixedSider />*/}
                <div>
                    {/*<SiderTrigger />*/}
                </div>
                <ModalApp
                    title="Vertically centered modal dialog"
                    wrapClassName="vertical-center-modal"
                    visible={true}
                    onOk={() => this.CH(false)}
                    onCancel={() => this.CH(false)}
                    >
                </ModalApp>
                <RadioApp />
                <ProductManagement />
            </div>
        );
    }
}

export default Item3;
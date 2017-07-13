import React, {Component} from 'react';


// import {LayoutFixedSider} from '../Ant_Components/LayoutFixedSider';

// import {SiderTrigger} from '../Ant_Components/Trigger';

// import {ModalApp} from '../Ant_Components/Modal';

// import {RadioApp} from '../Ant_Components/Radio';


// import {ModalForm} from '../Ant_Components/ModalForm';

import {M} from '../Ant_Components/M';

import {ProductManagement} from './IM/ProductManagement';

import AU from './AddUser.jsx';

// import {NMF} from './utils/ModalF';

// import {MFL} from './utils/ModalFormList';

class Item3 extends Component {
    constructor(props){
        super(props);
        this.state  = {
            showSateParent: false
        };
    }
    setModalVisibleParent = (value) => {
        console.log(`showSateParent`, this.state.showSateParent);
        this.setState({
            showSateParent: value
        });
        // 状态更新可能是异步的
        setTimeout(() => {
            console.log(`showSateParent`, this.state.showSateParent);		
        });
    };
/*     OK = (value) => {
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
    } */
    render() {
        // const showSate = this.state.showSate;
        return (
            <div>
                <h1>行为分析</h1>
                 <div>
                    <AU />
                </div> 
                <div>
                    <M onClick={this.setModalVisibleParent} showSate={this.state.showSateParent}/>
                </div>
                {/* 
                不可以在父组件上直接调用父组件自身的方法来修改 state，
                只可以方法通过 prop 传递给子组件，在子组件上调用修改 state 的方法
                https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly
                 */}
                <button onClick={() => console.log(`smg`)}>
                   showModalParent
                </button>
                {/* <button onClick={this.setModalVisibleParent(true)}>
                   showModalParent
                </button> */} 
                {/* 在父组件上直接调用父组件自身的方法来修改 state，调用的方式不对！() => { return ???;} */}
                <button onClick={() => this.setModalVisibleParent(true)}>
                   showModalParent
                </button> 
                <div>
                    {/* <ModalForm 
                        onMakeSure={this.onMakeSure} 
                        showSate={this.state.showSate} 
                        onOk={this.OK} 
                        setModalVisible={this.setModalVisible}
                        />
                    {
                        showSate ? <MFL /> : ''
                    } */}
                    {/*<M onMakeSure={this.onMakeSure}/>*/}
                </div>
                <hr/>
                {/*<LayoutFixedSider />*/}
                <div>
                    {/*<SiderTrigger />*/}
                </div>
                {/* <ModalApp
                    title="Vertically centered modal dialog"
                    wrapClassName="vertical-center-modal"
                    visible={this.setModalVisible}
                    onOk={() => this.CH(false)}
                    onCancel={() => this.CH(false)}
                    >
                </ModalApp>
                <RadioApp /> */}
                <ProductManagement /> 
            </div>
        );
    }
}

export default Item3;
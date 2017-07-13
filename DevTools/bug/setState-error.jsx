import React, {Component} from 'react';


class Item3 extends Component {
    constructor(props){
        super(props);
        this.state  = {
            showSateParent: false
        };
    }
    setModalVisibleParent = (value) => {
        this.setState({
            showSateParent: value
        });
    };
    render() {
        // const showSate = this.state.showSate;
        return (
            <div>
                <h1>行为分析</h1>
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
                </button>   */}
                <button onClick={() => this.setModalVisibleParent(true)}>
                   showModalParent
                </button> 
            </div>
        );
    }
}

export default Item3;
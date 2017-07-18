import React, {Component} from 'react';

class RMT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data || []
        };
    }
    // 递归调用
    markNode = (data) => {
        let nodes;
        if (Object.prototype.toString.call(data) == "[object Array]") {
            nodes = data.map(
                (item) => {
                    let node = (
                        <li
                            key={this.count++}
                            style={{color: 'red'}}
                            onClick={(e) => this.props.onClick(e)}
                            title={item.text}
                            >
                            {item.text}
                        </li>
                    );
                    if (item.children && item.children.length) {
                        node = (
                            <li
                                key={this.count++}
                                style={{color: 'green', marginLeft: '10px'}}
                                onClick={(e) => this.props.onClick(e)}
                                title={item.text}
                                >
                                {item.text}
                                {this.markNode(item.children)}
                            </li>
                        );
                    }
                    return node;
                }
            );
        }
        return (
            <ul style={{border: '1px solid red'}} onClick={this.props.onClick}>
                {nodes}
            </ul>
        );
    };
    render() {
        this.count = 0;
        return(
            this.markNode(this.state.data)
        );
    }
}

export {RMT};
export default RMT;
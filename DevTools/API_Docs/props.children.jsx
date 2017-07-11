import React, {Component} from 'react';

import ReactDOM from 'react-dom';


class MessageList extends React.Component {
    render() {
        const color = this.props.color;
        const children = this.props.messages.map(
            (message) => {
                return(
                    <Message text={message.text} color={color} />
                );
            }
        );
        return(
            <div>
                {children}
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text}
                <Button color={this.props.color}>Delete</Button>
            </div>
        );
    }
}


class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.props.color}}>
                {this.props.children}
            </button>
        );
    }
}




const text = [
    {text: '1'},
    {text: '2'},
    {text: '3'},
    {text: '4'},
    {text: '5'}
];
const color = "green";


export {MessageList};

export default MessageList;

/*
ReactDOM.render(
    <div>
       <MessageList messages={text} color={color} />
    </div>,
    mountNode
);
*/



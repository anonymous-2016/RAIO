import React, {Component} from 'react';

const FancyBorder = (props) => {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    ); 
}


const Dialog = (props) => {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {
            login: ''
        };
    }
    handleChange(e) {
        this.setState({
            login: e.target.value
        });
    }
    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render(props) {
        const record = this.props.data;
        console.log(`this.props.data`, this.props.data);
        return (
            <div>
                <Dialog 
                    title="Mars Exploration Program"
                    message="How should we refer to you?"
                    >
                    <input 
                        value={this.state.login}
                        onChange={this.handleChange}
                    />
                    <button
                        onClick={this.handleSignUp}
                        >
                        Sign Me Up!
                    </button>
                </Dialog>
            </div>
        );
    }
}


export {SignUpDialog};
export default SignUpDialog;
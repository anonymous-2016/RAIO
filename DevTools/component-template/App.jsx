import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import PropTypes from 'prop-types';



class ComponentName extends Component {
    constructor(props){
        super();
        this.state = {
            count: props.initialCoun,
            message: `Hello, `
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        // fetch data
        let nct = ((username=`xgqfrms-GitHub`, repo=`Node-CLI-Tools`) => {
            fetch(`https://api.github.com/repos/${username}/${repo}/commits`,{
                data: {
                    client_id: '08ecc2f68d922f18800e',
                    client_secret: '5846d428b5340812b76c9637eceaee979340b922'
                }
            })
            .then((response) => response.json())
            .then((json)=> {
                return repos = json;
            })
            .then((repos)=>{
                console.log(repos);
            });
        })();
    }
    clickHandler(){
        this.setState({
            count: this.state.count + 1,
            message: `Wrold !`
        }); 
    }
    handleClick = () => {
        console.log(this.state.message);
    }
    addClick = (prevState, props) => {
        this.setState({
            // prevState, props
        });
    }
    render () {
        const children = this.props.children;
        return (
            <div>
                {/**/}
                <h1>Hello, {this.props.name}</h1>
                <section>
                    <div>
                        <p>
                            <h3>{this.state.message}</h3>
                            <span>{this.state.count}</span>
                        </p>
                        <button>Add</button>
                    </div>
                </section>
                <div>
                    children {children}
                </div>
            </div>
        )
    }
}

export {ComponentName};
export default ComponentName;

ComponentName.defaultProps = {
    name: `xgqfrms`,
    age: 23
};

ComponentName.propTypes = {
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    object: PropTypes.object,
    func: PropTypes.func,
    optionalNode: PropTypes.node,
    optionalElement: PropTypes.element,
    children: PropTypes.element.isRequired
};



let data = (()=>{
    // fetch
    return data = json;
})();


ReactDOM.render(
    <div>
       <Comment {...props}/>
    </div>,
    mountNode
);



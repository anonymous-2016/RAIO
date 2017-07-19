// props is an object!


// message.text => array of objects
class MessageList extends React.Component {
    getChildren = () => {
        //
    }
    render() {
        const children = this.props.messages.map(
            (message, index) => {
                //console.log(`message = `, message);
            		console.log(`index = `, index);
                //console.log(`typeof index = `, typeof index);
                let xindex = 'id_' + index; 
                console.log(`xindex = `, xindex);
                //console.log(`typeof xindex = `, typeof xindex);
                return(
                    <Message
                        key={index}
                        indexkey={index}
                        text={message.text}
                        color={message.color}
                        xyzClick={this.props.xyzClick}
                    />
                );
            }
        );
        const styles = {
        		css1: {
            		color: 'red'
            },
            css2: {
            		color: '#0f0'
            }
        }
      	return(
            <div>
                children = {children}
                <hr />
                <div>
                    BAD: <br />
                    {/* this.props = {this.props} */}
                    <div style={styles.css1}>
                        this.props.children = {this.props.color}
                    </div>
                    {/* this.props.arr = {this.props.arr} */}
                    {/* this.props.obj = {this.props.obj} */}
                    <br />
                    <p style={styles.css2}>
                        Object Error, need using map items to item
                    </p>
                </div>
            </div>
        );
    }
}

// text={message.text} => message object
class Message extends React.Component {
    render() {
    		//console.log(`this.props.text = `, this.props.text);
        //console.log(`this.props.key= `, this.props.key);
        let style = `
        		color: red;
            font-size: 23px;
        `;
        if(this.props.key === undefined){
        		//alert(`smg!`);
            console.log(`%c this.props.key= \n`, style, this.props.key);
        }
        return (
            <div>
                <hr />
                this.props.key = {this.props.key}
                <br />
                this.props.indexkey = {this.props.indexkey}
                <br />
                this.props.text = {this.props.text}
                <br />
                this.props.color = <span style={{backgroundColor: this.props.color}}>{this.props.color}</span>
                <br />
                <Button color={this.props.color} xyzClick={this.props.xyzClick}>
                    <span style={{color: '#fff'}}>Delete</span>
                </Button>
            </div>
        );
    }
}

// props.children === <span style={{color: '#fff'}}>Delete</span> ??? 
class Button extends React.Component {
    render() {
        return (
            <button
                style={{background: this.props.color}} 
                onClick={(e) => this.props.xyzClick(e)} 
                >
                {this.props.children}
            </button>
        );
    }
}




const text = [
    {
    text: "text 1",
    color: "red"
    },
    {
    text: "text 2",
    color: "blue"
    },
    {
    text: "text 3",
    color: "grey"
    },
    {
    text: "text 4",
    color: "green"
    },
    {
    text: "text 5",
    color: "#f0f"
    }
];
const color = "green";
const ArrayTest = [1, 2, 3];
const ObjectTest = {"key": "value"};

class App extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            showSate: false
        };
    }
    setModalVisible = (value) => {
        console.log(`showSate`, this.state.showSate);
        console.log(`value`, value);
        this.setState({
            showSate: value
        });
        // 状态更新可能是异步的
        setTimeout(() => {
        		console.log(`showSate`, this.state.showSate);
        });
    };
  	XC = (e) => {
      	let m = e.toString();
      	console.log(e, m);
      	return alert(`e.toString(); =\n`, m);
  	};
  render(){
      return(
          <div>
               <div>
                   <button onClick={() => console.log(`smg`)}>
                       onClick
                   </button>
                   <button onClick={()=>this.setModalVisible(true)}>
                       showModal{this.state.showSate}
                   </button>
               </div>
               <MessageList
                   messages={text}
                   color={color}
                   arr={ArrayTest}
                   obj={ObjectTest}
                   xyzClick={this.XC}/>
          </div>
      );
    }
};



export default App;

ReactDOM.render(
    <App />,
    mountNode
);


// https://jscomplete.com/repl
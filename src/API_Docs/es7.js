class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty;
    };
    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function () {
        return Bork.staticProperty;
    };
}

let myBork = new Bork;

// Property initializers are not on the prototype.
console.log(myBork.prototype.boundFunction); 
// > undefined

// Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); 
// > "bork"

// Static function exists on the class.
console.log(Bork.staticFunction()); 
// > "babelIsCool"




/*

// without options
{
    "plugins": ["transform-class-properties"]
}

// with options
{
    "plugins": [
        ["transform-class-properties", { "spec": true }]
    ]
}

*/



/*class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick. Warning: this is
    // *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    };
    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}*/



/*


.abc{
    color: red;
    margin-left: 300px;
    list-style: none url(https://cdn.xgqfrms.xyz/logo/icon.png);
}




const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((numbers) =>
    <li className="abc">{numbers}</li>
);

ReactDOM.render(
    <ul>
        {listItems}
    </ul>,
    document.getElementById('root')
);



const listItems = (numbers) => {
    return numbers.map((number) => <li className="abc">{number}</li>);
};




const NumberList = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);


> When you run this code, you'll be given a warning that a key should be provided for list items.


> The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
Most often you would use IDs from your data as keys:


const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);

> When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:


const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index}>
        {todo.text}
    </li>
);





let array = arr.map(function callback(currentValue, index, array) { 
    // Return element for new_array 
}[, thisArg])



const numbers = [1, 2, 3, 4, 5];

let arr = numbers.map((currentValue, index, array) => { 
    console.log(`currentValue = \n`, currentValue);
    console.log(`index = \n`, index);
    console.log(`array= \n`, array);
    return currentValue * 2;
}, numbers);

console.log(`arr \n`, arr);



const numbers = [1, 2, 3, 4, 5];

let arr = numbers.map((currentValue, index, array) => {
    console.log(`currentValue = \t`, currentValue);
    console.log(`index =  `, index);
    console.log(`array= `, array);
    return currentValue * 2;
}, numbers);

console.log(`\n arr = \t`, arr);


*/

// A good rule of thumb is that elements inside the map() call need keys.


const ListItem = (props) => {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
};

const NumberList = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem
            key={number.toString()}
            value={number} 
            />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
};

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);








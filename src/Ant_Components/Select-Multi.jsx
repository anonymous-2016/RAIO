import {Select} from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(
        <Option key={i.toString(36) + i}>
            {i.toString(36) + i}
        </Option>
    );
}

/* 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript


String.fromCharCode(65, 66, 67);

// "ABC"

String.fromCodePoint(65, 90);
// "AZ"



'ABC'.charCodeAt(0);
// 65

'ABC'.charCodeAt(1);
// 66

'ABC'.charCodeAt(2);
// 67


let childs = [];
for (let i = 10; i < 36; i++) {
    childs.push(
        i.toString(36)
    );
}

// 26

childs;

// (26) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


*/

function handleChange(value) {
    console.log(`selected ${value}`);
}

ReactDOM.render(
    <Select
        mode="multiple"
        style={{width: '100%'}}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        >
        {children}
    </Select>, 
    mountNode
);
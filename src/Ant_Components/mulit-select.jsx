import {Select, Spin} from 'antd';
import debounce from 'lodash.debounce';
/* 

https://lodash.com/docs/4.17.4

https://lodash.com/docs/4.17.4#debounce

https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L1786


tree-select

https://ant.design/components/tree-select-cn/#components-tree-select-demo-checkable

https://ant.design/components/select-cn/#components-select-demo-multiple

https://ant.design/components/auto-complete-cn/


*/
const Option = Select.Option;

class UserRemoteSelect extends React.Component {
    constructor(props) {
        super(props);
        this.lastFetchId = 0;
        this.fetchUser = debounce(this.fetchUser, 800);
    }
    state = {
        data: [],
        value: [],
        fetching: false
    }
    fetchUser = (value) => {
        console.log('fetching user', value);
        this.lastFetchId += 1;
        const fetchId = this.lastFetchId;
        this.setState({fetching: true});
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then((body) => {
                if (fetchId !== this.lastFetchId) { // for fetch callback order
                    return;
                }
                const data = body
                    .results
                    .map(user => ({text: `${user.name.first} ${user.name.last}`, value: user.login.username, fetching: false}));
                this.setState({data});
            });
    }
    handleChange = (value) => {
        this.setState({value, data: [], fetching: false});
    }
    render() {
        const {fetching, data, value} = this.state;
        return (
            <Select
                mode="multiple"
                labelInValue
                value={value}
                placeholder="Select users"
                notFoundContent={fetching
                ? <Spin size="small"/>
                : null}
                filterOption={false}
                onSearch={this.fetchUser}
                onChange={this.handleChange}
                style={{
                width: '100%'
            }}>
                {data.map(d => <Option key={d.value}>{d.text}</Option>)}
            </Select>
        );
    }
}

ReactDOM.render(
    <UserRemoteSelect/>, mountNode);
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// rccp


import jsonp from 'fetch-jsonp';
import querystring from 'querystring';


import { Select } from 'antd';
const Option = Select.Option;



/* 

    fetch(`https://suggest.taobao.com/sug?honor9`)
    .then((response) => response.json())
    .then((json)=> {
        return json;
    });





    fetch(`https://suggest.taobao.com/sug?honor9`)
    .then((response) => response.json())
    .then((json)=> {
        console.log(json);
    });

*/


let timeout;
let currentValue;

function fetch(value, callback) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    function fake() {
        const str = querystring.encode({code: 'utf-8', q: value});
        jsonp(`https://suggest.taobao.com/sug?${str}`)
            .then(response => response.json())
            .then((d) => {
                if (currentValue === value) {
                    const result = d.result;
                    const data = [];
                    result.forEach((r) => {
                        data.push({value: r[0], text: r[0]});
                    });
                    callback(data);
                }
            });
    }

    timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
    value: '',
  }
  handleChange = (value) => {
    this.setState({ value });
    fetch(value, data => this.setState({ data }));
  }
  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        mode="combobox"
        value={this.state.value}
        placeholder={this.props.placeholder}
        notFoundContent=""
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onChange={this.handleChange}
      >
        {options}
      </Select>
    );
  }
}

ReactDOM.render(
  <SearchInput placeholder="input search text" style={{ width: 200 }} />
, mountNode);
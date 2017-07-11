import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Form, Icon, Input, Button, Select} from 'antd';

const FormItem = Form.Item;

class AUF extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clearVisible: false
        }
    }
    render () {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                <FormItem
                    label={<span className="left-spaces">角色编码:</span>}
                    style={{}}
                    >
                    {
                        getFieldDecorator('roleCode', {
                            rules: [{ required: false, message: '角色编码' }],
                        })
                        (
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="number" placeholder="角色编码" />
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button
                        icon="search"
                        type="primary"
                        htmlType="submit"
                        id="add-user-search"
                        onClick={this.clickSearchHandler}
                        >
                        查询
                    </Button>
                </FormItem>
            </Form>
        )
    }
}


/*AU.propTypes = {
    size: PropTypes.string,
    select: PropTypes.bool,
    selectProps: PropTypes.object,
    onSearch: PropTypes.func,
    selectOptions: PropTypes.array,
    style: PropTypes.object,
    keyword: PropTypes.string
};*/

const AU = Form.create({})(AUF);


export default AU;


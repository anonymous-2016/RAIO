import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Table, Icon, Button} from 'antd';

import {FM} from './FModal';
import {WMF} from './MModal';

const dataSource = [
    {
        key: '1',
        name: '名称1',
        product: 'UPK',
        features: 'new',
        version: '1.1.1',
        type: 'A+',
        oprate: 'add'
    },
    {
        key: '2',
        name: '名称1',
        product: 'UPK',
        features: 'new',
        version: '2.1.1',
        type: 'B+',
        oprate: 'add'
    },
    {
        key: '3',
        name: '名称x',
        product: 'UTP',
        features: 'old',
        version: '1.0.1',
        type: 'C+',
        oprate: 'dec'
    },
    {
        key: '4',
        name: '名称1',
        product: 'UPK',
        features: 'new',
        version: '1.1.1',
        type: 'A+',
        oprate: 'add'
    },
    {
        key: '5',
        name: '名称1',
        product: 'UPK',
        features: 'new',
        version: '2.1.1',
        type: 'B+',
        oprate: 'add'
    },
    {
        key: '6',
        name: '名称x',
        product: 'UTP',
        features: 'old',
        version: '1.0.1',
        type: 'C+',
        oprate: 'dec'
    }
];


// 菜单树	

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '产品',
        dataIndex: 'product',
        key: 'product'
    },
    {
        title: '功能',
        dataIndex: 'features',
        key: 'features',
        render: (text, record) => {
            return(
                <FM data={record}/>
            );
        }
    },
    {
        title: '版本',
        dataIndex: 'version',
        key: 'version'
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: '操作',
        dataIndex: 'oprate',
        key: 'oprate',
        render: (text, record) => {
            console.log(`text`, text);
            console.log(`record`, record);
            return(
                <WMF data={record}> 
                    <span>修改</span>
                </WMF>
            );
        }
        
    },
    {
        title: '移动',
        dataIndex: 'move',
        key: 'move',
        render: (text, record) => (
            <span>
                <Icon type="up" />
                <a href="#">
                    上移
                </a>
                <span className="ant-divider" />
                <a href="#">
                    下移
                </a>
                <Icon type="down" />
                {/* <span className="ant-divider" />
                <Button type="primary">上移</Button>
                <span className="ant-divider" />
                <Button>下移</Button> */}
            </span>
        )
    }
];


class MainTable extends Component {
    render () {
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}

MainTable.propTypes = {
    //
};

export {MainTable};
export default MainTable;
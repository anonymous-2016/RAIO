import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './NewAppLayout.css';

import {FUFM} from '../Ant_Components/fold-unfold-menu';

import {OSAM} from './Layout/onlyShowActiveMenu';

import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;


class NAL extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false
        };
    }
    toggleShowHide = () => {
        this.setState(
            (prevState, props) => {
                return {
                    show: !prevState.show
                };
            /* 
                return Object.assign(
                    {},
                    state,
                    {
                        show: !prevState.show
                    }
                );
            */
            }
        );
    }

    render() {
        return (
            <div>
                <Layout>
                    <Sider>
                        {/*  */}
                    </Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>
                            <FUFM />
                            <OSAM />
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

NAL.propTypes = {

};

export {NAL}
export default NAL;



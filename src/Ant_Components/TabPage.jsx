import React, { Component } from 'react'


import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class ATab extends Component {
    callback = (key) => {
        console.log(`key`, key);
        console.log(` this.activeKey`,  this.activeKey);
        this.activeKey = key;
    };
    render () {
        console.log(this.props.items);
        const items = this.props.items;
        /* activeKey='tid_2' & bugs */
        /* type="card",  line, card, editable-card */
        return (
            <div>
                <Tabs
                    onChange={this.callback}
                    type="line"
                    >
                    {
                        items.map(
                            (item, index) => {
                                const color = item.color;
                                {/* 
                                    key={`tid_`+(index+1)} 
                                    key={index}
                                */}
                                return(
                                    <TabPane tab={item.title} key={`tid_`+(index+1)} style={{color}}>
                                        {item.content}
                                    </TabPane>
                                );
                            }
                        )
                    }
                </Tabs>
            </div>
        );
    }
}

export {ATab};
export default ATab;


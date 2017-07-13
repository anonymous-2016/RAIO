import React, {Component} from 'react';

import {Row, Col} from 'antd';

class GridRowCol extends Component {
    render () {
        const flexLayouts = {
            css1: {
                xs:2,
                sm:4,
                md:6,
                lg:8,
                xl:10
            }
        };
        return (
            <div>
                <Row>
                    <Col style={flexLayouts.css1}>
                        <div>
                            Bootstrap 响应式设计
                            {/* 参照 Bootstrap 的 响应式设计，预设五个响应尺寸：xs sm md lg xl */}
                        </div>
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                        <div>
                             Bootstrap 响应式设计
                             {/* 参照 Bootstrap 的 响应式设计，预设五个响应尺寸：xs sm md lg xl */}
                        </div>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <div>
                             Bootstrap 响应式设计
                             {/* 参照 Bootstrap 的 响应式设计，预设五个响应尺寸：xs sm md lg xl */}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GridRowCol;
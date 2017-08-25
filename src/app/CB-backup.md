

```jsx


<SubMenu 
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="area-chart" style={{fontSize: 18, color: '#0f0'}} className=""/>
                                            <span style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}} className="">用户管理</span>
                                        </span>
                                    }
                                >
                                <Menu.Item key="1">
                                    <Link to="/item1">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        用户查询
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/item1">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        登录统计
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/item1">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        行为分析
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu 
                                    key="sub2" 
                                    title={
                                        <span>
                                            <Icon type="setting" style={{fontSize: 18, color: '#fff'}}/>
                                            <span>权限管理</span>
                                        </span>
                                    }
                                >
                                <Menu.Item key="4">
                                    <Link to="/amrm">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        角色管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        绑定设置</Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        限制设置
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        用户权限设置
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        用户限制
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        角色权限设置
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu 
                                key="sub3" 
                                title={
                                    <span>
                                        <Icon type="idcard" style={{fontSize: 18, color: '#0f0'}}/>
                                        <span>信息管理</span>
                                    </span>
                                }
                                >
                                <Menu.Item key="10">
                                    <Link to="/impm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        产品管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="11">
                                    <Link to="/imnmm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        模块管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <Link to="/imlm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        类库管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="13">
                                    <Link to="/imfm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        功能管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="14">
                                    <Link to="/imnrm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        资源管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="15">
                                    <Link to="/immm">
                                    <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                    菜单管理</Link>
                                </Menu.Item>
                            </SubMenu>

```



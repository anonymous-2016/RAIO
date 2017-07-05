import React, {Component} from 'react';

class RoleTree extends Component {
    linkClickHandler = (e) => {
        alert(e.target.value);
    }
    render() {
        return (
            <div className="roles-tree">
                角色树 RoleTree
                <ul onClick={(e) => this.linkClickHandler(e)}>
                    <li>
                        <a href="#1">角色1</a>
                    </li>
                    <li>
                        <a href="#2">角色2</a>
                    </li>
                    <li>
                        <a href="#3">角色3</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export {RoleTree};
export default RoleTree;

/*

onClick show Modal

react event proxy

*/
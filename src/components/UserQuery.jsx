import React, {Component} from 'react';

class UserQuery extends Component {
    render() {
        return (
            <div>
                <h1>用户查询 UserQuery</h1>
            </div>
        );
    }
}

// reuse able ???

const UserTable = (props) => {
    return(
        <div>
            {/*<UTHeader />
            <UTBody />*/}
        </div>
    );
};


// ant design


export {UserQuery};
export default UserQuery;




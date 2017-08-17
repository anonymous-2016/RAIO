import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ES7_Await_Async extends Component {
    render() {
        const confirmOwner = (store, user) => {
            // confirmOwner()
        };
        const findeById = (id) => {
            // id
        };
        const Store = {
            findeById
        };
        const editStore = async (req="default value", res="") => {
            const {id} = req.params;
            const store = await Store.findeById(id);
            await confirmOwner(store, req.user);
            res.render(`editStore`, {store});
        };
        return (
            <div>
                {/*  */}
            </div>
        );
    }
}

ES7_Await_Async.propTypes = {

};

export default ES7_Await_Async;
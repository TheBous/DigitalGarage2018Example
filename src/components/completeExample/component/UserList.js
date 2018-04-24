import React from 'react';
import PropTypes from 'prop-types'
import {UserItem} from "./UserItem";

export const UserList = props => {
    const users = props.users.map(user => <UserItem key={user.id} user={user}/>);
    return (
        <div>
            <ol>
                {users}
            </ol>
        </div>
    )
};

UserList.propTypes = {
    users: PropTypes.array
};
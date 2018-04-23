import React from 'react';
import PropTypes from 'prop-types'

export const UserItem = props => {
    return (
        <li>
            {props.user.name}
        </li>
    )
};

UserItem.propTypes = {
  user: PropTypes.object
};
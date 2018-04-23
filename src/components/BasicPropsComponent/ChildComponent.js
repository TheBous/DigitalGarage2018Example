import PropTypes from 'prop-types'
import React from 'react';

export const ChildComponent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => props.fatherOnClick(`I'm Children`)}>Click here!</button>
        </div>
    )
};

ChildComponent.propTypes = {
    fatherOnClick: PropTypes.func,
    title: PropTypes.string
};

ChildComponent.defaultProps = {
    title: 'this is a default title'
};
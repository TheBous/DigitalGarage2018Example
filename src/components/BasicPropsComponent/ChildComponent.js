import PropTypes from 'prop-types'
import React from 'react';
import { Button } from 'react-materialize';


export const ChildComponent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Button onClick={() => props.fatherOnClick(`I'm Children`)}>Click here!</Button>
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
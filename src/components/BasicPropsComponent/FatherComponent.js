import React from 'react';
import {ChildComponent} from "./ChildComponent";

export const FatherComponent = () => {

    /**
     *
     * @param message String
     */
    const fatherClick = (message) => {
        alert(`this is an output: ${message}`);
    };

    return <ChildComponent title='This is a title props from father' fatherOnClick={fatherClick}/>
};
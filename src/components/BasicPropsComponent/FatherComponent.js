import React from 'react';
import {ChildComponent} from "./ChildComponent";

export const FatherComponent = () => {

    /**
     *
     * @param message String
     */
    const fatherClick = (message) => {
        alert(message);
    };

    return <ChildComponent title='This is a title props from father' fatherOnClick={fatherClick}/>
};
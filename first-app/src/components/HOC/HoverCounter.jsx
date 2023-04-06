import React from 'react';
import { useState } from 'react';
import WithCounter from './withCounter';
const HoverCounter = ({count,increament}) => {
    return ( 
        <>
        <h2>{count}</h2>
        <span onMouseEnter={increament}>Hover Me</span>
        </>
     );
}
 
export default WithCounter(HoverCounter,2);
import React from 'react';
import { useState } from 'react';
import WithCounter from './withCounter';
const ClickCounter = ({count,increament}) => {
    return ( 
        <>
        <h1>{count}</h1>
        <button onClick={increament}>Click Me!</button>
        </>
     );
}
 
export default WithCounter(ClickCounter,1)

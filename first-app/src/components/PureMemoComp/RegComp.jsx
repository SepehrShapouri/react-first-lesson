import React, { Component } from 'react';
const RegComp = (props) => {
    console.log("regular component rendered")
    return ( 
        <div>regular comp - {props.name}</div>
     );
}
 

 
export default RegComp;
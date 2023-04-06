import {memo}from 'react';
const MemoComp = (props) => {
    console.log("memo component rendered")
    return ( 
        <div>memo comp - {props.name}</div>
     );
}
 
export default memo(MemoComp);

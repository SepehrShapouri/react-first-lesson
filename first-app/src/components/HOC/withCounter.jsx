import { useState } from "react";

const WithCounter = (WrappedComponent,increamentValue) => {
    const UpdatedComponent = (props)=>{
        const [count,setCount] = useState(0)
        const increamentHandler = ()=>{
            setCount(count + increamentValue)
        }
        return ( 
            <WrappedComponent
            count={count}
            increament={increamentHandler}
            {...props}/>
         );
    }
    return UpdatedComponent
}
 
export default WithCounter;
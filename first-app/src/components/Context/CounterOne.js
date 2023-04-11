import { useContext } from "react";
import { useCount,useCountActions} from "./CounterProvider";
const CounterOne = () => {
    const count = useCount()
    const dispatch = useCountActions()
    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={()=>dispatch({type:"add",value:1})}>add One</button>
            <button onClick={()=>dispatch({type:"addFive",value:5})}>add Five</button>
            <button onClick={()=>dispatch({type:"minusOne",value:1})}>minus One</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
     );
}
 
export default CounterOne;
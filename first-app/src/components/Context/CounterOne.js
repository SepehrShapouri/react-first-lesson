import { useContext } from "react";
import { CounterContext,CounterContextDispatcher } from "./CounterProvider";
const CounterOne = () => {
const count = useContext(CounterContext)
const setCount = useContext(CounterContextDispatcher)
    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={()=> setCount(count + 1)}>add One</button>
        </div>
     );
}
 
export default CounterOne;
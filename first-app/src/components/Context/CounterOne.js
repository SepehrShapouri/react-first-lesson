import { useContext } from "react";
import { useCount,useCountActions} from "./CounterProvider";
const CounterOne = () => {
    const count = useCount()
    const {addOne,addFive,minusOne} = useCountActions()
    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={addOne}>add One</button>
            <button onClick={addFive}>add Five</button>
            <button onClick={minusOne}>minus One</button>
        </div>
     );
}
 
export default CounterOne;
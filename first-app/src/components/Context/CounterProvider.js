import React, { useState,useContext } from "react";
const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
    const setCount = useContext(CounterContextDispatcher)

    const addOne = ()=>{
        setCount((prevCount)=>prevCount + 1)
    }

    const addFive = ()=>{
        setCount((prevCount)=>prevCount +5)
    }
    
    const minusOne = ()=>{
        setCount((prevCount)=>prevCount - 1)
    }
    return {addFive,addOne,minusOne}
};

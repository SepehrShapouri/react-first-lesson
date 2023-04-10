import { useState, useReducer, useContext } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "minusOne":
      return state - 1;
    default:
      return state;
  }
};
const CounterReducer = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={()=>dispatch("addOne")}>add One</button>
      <button onClick={()=>dispatch("addFive")}>add Five</button>
      <button onClick={()=>dispatch("minusOne")}>minus One</button>
    </div>
  );
};

export default CounterReducer;

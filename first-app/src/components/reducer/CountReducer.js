import { useState, useReducer, useContext } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value};
      case "minus":
        return { ...state, firstCounter: state.firstCounter - action.value };
        case "add2":
          return { ...state, secondCounter: state.secondCounter + action.value };
          case "minus2":
            return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>first count is : {count.firstCounter}</h2>
      <h2>second count is : {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add",value:1 })}>+</button>
        <button onClick={() => dispatch({ type: "minus",value:1 })}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2",value:1 })}>+</button>
        <button onClick={() => dispatch({ type: "minus2",value:1})}>-</button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterReducer;

import React from "react";
import { useEffect, useState } from "react";
const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  const clickHandler = () => {
    setCount(count + 1);
  };
  useEffect(()=>{
    document.title = `clicked ${count} times`
  },[count])
  useEffect(()=>{
    console.log("name has been updated")
  },[name])
  return (
    <div>
      <input type="text" onBlur={(e) => changeHandler(e)}></input>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={(e) => clickHandler(e)}>click me</button>
    </div>
  );
};

export default FunctionalCounter;

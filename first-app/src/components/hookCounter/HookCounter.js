import React, { Component, useState } from "react";
import styles from "./hookcounter.module.css"
// const HookCounter = () => {
//   const [count, setCount] = useState(0);
//   const clickHandler = (e) => {
//     const value = e.target.dataset.count;
//     if (value == "add") {
//       setCount((prevCount) => prevCount + 1);
//     } else if (value == "minus") {
//       setCount((prevCount) => prevCount - 1);
//     }
//   };
//   return (
//     <>
//       <h2>count:-{count}</h2>
//       <button data-Count="add" onClick={clickHandler}>
//         add one
//       </button>
//       <button data-Count="minus" onClick={clickHandler}>
//         minus one
//       </button>
//     </>
//   );
// };


 const HookCounter = () => {
    const [count,setCount] = useState(0)
    const clickHandler = (e)=>{
const value = e.target.dataset.count
if(value == "add"){
    setCount(count + 1)
}else if(value == "minus"){
    setCount(count-1)
}
    }
    return (
        <div className={styles.counter}>
        <h2>count:-{count}</h2>
        <button className={styles.button} data-Count="add" onClick={clickHandler}>
          add one
        </button>
        <button className={styles.button}data-Count="minus" onClick={clickHandler}>
          minus one
        </button>
      </div> 
    );
 }
  
 export default HookCounter;

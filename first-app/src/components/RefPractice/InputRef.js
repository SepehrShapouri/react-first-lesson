import { useEffect, useRef, useState } from "react";
const InputUser = () => {
    const [user,setUser] = useState("")
    const [count,setCount] = useState(0)
    const inputRef = useRef()
    const numRef = useRef()
    const blurHandler = (e)=>{
        const value = e.target.value
        setUser(value)
        console.log(user)
    }
    const clickHandler = ()=>{
        const value = Math.ceil(Math.random() * 100)
        setCount(value)
    }
    useEffect(()=>{
        inputRef.current = user
    },[user])
    useEffect(()=>{
        numRef.current = count
    },[count])
    return ( 
        <>
        <input type="text" onChange={(e)=>blurHandler(e)} ref={inputRef}></input>
       <p>my name is {user} and  it used to be {inputRef.current}</p>
       <h1>number is {count} and it was {numRef.current}</h1>
       <button onClick={()=>clickHandler()}>generate</button>
        </>
     );
}
 
export default InputUser;
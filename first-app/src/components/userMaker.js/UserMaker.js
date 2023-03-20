import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import User from "./Users";
const UserMaker = () => {
    const [user,setUser] = useState({name:'',age:''})
    const [data,setData] =useState('')
const firstHandler = (e)=>{
const value = e.target.value
setUser({...user,name:value})
}
const ageHandler = (e)=>{
    const value = e.target.value
    setUser({...user,age:value})
    }
    const clickHandler = (data)=>{
        setData(data)
    }
    const userHandler = (data)=>{
        ReactDOM.render(<User/>,document.querySelector("#root"))
    }
    return ( 
        <div>
            <input type="text" onChange={firstHandler}></input>
            <input type="text" onChange={ageHandler}></input>
            <User name={user.name} age={user.age} click={()=>userHandler(1)}/>
            <button onClick={()=>clickHandler(6)}>click me</button>
            <h2>{data}</h2>
        </div>

     );
}
 
export default UserMaker;
import { useState } from "react";

const HookUser = () => {
    const [user,setUser] = useState({firstName:"",lastName:""})
    const blurHandler = (value)=>{
setUser({...user,firstName:value})
    }
    const changeHandler=(value)=>{
        setUser({...user,lastName:value})
    }
    return ( 
        <>
        <input type="text" value={user.firstName} onChange={(e)=>blurHandler(e.target.value)}></input>
        <input type="text" value={user.lastName} onChange={(e)=>changeHandler(e.target.value)}></input>
        <h2>{user.firstName}</h2>
        <h2>{user.lastName}</h2>
        </>
     );
}
 
export default HookUser;
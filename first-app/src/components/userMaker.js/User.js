import { useState, Component } from "react";

const User = () => {
    const [user,setUser] = useState({firstName:"",lastName:""})

    const firstNameHandler = (e)=>{
        setUser({...user,firstName:e.target.value})
    }
    const lastNameHandler = (e)=>{
        setUser({...user,lastName:e.target.value})
    }
    return (
        <>
        <input type="text" value={user.firstName} onChange={firstNameHandler}></input>
        <input type="text" value={user.lastName} onChange={lastNameHandler}></input>
        <h2>my first name is - {user.firstName}</h2>
        <h2>my last name is - {user.lastName}</h2>
        </>
     );
}


export default User;

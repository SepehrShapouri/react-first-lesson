const User = (props) => {
    return ( 
        <li onClick={props.click}>hello Im-{props.name} and Im-{props.age} </li>
     );
}
 
export default User;
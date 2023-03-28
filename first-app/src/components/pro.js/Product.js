import styles from "./pro.module.css"
const Product = ({name,price,onClick,id}) => {
    return ( 
        <li className={styles.pro} id={id}>
            <p>name:{name}</p>
            <p>price:{price}</p>
            <button className={styles.button} onClick={onClick}> buy</button>
        </li>
     );
}
 
export default Product;
import React from 'react';
import styles from './product.module.css'
import { BiTrash } from "react-icons/bi";
const Products = (props) => {
    return(
        <div className={styles.product}>
      <p>model : {props.model}</p>
      <p>price : {props.price}</p>
      <input type="text" className={styles.input} onChange={props.onBlur} value={props.model}></input>
      <span className={styles.value}>{props.quantity}</span>
      <button className={`${styles.button} ${props.quantity === 1 && styles.remove}`} onClick={props.decClick}>{props.quantity > 1 ? "-" : <BiTrash/>}</button>
      <button className={`${styles.button} ${styles.inc}`} onClick={props.incClick}>+</button>
      <button className={styles.button} onClick={props.click}>delete</button>
        </div>
    )
}
export default Products
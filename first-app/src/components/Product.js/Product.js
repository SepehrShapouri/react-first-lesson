import React from 'react';
import styles from './product.module.css'
import { BiTrash } from "react-icons/bi";
import { useEffect } from 'react';
const Products = ({model,price,onBlur,onDelete,onIncreament,onDecreament,quantity}) => {
    return(
        <div className={styles.product}>
      <p>model : {model}</p>
      <p>price : {price}</p>
      {/* <input type="text" className={styles.input} onChange={onBlur} value={model}></input> */}
      <span className={styles.value}>{quantity}</span>
      <button className={`${styles.button} ${quantity === 1 && styles.remove}`} onClick={onDecreament}>{quantity > 1 ? "-" : <BiTrash/>}</button>
      <button className={`${styles.button} ${styles.inc}`} onClick={onIncreament}>+</button>
      <button className={styles.button} onClick={onDelete}>delete</button>
        </div>
    )
}
export default Products
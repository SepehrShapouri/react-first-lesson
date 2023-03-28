import styles from "./shop.module.css";
import { useState } from "react";
import Product from "../pro.js/Product";
const Shop = () => {
  const [products, setProdcuts] = useState([
    { name: "guitar", price: 199 ,id:1},
    { name: "guitar", price: 199 ,id:2},
    { name: "guitar", price: 199 ,id:3},
    { name: "guitar", price: 199,id:4 },
    { name: "guitar", price: 199 ,id:5},
    { name: "guitar", price: 199 ,id:6},
  ]);
  const clickHandler = (id)=>{
    const product = [...products]
    const filteredProducts = product.find((p) => parseInt(p.id) == id)
    filteredProducts.name = "bitch"
    setProdcuts(product)
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>welcome</h2>
        <p>latest products</p>
      </header>
      <main className={styles.main}>
        {products.map(p=><Product key={p.id} name={p.name} price={p.price} onClick={()=>clickHandler(p.id)} id={p.id}/>)}
      </main>
    </div>
  );
};

export default Shop;

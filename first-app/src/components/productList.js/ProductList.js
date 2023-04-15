import React, { Component } from "react";
import Navbar from "../navbar.js/Navbar";
import Products from "../Product.js/Product";
import styles from "./productList.module.css";
import {
  useProduct,
  useProductActions,
} from "../ProductProviders/ProductProvider";

const ProductList = () => {
  const products = useProduct();
  const dispatch = useProductActions();
  const renderProducts = () => {
    return (
      <div className={styles.container}>
        {products.map((product) => {
          return (
            <Products
              model={product.title}
              price={product.price}
              key={product.id}
              quantity={product.quantity}
              onDelete={() => dispatch({type:"remove",id:product.id})}
              onIncreament={() => dispatch({type:"increament",id:product.id})}
              onDecreament={() => dispatch({type:"decreament",id:product.id})}
              onBlur={(e) => dispatch({type:"change",id:product.id,event:e})}
            />
          );
        })}
        <button className={styles.button} onClick={() => dispatch({type:"click"})}>
          change price
        </button>
      </div>
    );
  };
  return (
    <>
      {!products.length && <h2>cart is empty</h2>}
      {renderProducts()}
    </>
  );
};

export default ProductList;

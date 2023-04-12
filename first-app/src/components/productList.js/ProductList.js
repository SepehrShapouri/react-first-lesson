import React, { Component } from "react";
import Navbar from "../navbar.js/Navbar";
import Products from "../Product.js/Product";
import styles from "./productList.module.css";

const ProductList = ({
  products,
  onDelete,
  onBlur,
  onClick,
  onIncreament,
  onDecreament,
}) => {
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
              onDelete={() => onDelete(product.id)}
              onIncreament={() => onIncreament(product.id)}
              onDecreament={() => onDecreament(product.id)}
              onBlur={(e) => onBlur(e, product.id)}
            />
          );
        })}
        <button className={styles.button} onClick={() => onClick(99)}>
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

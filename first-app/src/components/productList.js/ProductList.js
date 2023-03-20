import React, { Component } from "react";
import Navbar from "../navbar.js/Navbar";
import Products from "../Product.js/Product";
import styles from "./productList.module.css";
class ProductList extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.products.map((product) => {
          return (
            <Products
              model={product.title}
              price={product.price}
              key={product.id}
              quantity={product.quantity}
              onDelete={() => this.props.onDelete(product.id)}
              onIncreament={() => this.props.onIncreament(product.id)}
              onDecreament={() => this.props.onDecreament(product.id)}
              onBlur={(e) => this.props.onBlur(e, product.id)}
            />
          );
        })}
        <button className={styles.button} onClick={() => this.props.onClick(99)}>
          change price
        </button>
      </div>
    );
  }
}

export default ProductList;

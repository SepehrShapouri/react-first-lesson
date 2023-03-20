import React, { Component } from "react";
import Navbar from "../navbar.js/Navbar";
import Products from "../Product.js/Product";
import styles from "./productList.module.css";
class ProductList extends Component {
  state = {
    products: [
      { title: "nike", price: "2099", id: 1, quantity: 1 },
      { title: "adidas", price: "2399", id: 2, quantity: 2 },
      { title: "puma", price: "2299", id: 3, quantity: 3 },
      { title: "vans", price: "2199", id: 4, quantity: 4 },
    ],
  };
  onClick = (price = 199) => {
    this.setState({
      products: [
        { title: "nike", price: price, id: 1,quantity:1 },
        { title: "adidas", price: "399", id: 2,quantity:1 },
        { title: "puma", price: "299", id: 3,quantity:1 },
        { title: "vans", price: "199", id: 4,quantity:1 },
      ],
    });
  };
  onDelete = (id) => {
    const filteredProducts = this.state.products.filter((p) => {
      return p.id != id;
    });
    this.setState({ products: filteredProducts });
  };
  onIncreament = (id) => {
    const products = [...this.state.products];
    const activeProduct = products.find((p) => p.id == id);
    activeProduct.quantity++;
    this.setState({ products });
  };
  onDecreament = (id) => {
    const products = [...this.state.products];
    const activeProduct = products.find((p) => p.id == id);
    activeProduct.quantity--;
    if(activeProduct.quantity < 1){
      const filteredProducts = products.filter(p=>p.id!=activeProduct.id)
    this.setState({products : filteredProducts})
    }else{
    this.setState({ products });
    }
  };
  onBlur = (e, id) => {
    const value = e.target.value;
    const products = [...this.state.products];
    const activeProduct = products.find((p) => p.id == id);
    activeProduct.title = value
    this.setState({products})
  };
  render() {
    return (
      <div className={styles.container}>
        <Navbar value={this.state.products.length}/>
        {this.state.products.map((product) => {
          return (
            <Products
              model={product.title}
              price={product.price}
              key={product.id}
              quantity={product.quantity}
              click={() => this.onDelete(product.id)}
              incClick={() => this.onIncreament(product.id)}
              decClick={() => this.onDecreament(product.id)}
              onBlur={(e) => this.onBlur(e, product.id)}
            />
          );
        })}
        <button className={styles.button} onClick={() => this.onClick(99)}>
          change price
        </button>
      </div>
    );
  }
}

export default ProductList;

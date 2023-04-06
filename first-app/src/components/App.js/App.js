import React, { Component, useState } from "react";
import ClassTimer from "../ClassTimer/ClassTimer";
import Functiontimer from "../FunctionTimer/Functiontimer";
import ClickCounter from "../HOC/ClickCounter";
import Navbar from "../navbar.js/Navbar";
import ProductList from "../productList.js/ProductList";
import HoverCounter from "../HOC/HoverCounter";
import styles from "./app.module.css";
import ParentComponent from "../PureMemoComp/ParentComp";
import ClassRef from "../Ref/CreateRef";
import FunctionalRef from "../Ref/UseRef";
class App extends Component {
  state = {
    products: [
      { title: "nike", price: "2099", id: 1, quantity: 1 },
      { title: "adidas", price: "2399", id: 2, quantity: 2 },
      { title: "puma", price: "2299", id: 3, quantity: 3 },
      { title: "vans", price: "2199", id: 4, quantity: 4 },
    ],
    isShow:true
  };
  onClick = (price = 199) => {
    this.setState({
      products: [
        { title: "nike", price: price, id: 1, quantity: 1 },
        { title: "adidas", price: "399", id: 2, quantity: 1 },
        { title: "puma", price: "299", id: 3, quantity: 1 },
        { title: "vans", price: "199", id: 4, quantity: 1 },
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
    const index = this.state.products.findIndex((item)=> item.id == id)
    const product = {...this.state.products[index]}
    product.quantity++
    const products = [...this.state.products]
    products[index] = product
    this.setState({products})
  };
  onDecreament = (id) => {
    const index = this.state.products.findIndex((item)=>item.id == id)
    const product = {...this.state.products[index]}
    product.quantity--
    let products = [...this.state.products]
    if(product.quantity < 1){
      const filteredProducts = products.filter(p=>p.id != product.id)
      products = filteredProducts
    }else{
      products[index] = product
    }
    this.setState({products})

  };
  onBlur = (e, id) => {
    const value = e.target.value;
    const index = this.state.products.findIndex((item)=>item.id == id )
    const product = {...this.state.products[index]}
    product.title = value
    const products = [...this.state.products]
    products[index] = product
    this.setState({products})

  };
  render() {
    return (
      <FunctionalRef/>
      // <div className={styles.container}>
      //   <button onClick={()=>this.setState({isShow:!this.state.isShow})}>{this.state.isShow ? "click" : "hover"}</button>
      //   {this.state.isShow ? <HoverCounter/> : <ClickCounter/>}
      // </div>
      
      // <div className={styles.container}>
      //   <Navbar value={this.state.products.length} />
      //   <ProductList
      //     products={this.state.products}
      //     onClick={this.onClick}
      //     onDelete={this.onDelete}
      //     onIncreament={this.onIncreament}
      //     onDecreament={this.onDecreament}
      //     onBlur={this.onBlur}
      //   />
      // </div>
    );
  }
}

export default App;

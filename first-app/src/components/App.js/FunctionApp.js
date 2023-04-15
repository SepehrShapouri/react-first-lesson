import React, { useState } from "react";
import Navbar from "../navbar.js/Navbar";
import ProductList from "../productList.js/ProductList";
import styles from "./app.module.css";
import ProductProvider from "../ProductProviders/ProductProvider";
import Filter from "../filter/Filter";
const App = () => {
  return (
    <ProductProvider>
        <div className={styles.container}>
        <Navbar />
        <Filter/>
        <ProductList
        />
        </div>
    </ProductProvider>
  );
};

export default App;

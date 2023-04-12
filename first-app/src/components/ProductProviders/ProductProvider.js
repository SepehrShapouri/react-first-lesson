import React, { useState,useContext, useReducer } from "react";
const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();
const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([
    { title: "nike", price: "2099", id: 1, quantity: 1 },
    { title: "adidas", price: "2399", id: 2, quantity: 2 },
    { title: "puma", price: "2299", id: 3, quantity: 3 },
    { title: "vans", price: "2199", id: 4, quantity: 4 },
  ])
  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={setProduct}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export const useProduct = () => useContext(ProductContext);
export const useProductActions = () => {
 const setProducts = useContext(ProductContextDispatcher)
 const products = useContext(ProductContext)
 const onClick = () => {
    setProducts([
      { title: "nike", price: "99", id: 1, quantity: 1 },
      { title: "adidas", price: "99", id: 2, quantity: 2 },
      { title: "puma", price: "99", id: 3, quantity: 3 },
      { title: "vans", price: "99", id: 4, quantity: 4 },
    ]);
  };
  const onDelete = (id) => {
    const filteredProducts = products.filter(
      (p) => parseInt(p.id) != parseInt(id)
    );
    setProducts(filteredProducts);
  };
  const onIncreament = (id) => {
    const index = products.findIndex(
      (item) => parseInt(item.id) == parseInt(id)
    );
    const product = { ...products[index] };
    product.quantity++;
    const allProducts = [...products];
    allProducts[index] = product;
    setProducts(allProducts);
  };
  const onDecreament = (id) => {
    const index = products.findIndex(
      (item) => parseInt(item.id) == parseInt(id)
    );
    const product = { ...products[index] };
    product.quantity--;
    let allProducts = [...products];
    if (product.quantity < 1) {
      const filteredProducts = allProducts.filter(
        (p) => parseInt(p.id) != parseInt(id)
      );
      allProducts = filteredProducts;
    } else {
      allProducts[index] = product;
    }
    setProducts(allProducts);
  };
  const onBlur = (e, id) => {
    const value = e.target.value;
    const index = products.findIndex(
      (item) => parseInt(item.id) == parseInt(id)
    );
    const product = { ...products[index] };
    product.title = value;
    const allProducts = [...products];
    allProducts[index] = product;
    setProducts(allProducts);
  };
  return {onClick,onBlur,onDelete,onIncreament,onDecreament}
};

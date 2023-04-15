import React, { useState,useContext, useReducer } from "react";
const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();
const initialState = [
    { title: "nike", price: "2099", id: 1, quantity: 1 },
    { title: "adidas", price: "2399", id: 2, quantity: 2 },
    { title: "puma", price: "2299", id: 3, quantity: 3 },
    { title: "vans", price: "2199", id: 4, quantity: 4 },
  ]
  const reducer = (state,action)=>{
switch(action.type){
    case "increament" :{
        const index = state.findIndex((item)=>parseInt(item.id) == parseInt(action.id))
        const product = {...state[index]}
        product.quantity++
        const allProducts = [...state]
        allProducts[index] = product
        return allProducts
    }
    case "decreament":{
        const index = state.findIndex((item)=>parseInt(item.id) == parseInt(action.id))
        const product = {...state[index]}
        product.quantity--
        const allProducts = [...state]
        if(product.quantity < 1){
            const filteredProducts = allProducts.filter((p)=>parseInt(p.id) != parseInt(action.id))
            return filteredProducts
        }else{
            allProducts[index] = product
            return allProducts
        }
    }
    case "remove":{
        const filteredProducts = state.filter((p)=>parseInt(p.id) != parseInt(action.id))
        return filteredProducts
    }
    case "change":{
        const value = action.event.target.value
        const index = state.findIndex((item)=>parseInt(item.id) == parseInt(action.id))
        const product = {...state[index]}
        product.title = value
        const allProducts = [...state]
        allProducts[index] = product
        return allProducts
    }
    case "click":{
        const updatedState = [
            { title: "nike", price: "99", id: 1, quantity: 1 },
            { title: "adidas", price: "99", id: 2, quantity: 2 },
            { title: "puma", price: "99", id: 3, quantity: 3 },
            { title: "vans", price: "99", id: 4, quantity: 4 },
          ]
          return updatedState
    }
}
  }
const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(reducer,initialState)
  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export const useProduct = () => useContext(ProductContext);
export const useProductActions = () => {
return useContext(ProductContextDispatcher)
};

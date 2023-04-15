import React, { useState,useContext, useReducer } from "react";
import { productData } from "../../db/product";
const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();
const initialState = [
    { title: "nike", price: "99", id: 1, quantity: 1 },
    { title: "adidas", price: "99", id: 2, quantity: 2 },
    { title: "puma", price: "99", id: 3, quantity: 3 },
    { title: "vans", price: "99", id: 4, quantity: 4 },
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
            { title: "nike", price: "99", id: 1, quantity: 1,size:["L"] },
            { title: "adidas", price: "99", id: 2, quantity: 2,size:["L"]  },
            { title: "puma", price: "99", id: 3, quantity: 3 ,size:["L"] },
            { title: "vans", price: "99", id: 4, quantity: 4,size:["L"]  },
            { title: "nike", price: "99", id: 11, quantity: 1,size:["L"] },
            { title: "adidas", price: "99", id: 21, quantity: 2,size:["L"]  },
            { title: "puma", price: "99", id: 31, quantity: 3 ,size:["X"] },
            { title: "vans", price: "99", id: 41, quantity: 4,size:["X"]  },
            { title: "nike", price: "99", id: 12, quantity: 1,size:["X"] },
            { title: "adidas", price: "99", id: 22, quantity: 2,size:["X","L"]  },
            { title: "puma", price: "99", id: 32, quantity: 3 ,size:["X"] },
            { title: "vans", price: "99", id: 42, quantity: 4,size:["X"]  },
            { title: "adidas", price: "99", id: 23, quantity: 2,size:["XL"]  },
            { title: "puma", price: "99", id: 33, quantity: 3 ,size:["XL","X"] },
            { title: "vans", price: "99", id: 43, quantity: 4,size:["XL"]  },
            { title: "nike", price: "99", id: 14, quantity: 1,size:["XL"] },
            { title: "adidas", price: "99", id: 24, quantity: 2,size:["XL"]  },
            { title: "puma", price: "99", id: 34, quantity: 3 ,size:["XL"] },
            { title: "vans", price: "99", id: 44, quantity: 4,size:["XL"]  },
          ]
          return updatedState
    }
    case "filter":{
        const value = action.selectedOption.value
        if(value === ""){
            return productData
        }else{
            const updatedProducts = productData.filter( p => p.size.indexOf(value) >= 0 )
            return updatedProducts
        }
      
    }
}
  }
const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(reducer,productData)
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

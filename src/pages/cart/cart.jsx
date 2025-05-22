import React from "react"
import { PRODUCTS } from "../../data/Products"
import { Product } from "../shop/product"

export const Cart = () =>{
  return (
    <React.Fragment>
      <h1>Cart</h1>
      <div className="row">
        {PRODUCTS.map((product, index) => {
          return  <Product key={index} data={product}/>
        })}
      </div>
    </React.Fragment>
  )
}
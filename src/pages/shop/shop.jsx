import React from "react"
import {PRODUCTS} from "../../data/Products"
import { Product } from "./product"

export const Shop = () =>{
  return (
    <React.Fragment>
      <h1>Shop</h1>
      <div className="row">
        {PRODUCTS.map((product, index) => {
          return <Product key={index} data={product}/>
        })}

      </div>
    </React.Fragment>
  )
}
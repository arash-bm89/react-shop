import React from "react"
import { useContext } from "react"
import { PRODUCTS } from "../../data/Products"
import { Product } from "../shop/product"
import { CartContext } from "../../contexts/CartContext"

export const Cart = () =>{
  const {getProductCountInCart } = useContext(CartContext)
  return (
    <React.Fragment>
      <h1>Your cart items</h1>
      <div className="row">
        {PRODUCTS.map((product, index) => {
          const count = getProductCountInCart(product.id)
          if (count !== 0) return <Product data={product} />
        })}
      </div>
    </React.Fragment>
  )
}
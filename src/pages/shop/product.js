import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"


export const Product = ({data}) =>{
  const {handleAddToCart, handleRemoveFromCart, getProductCountInCart } = useContext(CartContext)
  const {productName, productImage, price, id} = data
  let productCount = getProductCountInCart(id)
  return (
    <div className="col-3">
      <img src={productImage} className="w-100"></img>
      <h5>{productName}</h5>
      <p>price: {price}$</p>
      <button onClick={()=> handleAddToCart(id)} className="btn btn-info btn-sm">+</button>
      {productCount !== 0 && <span className="mx-1">{productCount}</span>}
      {productCount !== 0 && <button onClick={()=> handleRemoveFromCart(id)} className="btn btn-info btn-sm">-</button>}
    </div>
  )
}
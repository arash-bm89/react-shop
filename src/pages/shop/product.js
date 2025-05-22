export const Product = ({data}) =>{
  const {productName, productImage, price, id} = data
  return (
    <div className="col-3">
      <img src={productImage} className="w-100"></img>
      <h5>{productName}</h5>
      <p>price: {price}$</p>
      <button className="btn btn-info btn-sm">+</button>
      <span className="mx-1">0</span>
      <button className="btn btn-info btn-sm">-</button>
    </div>
  )
}
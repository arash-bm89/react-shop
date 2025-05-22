import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null)

export const CartContextProvider =(props) =>{
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsed = JSON.parse(savedCart);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  
  const handleAddToCart = (id)=>{
    setCart(prevCart => {
      const product = prevCart.find(item => item.id === id);
      if (product) {
        return prevCart.map(item =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { id, count: 1 }];
    });
  }

  const handleRemoveFromCart = (id)=>{
    setCart(prevCart => {
      const item = prevCart.find(item => item.id === id);
      if (!item) return prevCart
      if (item.count ===  1) { 
        return prevCart.filter(item => item.id !== id)
      }
      return prevCart.map(item => item.id === id ? {...item, count: item.count - 1} : item)
    });
  }

  const getProductCountInCart = (id)=>{
    const item = cart.find(item => item.id === id)
    return item ? item.count : 0
  }

  const contextValue = {cart, handleAddToCart, handleRemoveFromCart, getProductCountInCart}

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}
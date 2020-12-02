import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
  const [cartProducts, updateCartProducts] = useState([]);

  const [cartQty, updateQty] = useState(0);

  const addProdToCart = (prod) => {
    let currentProducts = cartProducts;
    currentProducts.push(prod);
    updateCartProducts(currentProducts);
    updateQty(cartProducts.length);
  };

  return <CartContext.Provider value={{cartProducts,addProdToCart,cartQty}} >
    {children}
  </CartContext.Provider>
}
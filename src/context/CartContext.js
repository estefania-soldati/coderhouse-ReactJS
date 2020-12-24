import React, {useState, useEffect, useContext} from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

  const [cartProducts, updateCartProducts] = useState([]);

  const [cartQty, updateQty] = useState(0);

  const [order, updateOrder] = useState({});

  const addProdToCart = (prod) => {
    // add new product to cart
    let currentProducts = cartProducts;
    currentProducts.push(prod);
    updateCartProducts(currentProducts);

    // revisar por que no funciona bien usar la siguiente linea en lugar de las tres de arriba (en la primer accion devuelve un array vacio)
    // updateCartProducts([...cartProducts, prod]);
    
    // update cart qty based on items qty
    let itemsCount = 0;
    cartProducts.forEach(function(prod){
      itemsCount = itemsCount + prod.quantity;
    });
    updateQty(itemsCount);

// TODO: delete
console.log(currentProducts);

  };

  return <CartContext.Provider value={{cartProducts,addProdToCart,cartQty}} >
    {children}
  </CartContext.Provider>
}
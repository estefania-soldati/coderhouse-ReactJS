import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import { CartContext, CartProvider } from './context/CartContext';
import { FirebaseContext, FirebaseProvider } from './context/FirebaseContext';

import logo from './logo.svg';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import CartIcon from './components/CartIcon';
import ItemList from './components/ItemList';
import Home from './screens/home';
import Collection from './screens/collection';
import ProductDetail from './screens/product';
import Cart from './screens/cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){

  const addToCart = () => {
    // let addedItemsQty = this.parentNode().querySelector('input').val();
    alert('Item/s added to cart');
  };

  return(

    <BrowserRouter>
      <CartProvider>
        <FirebaseProvider>
          
          <Menu >
            <NavLink exact to={'/'} activeClassName="active">
              <MenuItem text="Home" />
            </NavLink>
            <NavLink to={'/collection/women'} activeClassName="active">
              <MenuItem text="Women" />
            </NavLink>
            <NavLink to={'/collection/men'} activeClassName="active">
              <MenuItem text="Men" />
            </NavLink>
            <NavLink to={'/contact'} activeClassName="active">
              <MenuItem text="Contact" />
            </NavLink>
            <NavLink to={'/cart'} activeClassName="active">
              <CartIcon />
            </NavLink>
          </Menu>
          
          <Switch>

            <Route exact path="/">
              <Home addToCartFunction={addToCart} />
            </Route>

            <Route path="/product/:param">
              {/**/}
              <ProductDetail/>
             
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route path="/collection/:param">
              <Collection/>
            </Route>
          
          </Switch>

        </FirebaseProvider>
      </CartProvider>
    </BrowserRouter>

  );

}

export default App;
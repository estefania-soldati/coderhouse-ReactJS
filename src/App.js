import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import logo from './logo.svg';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import CartIcon from './components/CartIcon';
import ItemList from './components/ItemList';
import Home from './screens/home';
import ProductDetail from './screens/product';
import Cart from './screens/cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){

  const [products, updateProducts] = useState();

  useEffect(() => {
    getProducts();
    return () => { console.log("updated"); };
  },[]);

  const addToCart = () => {
    // let addedItemsQty = this.parentNode().querySelector('input').val();
    alert('Item/s added to cart');
  };

  const getProducts = () => {
    const serverResponse = new Promise(resolve => {
      setTimeout(() => {
        const DBProducts=[
          {
            id: 1110,
            name:"T-Shirt",
            price:20,
            size:'XL',
            description:"Soft, breathable jersey Made with organic cotton Grown using less water and no pesticides It’s a win-win, improving the environment for both cotton farmers and wildlife ",
            "image":"https://images.asos-media.com/products/new-look-grunge-skull-boyfriend-t-shirt-in-acid-washed-black/22285339-1-black?$n_480w$&wid=476&fit=constrain"
          },
          {
            id: 1111,
            name:"Short",
            price:25,
            size:'40',
            description:"Lightweight woven fabric Uses Nike Dri-FIT technology Moves sweat away from the skin, then draws it out of the fabric to help speed up evaporation Keeping you cool and dry in the process",
            "image":"https://images.asos-media.com/products/nike-football-dry-academy-logo-shorts-in-navy/13347693-1-navy?$n_480w$&wid=476&fit=constrain"
          },
          {
            id: 1112,
            name:"Sneakers",
            price:60,
            size:'9',
            description:"Textile upper. A versatile, everyday fabric",
            "image":"https://images.asos-media.com/products/vans-old-skool-trainers-in-black-white/12234380-1-black?$n_480w$&wid=476&fit=constrain"
          },
          {
            id: 1113,
            name:"Hat",
            price:15,
            size:'M',
            description:"Soft knit. Combines with everything.",
            "image":"https://images.asos-media.com/products/hunter-original-logo-beanie-in-black-and-red/21380773-1-black?$n_480w$&wid=476&fit=constrain"
          },
          {
            id: 1114,
            name:"Jeans",
            price:50,
            size:'W33 L30',
            description:"Stretch denim Jack & Jones partners with the Better Cotton Initiative to improve cotton farming globally This makes it better for farmers and the environment BCI provides farming-practice training It promotes things like water efficiency and reducing the most harmful chemicals",
            "image":"https://images.asos-media.com/products/jack-jones-intelligence-skinny-fit-stretch-jeans-in-mid-blue/13586448-1-bluedenim?$n_960w$&wid=952&fit=constrain"
          },
          {
            id: 1115,
            name:"Leather Jacket",
            price:15,
            size:'XL',
            description:"Smooth leather. Matte finish",
            "image":"https://images.asos-media.com/products/asos-design-leather-racer-jacket-in-brown/21187196-1-brown?$n_960w$&wid=952&fit=constrain"
          }
        ];
        resolve(DBProducts);
      }, 1000);
    });
    serverResponse.then(response => {
      updateProducts(response);
    });
  };

  return(

    <BrowserRouter>
      <Menu >
        <NavLink exact to={'/'} activeClassName="active">
          <MenuItem text="Home" />
        </NavLink>
        <NavLink to={'/shop-all'} activeClassName="active">
          <MenuItem text="Shop All" />
        </NavLink>
        <NavLink to={'/about'} activeClassName="active">
          <MenuItem text="About" />
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
          <Home productItems={products} addToCartFunction={addToCart} />
        </Route>

        <Route path="/product/:param">
          <ProductDetail products={products} />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>
      
      </Switch>

    </BrowserRouter>

  );

}

export default App;
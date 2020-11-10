import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import CartIcon from './components/CartIcon';
import Home from './components/Home';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import Item from './components/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){

	const [products, updateProducts] = useState();

	useEffect(() => {
    getProducts();
    return () => { console.log("updated"); };
  },[]);

	const addToCart = (itemCount) => {
  	alert(`${itemCount} item/s added to cart`);
  };

  const getProducts = () => {
    const serverResponse = new Promise(resolve => {
      setTimeout(() => {
        const DBProducts = [
	        {name:"T-Shit", price:20, size:'XL'},
	        {name:"Short", price:25, size:'40'},
	        {name:"Sneakers", price:60, size:'9'},
	        {name:"Hat", price:15, size:'M'}];
        resolve(DBProducts);
      }, 2000);
    });
    serverResponse.then(response => {
      updateProducts(response);
    });
  };

  return(
    <>
      <Menu >
				<MenuItem text="Home" url="#" />
				<MenuItem text="Shop All" url="/shop-all" />
				<MenuItem text="About" url="/about" />
				<MenuItem text="Contact" url="/contact" />
				<CartIcon />
			</Menu>
			<div id="home">
				<div class="container">
					<Home greeting="Welcome to my e-commerce" />
					<ItemList products={products}>
						<Item products={products}>
							<ItemCount initial={1} min={1} max={10} onAdd={addToCart} />
						</Item>
					</ItemList>
				</div>
			</div>
    </>
  );
}

export default App;
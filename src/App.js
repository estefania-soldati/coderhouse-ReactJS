import React from 'react';
import logo from './logo.svg';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import CartIcon from './components/CartIcon';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
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
				</div>
			</div>
    </>
  );
}

export default App;
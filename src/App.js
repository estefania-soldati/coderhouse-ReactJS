import React from 'react';
import logo from './logo.svg';
import Menu from './components/Menu';
import './App.css';

function App(){
  return(
    <>
      <Menu item1="Home" item2="Shop All" item3="About Us" item4="Contact" />
    </>
  );
}

export default App;
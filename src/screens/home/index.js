import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';

import ItemList from '../../components/ItemList';

import { FirebaseContext } from '../../context/FirebaseContext';

const Home = () => {

	const firebaseContextData = useContext(FirebaseContext);

	return(
      <div id="home">
        <div class="container">
          <h1>Check all of our products</h1>
          <ItemList products={firebaseContextData.products}></ItemList>
        </div>
      </div>
		)
}

export default Home;
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import ItemList from '../../components/ItemList';
import Item from '../../components/Item';
import Loader from '../../components/Loader';

const Home = ({productItems}) => {

	return(
      <div id="home">
        <div class="container">
          <h1>Shop Our New Collection</h1>
          <ItemList products={productItems}></ItemList>
        </div>
      </div>
		)
}

export default Home;
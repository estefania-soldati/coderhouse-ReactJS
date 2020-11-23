import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import ItemCount from '../../components/ItemCount';
import ItemList from '../../components/ItemList';
import Item from '../../components/Item';

const Home = ({productItems,addToCartFunction}) => {
	return(
      <div id="home">
        <div class="container">
          <h1>Shop Our New Collection</h1>
          <ItemList products={productItems}>
            <Item products={productItems}>
              <ItemCount initial={1} min={1} max={10} onAdd={addToCartFunction} buttonLabel="Add to Cart" />
            </Item>
          </ItemList>
        </div>
      </div>
		)
}

export default Home;
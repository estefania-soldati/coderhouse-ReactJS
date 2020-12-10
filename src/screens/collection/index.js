import React, { useState, useEffect, useContext } from 'react';
import {Link, useParams} from 'react-router-dom';

import ItemList from '../../components/ItemList';

import { FirebaseContext } from '../../context/FirebaseContext';

const Collection = () => {

	const [collectionProducts, setCollectionProducts ] = useState();

	const {param} = useParams();

	const firebaseContextData = useContext(FirebaseContext);

	useEffect(()=>{
	  const itemCollection = firebaseContextData.db.collection('products');
		const productsFromCollection = itemCollection.where('category','==',param);
		productsFromCollection.get().then((response)=>{
			const aux = response.docs.map(element => {
	      return { id: element.id, ...element.data() };
	    });
	    setCollectionProducts(aux);
	  });
	}, [param,firebaseContextData.db]);

	return(
      <div id="collection">
        <div class="container">
        	<h1>Check our {param} collection</h1>
          <ItemList products={collectionProducts}></ItemList>
        </div>
      </div>
		)
}

export default Collection;
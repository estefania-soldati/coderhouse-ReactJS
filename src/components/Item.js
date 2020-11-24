import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import Loader from './Loader';

const Item = ({product}) => {

	const [itemsCount, updateItemsCount] = useState(1);

	function qtyBoxUpdate(val){
		updateItemsCount(val);
	}

  if(product){
	  	let backgroundImage = product.image;
	    return (<>
	    	<div class="product-item col-lg-3 col-md-4 col-sm-6 col-12 text-center" >
				  <div class="product-info">
				  	<div class="image-container bg-cover-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
				    <h3>{product.name}</h3>
				    <div class="price">${product.price}</div>
				    <div class="flex buttons-container">
					    <ItemCount initial={1} min={1} max={10} onUpdate={qtyBoxUpdate} />
					    <button class="btn btn-primary btn-v1 add-to-cart animated" onClick={()=>{console.log('add to cart!')}}>Comprar {itemsCount}</button>
					    <Link to={`/product/${product.id}`} class="view-more">View More</Link>
				    </div>
				  </div>
				</div>
   	 </>)
  }else{
  	return(
  		<>
  			<Loader></Loader>
  		</>	
		)
  }
}

export default Item;
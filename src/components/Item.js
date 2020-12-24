import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import Loader from './Loader';
import { CartContext } from '../context/CartContext';
import $ from 'jquery';

const Item = ({product, key}) => {

	const [itemsCount, updateItemsCount] = useState(1);

	const CartContextData = useContext(CartContext);

	function qtyBoxUpdate(val){
		updateItemsCount(val);
	}

	function addToCart(prod){
		// update button text
		let clickedBtn = $('.add-to-cart[data-prod-id="'+prod.id+'"]');
		let originalHTML = clickedBtn.html();
		clickedBtn.html('Added to cart!');
		setTimeout(function(){
			clickedBtn.html(originalHTML);
		},1000);

		// get prod qty
		let qty = parseInt(clickedBtn.siblings('.quantity-box').find('input').val());

		// add prod to cart with its qty
		CartContextData.addProdToCart({...prod, quantity: qty});
	}

  if(product){
	  	let backgroundImage = product.image;
	    return (<>
	    	<div class="product-item col-lg-3 col-md-4 col-sm-6 col-12 text-center" id={product.id} >
				  <div class="product-info">
				  	<div class="image-container bg-cover-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
				    <h3>{product.name}</h3>
				    <div class="price">${product.price}</div>
				    <div class="flex buttons-container">
					    <ItemCount initial={1} min={1} max={10} onUpdate={qtyBoxUpdate} />
					    <button class="btn btn-primary btn-v1 add-to-cart animated" data-prod-id={product.id} onClick={()=>{addToCart(product)}}>Comprar {itemsCount}</button>
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
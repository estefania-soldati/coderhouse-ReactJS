import React from 'react';

const CartItem = ({product}) => {

  if(product){
	  	let backgroundImage = product.image;
	    return (<>
	    	<div class="product-item row" data-product-id="{product.id}">
			  	<div class="image-container bg-cover-center col-4" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
				  <div class="product-info col-8">
				    <h3>{product.name}</h3>
				    <p class="variant">Size: {product.size}</p>
				    <p class="price">${product.price}</p>
				  </div>
				</div>
   	 </>)
  }else{
  	return(
  		<>
  			<p>There was an error loading this product</p>
  		</>	
		)
  }
}

export default CartItem;
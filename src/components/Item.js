import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({products,children}) => {
  if(products){
	  const list = products.map((prod, index) => {
	  	let backgroundImage = prod.image;
	    return (<>
	    	<div class="product-item col text-center" >
				  <div class="product-info">
				  	<div class="image-container bg-cover-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
				    <h3>{prod.name}</h3>
				    <div class="price">${prod.price}</div>
				    <div class="flex buttons-container">
					    {children}
					    <Link to={`/product/${prod.id}`} class="view-more">View More</Link>
				    </div>
				  </div>
				</div>
	    </>)
	  })
  return list;
  }else{
  	return(
  		<>
  			<div class="loader-container text-center">
    	  	<img src='loading.gif' alt='loading' class='loading-gif'></img>;
      	</div>
  		</>	
		)
  }
}

export default Item;
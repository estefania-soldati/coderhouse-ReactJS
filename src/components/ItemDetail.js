import React from 'react';

const Item = ({product,children}) => {
  if(product){
    return (<>
			<div class="product-item col text-center">
			  <div class="product-info">
			    <h3>{product.name}</h3>
			    <div class="price">${product.price}</div>
			    {children}
			  </div>
			</div>
    </>)
  }
}

export default Item;
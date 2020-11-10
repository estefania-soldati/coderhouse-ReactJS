import React from 'react';

const Item = ({products,children}) => {
  if(products){
	  const list = products.map((prod, index) => {
	    return (<>
				<div class="product-item col text-center" key={index}>
				  <div class="product-info">
				    <h3>{prod.name}</h3>
				    <div class="price">${prod.price}</div>
				    {children}
				  </div>
				</div>
	    </>)
	  })
  return list;
  }
}

export default Item;
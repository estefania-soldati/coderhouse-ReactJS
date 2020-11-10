import React from 'react';

  const ItemList = ({products,children}) => {
    if(!products){
      return (<>
      	<div class="loader-container text-center">
    	  	<img src='loading.gif' alt='loading' class='loading-gif'></img>;
      	</div>
    	</>)

    }
    return <div class="products-grid row">
		  {children}
		</div>
  }

export default ItemList;
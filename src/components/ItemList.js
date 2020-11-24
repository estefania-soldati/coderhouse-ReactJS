import React from 'react';
import Item from './Item';
import Loader from './Loader';

  const ItemList = ({products}) => {
    if(products){
      const list = products.map((prod, index) => {
        return (<>
          <Item product={prod}></Item>
        </>)
      })
      return (
        <div class="row products-grid">
          {list}
        </div>
      );
    }else{
      return(
        <>
          <Loader></Loader>
        </>  
      )
    }
  }

export default ItemList;
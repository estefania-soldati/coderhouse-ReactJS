import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';

  const ItemDetailContainer = ({children}) => {
   
    const [item, updateItem] = useState();

    const getItem = () => {
      const serverResponse = new Promise(resolve => {
        setTimeout(() => {
          const DBItem = {name:"T-Shirt", price:20, size:'XL'};
          resolve(DBItem);
        }, 3000);
      });
      serverResponse.then(response => {
        updateItem(response);
      });
    };

    const addToCart = (itemCount) => {
      alert(`${itemCount} item/s added to cart`);
    };

    useEffect(() => {
      getItem();
      return () => { console.log("ItemDetailContainer updated"); };
    },[]);

    if(!item){
      return (<>
        <div class="loader-container text-center">
          <img src='loading.gif' alt='loading' class='loading-gif'></img>;
        </div>
      </>)

    }else{
      return <div class="products-grid row">
        <ItemDetail product={item}>
          <ItemCount initial={1} min={1} max={10} onAdd={addToCart} />
        </ItemDetail>
      </div>
    }

};

export default ItemDetailContainer;
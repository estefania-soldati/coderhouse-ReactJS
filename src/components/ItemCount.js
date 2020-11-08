import React, {Component,useState} from 'react';

const ItemCount = ({initial,min,max,onAdd}) => {

	const [contador, setContador] = useState(initial);

  const removeItem = () => {
  	if (contador > min) {
    	setContador( contador-1 );
  	}
  }

  const addItem = () => {
  	if (contador < max) {
    	setContador( contador+1 );
  	}
  }

	return(
		<>  
	    <div class="quantity-box flex">
			  <button class="minus" aria-label="Decrease the quantity"  onClick={()=>{removeItem()}}>-</button>
			  <input type="number" aria-label="Quantity" value={contador}></input>
			  <button class="plus" aria-label="Decrease the quantity" onClick={()=>{addItem()}}>+</button>
			</div>
			<button onClick={()=>{onAdd(contador)}}>add to cart</button>
	  </>
	)

};

export default ItemCount;
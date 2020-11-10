import React, {Component,useState} from 'react';

const ItemCount = ({initial,min,max,onAdd}) => {

	const [contador, setContador] = useState(initial);

  const removeItem = () => {
  	if (contador > min) {
    	setContador( contador-1 );
  	}
  };

  const addItem = () => {
  	if (contador < max) {
    	setContador( contador+1 );
  	}
  };

	return(
		<>  
	    <div class="quantity-box">
			  <button class="minus" aria-label="Decrease the quantity"  onClick={()=>{removeItem()}}>-</button>
			  <input type="number" aria-label="Quantity" value={contador}></input>
			  {/*<button class="plus" aria-label="Decrease the quantity" onClick={()=>{addItem()}}>+</button>*/}
				{/*es lo mismo llamar la funcion asi cuando no tiene parametros*/}
			  <button class="plus" aria-label="Decrease the quantity" onClick={addItem}>+</button>
			</div>
			<button class="btn btn-primary" onClick={()=>{onAdd(contador)}}>ADD TO CART</button>
	  </>
	)

};

export default ItemCount;
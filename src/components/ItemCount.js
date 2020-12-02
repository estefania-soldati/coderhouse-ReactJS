import React, {Component,useState} from 'react';

const ItemCount = ({initial,min,max,onUpdate}) => {

	const [contador, setContador] = useState(initial);

  const removeItem = () => {
  	if (contador > min) {
  		let newValue = contador-1;
      if (onUpdate) {
  		  onUpdate(newValue);
      }
    	setContador(newValue);
  	}
  };

  const addItem = () => {
  	if (contador < max) {
  		let newValue = contador+1;
  		if (onUpdate) {
        onUpdate(newValue);
      }
    	setContador(newValue);
  	}
  };

	return(
		<>  
	    <div class="quantity-box">
			  <button class="minus" aria-label="Decrease the quantity"  onClick={()=>{removeItem()}}>-</button>
			  <input type="number" aria-label="Quantity" value={contador} ></input>
			  {/*<button class="plus" aria-label="Decrease the quantity" onClick={()=>{addItem()}}>+</button>*/}
				{/*es lo mismo llamar la funcion asi cuando no tiene parametros*/}
			  <button class="plus" aria-label="Decrease the quantity" onClick={addItem}>+</button>
			</div>
	  </>
	)

};

export default ItemCount;
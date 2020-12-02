import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem';

const Cart = () => {

	const CartContextData = useContext(CartContext);

	let productsList;

	if (CartContextData.cartProducts.length > 0 ) {
		productsList = CartContextData.cartProducts.map((prod, index) => {
	    return (<>
	      <CartItem product={prod}></CartItem>
	    </>)
	  })
	}

	return(
		productsList ?
			<>
				<div id="cart-page">
					<div class="container">
						<div class="row">
							<h1>Your Cart</h1>
						</div>
						<div class="items">
							{productsList}
						</div>
						<div class="text-center">
							<Link to={'/'} class="underline continue-shopping">
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			</>
		:
			<>
	      <div id="cart-page">
					<div class="container">
						<div class="row">
							<h1>Your Cart</h1>
						</div>
						<div class="row">
							<p>Your cart is empty. Lets do something about that...</p>
						</div>
						<div class="row">
							<Link to={'/'} class="underline continue-shopping">
								Go Shopping!
							</Link>
						</div>
					</div>
				</div>
			</>
	)

}

export default Cart;
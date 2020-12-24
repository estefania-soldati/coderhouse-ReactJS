import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem';
import { getFirestore } from "../../firebase";
import $ from 'jquery';

const Cart = () => {

	const CartContextData = useContext(CartContext);

	let productsList;
	
	let cartTotal = 0;

	if (CartContextData.cartProducts.length > 0 ) {
		productsList = CartContextData.cartProducts.map((prod, index) => {
			cartTotal = cartTotal + prod.quantity*prod.price;
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
							<p class="cart-total">Total: ${cartTotal}</p>
							<Link to={'/'} class="underline continue-shopping">
								Continue Shopping
							</Link>
						</div>
						<div class="text-center">
							<NavLink to={'/checkout'} class="btn btn-v1 checkout-btn">
                Checkout
              </NavLink>
							<div class="success-message hide">
								<p>
									Thank you for your purchase!
									<br/>
									Order id: <span class="order-number"></span>
								</p>
							</div>
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
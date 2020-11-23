import React from 'react';
import {Link} from 'react-router-dom';

const Cart = () => {
	return(
			<>
	      <div id="cart-page">
					<div class="container">
						<div class="row">
							<h1>Your Cart</h1>
						</div>
						<div class="row items">
							<p>Cart items will be displayed here...</p>
						</div>
						<div class="row">
							<Link to={'/'} class="underline continue-shopping">
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			</>
		)
}

export default Cart;
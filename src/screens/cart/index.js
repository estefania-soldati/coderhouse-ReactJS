import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem';
import { getFirestore } from "../../firebase";
import $ from 'jquery';

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
						<div class="text-center">
							<button class="btn btn-primary btn-v1 checkout-btn" onClick={()=>{

						    // date
						    let formatedDate;
						    let date = new Date()
								let day = date.getDate()
								let month = date.getMonth() + 1
								let year = date.getFullYear()

								if(month < 10){
								  formatedDate = `${day}-0${month}-${year}`;
								}else{
								  formatedDate = `${day}-${month}-${year}`;
								}

								// cart total
						    let cartTotal = 0;
						    CartContextData.cartProducts.forEach(prod=>{
						      cartTotal = cartTotal + prod.price;
						    });
	
								// order
						    let order = {
						      buyer: {name: "John", phone: "11-1234-5678", email: "john.doe@gmail.com" },
						      items: CartContextData.cartProducts,
						      date: formatedDate,
						      total: cartTotal
						    };

						    // db 
								const db = getFirestore();
								
								db.collection('orders').add(order)
								.then(({id})=>{
									$('.success-message span').html(id);
									$('.success-message').fadeIn();
								}).catch(error =>{
									console.log('Error: '+error);
								}).finally(e => {
									console.log('order proccess ended')
								});

							}}>Checkout</button>

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
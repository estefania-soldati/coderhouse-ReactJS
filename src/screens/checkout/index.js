import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem';
import { getFirestore } from "../../firebase";
import $ from 'jquery';

const Checkout = () => {

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
				<div id="checkout-page">
					<div class="container">
						<div class="row">
							<h1>Checkout</h1>
						</div>
						<div class="row">
							<div class="col-sm-12 col-md-6 client-info">
								<div class="info-container">
									<h2>Please enter your contact information</h2>
									<div class="input-container">
										<label for="name">Name:</label>
										<input id="name" type="text"></input>
									</div>
									<div class="input-container">
										<label for="last-name">Last name:</label>
										<input id="last-name" type="text"></input>
									</div>
									<div class="input-container">
										<label for="name">Phone:</label>
										<input id="name" type="tel"></input>
									</div>
									<div class="input-container">
										<label for="email-1">Email:</label>
										<input id="email-1" type="email"></input>
									</div>
									<div class="input-container">
										<label for="email-2">Confirm Email:</label>
										<input id="email-2" type="email"></input>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-6 items">
								{productsList}
							</div>
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

							}}>Place your order</button>

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
							<h1>Checkout</h1>
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

export default Checkout;
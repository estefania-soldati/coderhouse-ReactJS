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

	let userName;
	let userLastName;
	let userPhone;
	let userEmail;

	function placeOrder(){
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
      buyer: {name: userName+" "+userLastName, phone: userPhone, email: userEmail },
      items: CartContextData.cartProducts,
      date: formatedDate,
      total: cartTotal
    };

    // db 
		const db = getFirestore();
		
		db.collection('orders').add(order)
		.then(({id})=>{
			$('.success-message .order-number').html(id);
			$('.success-message .user-name').html(userName);
			$('.success-message').fadeIn();
		}).catch(error =>{
			console.log('Error: '+error);
		}).finally(e => {
			console.log('order proccess ended')
		});
	}

	function checkOrder(){
		let infoCompleted = true;
		let inputs = document.querySelectorAll(".info-container input");

		inputs.forEach(function(input){
			let id = input.id;
			let value = input.value;
			
			// collect user's information from the inputs
			switch (id){
				case 'name':
					if (value !== "") {
						userName = value
					}else{
						alert('Please enter your name to continue.')
						infoCompleted = false;
					}
					break				
				case 'last-name':
					if (value !== "") {
						userLastName = value
					}else{
						alert('Please enter your last name to continue.')
						infoCompleted = false;
					}
					break				
				case 'phone':
					if (value !== "") {
						userPhone = value
					}else{
						alert('Please enter your phone number to continue.')
						infoCompleted = false;
					}
					break				
				case 'email-1':
					if (value !== "") {
						userEmail = value
					}else{
						alert('Please enter your email to continue.')
						infoCompleted = false;
					}
					break
				case 'email-2':
					if (value !== "") {
						if (value !== userEmail) {
							alert('Email confirmation does not match. Please verify your email address.')
							infoCompleted = false;
						}
					}else{
						alert('Please confirm your email to continue.')
						infoCompleted = false;
					}
					break
			}
		});

		if (infoCompleted) {
			placeOrder();
		}
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
										<label for="phone">Phone:</label>
										<input id="phone" type="tel"></input>
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
							<button class="btn btn-primary btn-v1 checkout-btn" onClick={()=>{checkOrder()}}>Place your order</button>
							<div class="success-message hide">
								<p>
									Thank you for your purchase <span class="user-name"></span>!
									<br/>
									Your order id is: <span class="order-number"></span>
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
import React, { useEffect, useState, useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import { CartContext } from '../../context/CartContext';
import { FirebaseContext } from '../../context/FirebaseContext';
import $ from 'jquery';

const ProductDetail = () => {

	const {param} = useParams();

	const [currentProd, setCurrentProd ] = useState({});

	const CartContextData = useContext(CartContext);

	const firebaseContextData = useContext(FirebaseContext);

	useEffect(()=>{
		if (firebaseContextData.db) {
			const itemCollection = firebaseContextData.db.collection('products');
			const idItem = itemCollection.doc(param);
			idItem.get().then((response)=>{
				setCurrentProd(response.data());
		  });
		}
	}, [param,firebaseContextData.db]);

	const addToCart = (prod) => {
		let qty = parseInt($('.quantity-box input').val());
		CartContextData.addProdToCart({...prod, quantity: qty});
		let originalHTML = $('.add-to-cart').html();
		$('.add-to-cart').html('Added to cart!');
		setTimeout(function(){
			$('.add-to-cart').html(originalHTML);
		},1000);
	};
	
	return(
		currentProd ?
			<>
				<div id="product-detail-page">
					<div class="container">
						<div class="row product">
							<div class="col-12 col-sm-6 image-container">
								<div class="image-bg bg-cover-center" style={{ backgroundImage: `url(${currentProd.image})`}}></div>
							</div>
							<div class="col-12 col-sm-6 product-info-container">
								<h1>{currentProd.name}</h1>
								<p class="variant">Size: {currentProd.size}</p>
								<p class="price">${currentProd.price}</p>
								<p class="description">{currentProd.description}</p>
								<div class="buttons-container flex">
									<div class="flex atc">
										<ItemCount initial={1} min={1} max={10} />
										<button class="btn btn-v1 btn-primary add-to-cart" onClick={()=>{addToCart(currentProd)}}>Add To Cart</button>
									</div>
									<Link to={'/'} class="underline back-to-home">
										Go back to homepage
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		:
			<>
	      <div class="no-product-found-message">
	      	<h2>Ops!</h2>
	  	  	<p>Looks like that product doesn't exists.</p>
	  	  	<p><a href="/">Click Here</a> to check our latest collection.</p>
	    	</div>
			</>
	)

}

export default ProductDetail;
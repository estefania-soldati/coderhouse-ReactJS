import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const ProductDetail = ({products}) => {

	const {param} = useParams();

	const [currentProd, setCurrentProd ] = useState({});

	useEffect(()=>{
		if (products) {
			for (var i = 0; i<products.length; i++) {
				if(products[i].id == param){
					setCurrentProd(products[i]);
					break;
				}
			}
		}
	}, [param]);

	return(
		currentProd.id ?
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
									<button class="btn btn-v1 btn-primary">Add To Cart</button>
									<Link to={'/'} class="underline">
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
	      <h1>No product selected</h1>
			</>
	)

}

export default ProductDetail;
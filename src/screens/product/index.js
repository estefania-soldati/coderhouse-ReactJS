import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
	return(
			<>
	      <h1>Product page</h1>
	      <a>
					<Link to={'/'}>
						go to homepage
					</Link>
				</a>
			</>
		)
}

export default Home;
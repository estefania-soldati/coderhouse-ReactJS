import React from 'react';

const Menu = ({url, text}) => {
	return(
      <li>
      	<a href={url}>{text}</a>
      </li>
		)
}

export default Menu;